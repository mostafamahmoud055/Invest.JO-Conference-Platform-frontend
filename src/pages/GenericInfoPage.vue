<template>
  <section class="agenda-page">
    <div class="agenda-hero">
      <v-container>
        <h1>Conference Agenda</h1>
        <p>Two days packed with insights, networking, and investment opportunities</p>
      </v-container>
    </div>

    <v-container class="agenda-filter">
      <div class="filter-left">
        <button
          v-for="tab in dayTabs"
          :key="tab.key"
          class="tab"
          :class="{ active: activeDay === tab.key }"
          @click="activeDay = tab.key"
        >
          {{ tab.label }}
        </button>
      </div>

      <div class="filter-right">
        <input v-model.trim="searchQuery" type="text" placeholder="Search Sessions" />
      </div>
    </v-container>

    <v-container class="agenda-wrapper">
      <div v-if="isLoading" class="agenda-state">Loading agenda sessions...</div>
      <div v-else-if="loadError" class="agenda-state agenda-state--error">{{ loadError }}</div>
      <template v-else>
        <div v-if="!groupedDays.length" class="agenda-state">No sessions found.</div>

        <div v-for="day in groupedDays" :key="day.key" class="day-card">
          <div class="day-header">
            <div class="day-icon">
              <v-icon icon="mdi-calendar-month-outline" size="20" />
            </div>
            <div>
              <h3>{{ day.label }}</h3>
              <span>{{ day.dateLabel }}</span>
            </div>
          </div>

          <div v-for="session in day.sessions" :key="session.id" class="session">
            <div class="time">{{ session.time }}</div>

            <div class="details">
              <h4>{{ session.title }}</h4>
              <p>{{ session.subtitle }}</p>
            </div>

            <div class="badge" :class="session.badgeClass">{{ session.category }}</div>
          </div>
        </div>
      </template>
    </v-container>
  </section>
</template>

<script setup>
import { computed, onMounted, ref, watch } from "vue";
import { fetchAgendaContent } from "@/services/contentApi";

const isLoading = ref(false);
const loadError = ref("");
const searchQuery = ref("");
const activeDay = ref("all");
const sessions = ref([]);

const toText = (value) => (value === null || value === undefined ? "" : String(value).trim());

const pickFirst = (...values) => values.find((value) => toText(value).length > 0);

const toAgendaArray = (response) => {
  if (Array.isArray(response)) return response;
  if (Array.isArray(response?.data)) return response.data;
  if (Array.isArray(response?.data?.data)) return response.data.data;
  if (Array.isArray(response?.agendas)) return response.agendas;
  return [];
};

const extractNestedSessions = (item) => {
  const candidates = [item?.sessions, item?.agenda_sessions, item?.items, item?.events];
  return candidates.find((candidate) => Array.isArray(candidate)) || [];
};

const flattenAgendaNodes = (nodes) => {
  const output = [];
  const queue = [...nodes];

  while (queue.length) {
    const current = queue.shift();
    if (Array.isArray(current)) {
      queue.unshift(...current);
      continue;
    }
    output.push(current);
  }

  return output;
};

const parseDate = (value) => {
  if (!value) return null;
  const parsed = new Date(value);
  return Number.isNaN(parsed.getTime()) ? null : parsed;
};

const formatDateLabel = (value) => {
  const parsed = parseDate(value);
  if (!parsed) return toText(value) || "Date TBA";

  return parsed.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
};

const createDayKey = (dateValue, dayLabel, fallbackIndex) => {
  const parsed = parseDate(dateValue);
  if (parsed) return `date-${parsed.toISOString().slice(0, 10)}`;

  const label = toText(dayLabel).toLowerCase().replace(/\s+/g, "-");
  if (label) return `day-${label}`;

  return `day-${fallbackIndex}`;
};

const parseDaySort = (dateValue, fallbackIndex) => {
  const parsed = parseDate(dateValue);
  if (parsed) return parsed.getTime();
  return 9000000000000 + fallbackIndex;
};

const parseTimeSort = (timeText, fallbackIndex) => {
  const text = toText(timeText).toLowerCase();
  if (!text) return 8000 + fallbackIndex;

  const match = text.match(/(\d{1,2})[:.](\d{2})\s*(am|pm)?/i);
  if (!match) return 8000 + fallbackIndex;

  let hours = Number(match[1]);
  const minutes = Number(match[2]);
  const period = toText(match[3]).toLowerCase();

  if (period === "pm" && hours < 12) hours += 12;
  if (period === "am" && hours === 12) hours = 0;

  return hours * 60 + minutes;
};

const badgeClassForCategory = (categoryText) => {
  const category = toText(categoryText).toLowerCase();
  if (category.includes("registration") || category.includes("presentation") || category.includes("welcome")) {
    return "green";
  }
  if (category.includes("keynote") || category.includes("plenary")) {
    return "purple";
  }
  if (category.includes("panel") || category.includes("workshop") || category.includes("session")) {
    return "blue";
  }
  return "amber";
};

const normalizeSession = (session, dayContext, index) => {
  const dateValue =
    pickFirst(dayContext?.date, dayContext?.day_date, session?.date, session?.day_date, session?.agenda_date) || "";

  const dayName = pickFirst(dayContext?.day_name, dayContext?.day, session?.day_name, session?.day);
  const dayLabel = toText(dayName) || `Day ${index}`;
  const dayKey = createDayKey(dateValue, dayLabel, index);

  const time =
    pickFirst(session?.time, session?.start_time, session?.session_time, session?.starts_at, session?.start_at) ||
    "TBA";

  const title = pickFirst(session?.title, session?.name, session?.session_title, dayContext?.title) || "";
  const speaker = pickFirst(session?.speaker, session?.speaker_name, session?.host, session?.moderator);
  const location = pickFirst(session?.location, session?.hall, session?.venue, session?.room);
  const category = pickFirst(
    session?.category,
    session?.type,
    session?.session_type,
    session?.tag,
    session?.industry,
    "Session",
  );

  const subtitleParts = [toText(speaker), toText(location)].filter(Boolean);

  return {
    id: pickFirst(session?.id, session?.uuid, `${dayKey}-${index}`),
    dayKey,
    dayLabel,
    dateLabel: formatDateLabel(dateValue),
    daySortValue: parseDaySort(dateValue, index),
    time,
    timeSortValue: parseTimeSort(time, index),
    title: toText(title),
    subtitle: subtitleParts.join(" - ") || "Details will be announced.",
    category: toText(category) || "Session",
    badgeClass: badgeClassForCategory(category),
  };
};

const normalizeAgendaResponse = (response) => {
  const items = flattenAgendaNodes(toAgendaArray(response));
  const normalized = [];

  items.forEach((item, itemIndex) => {
    const nestedSessions = extractNestedSessions(item);

    if (nestedSessions.length) {
      nestedSessions.forEach((session, sessionIndex) => {
        const normalizedSession = normalizeSession(session, item, itemIndex * 100 + sessionIndex + 1);
        if (normalizedSession.title) normalized.push(normalizedSession);
      });
      return;
    }

    const normalizedSession = normalizeSession(item, null, itemIndex + 1);
    if (normalizedSession.title) normalized.push(normalizedSession);
  });

  return normalized;
};

const loadAgenda = async () => {
  isLoading.value = true;
  loadError.value = "";

  try {
    const response = await fetchAgendaContent();
    sessions.value = normalizeAgendaResponse(response);
  } catch (error) {
    loadError.value = error?.message || "Failed to load agenda data.";
    sessions.value = [];
  } finally {
    isLoading.value = false;
  }
};

const dayTabs = computed(() => {
  const dayMap = new Map();

  sessions.value.forEach((session) => {
    if (!dayMap.has(session.dayKey)) {
      dayMap.set(session.dayKey, {
        key: session.dayKey,
        dayLabel: session.dayLabel,
        dateLabel: session.dateLabel,
        daySortValue: session.daySortValue,
      });
    }
  });

  const sorted = Array.from(dayMap.values()).sort((a, b) => a.daySortValue - b.daySortValue);

  return [
    { key: "all", label: "All" },
    ...sorted.map((day) => ({
      key: day.key,
      label: day.dateLabel === "Date TBA" ? day.dayLabel : `${day.dayLabel}, ${day.dateLabel}`,
    })),
  ];
});

watch(dayTabs, (tabs) => {
  if (!tabs.some((tab) => tab.key === activeDay.value)) {
    activeDay.value = "all";
  }
});

const groupedDays = computed(() => {
  const keyword = searchQuery.value.toLowerCase();

  const filtered = sessions.value.filter((session) => {
    if (activeDay.value !== "all" && session.dayKey !== activeDay.value) return false;

    if (!keyword) return true;

    const searchable = `${session.title} ${session.subtitle} ${session.category}`.toLowerCase();
    return searchable.includes(keyword);
  });

  const dayMap = new Map();

  filtered.forEach((session) => {
    if (!dayMap.has(session.dayKey)) {
      dayMap.set(session.dayKey, {
        key: session.dayKey,
        label: session.dayLabel,
        dateLabel: session.dateLabel,
        daySortValue: session.daySortValue,
        sessions: [],
      });
    }

    dayMap.get(session.dayKey).sessions.push(session);
  });

  return Array.from(dayMap.values())
    .map((day) => ({
      ...day,
      sessions: [...day.sessions].sort((a, b) => a.timeSortValue - b.timeSortValue),
    }))
    .sort((a, b) => a.daySortValue - b.daySortValue);
});

onMounted(loadAgenda);
</script>

<style scoped>
.agenda-page {
  background: #f3f5f8;
}

.agenda-hero {
  background: linear-gradient(180deg, #1f4aa8 0%, #184291 100%);
  padding: 80px 0 100px;
}

.agenda-hero p {
  font-size: 18px;
  opacity: 0.9;
  color: white;
}
.agenda-filter {
  margin-top: -50px;
  position: relative;
  z-index: 2;
}

.filter-left {
  background: #ffffff;
  padding: 6px;
  border-radius: 12px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.05);
}
.tab {
  padding: 10px 20px;
  border-radius: 8px;
  border: none;
  background: transparent;
  font-weight: 500;
}

.tab.active {
  background: #1f4aa8;
  color: white;
}
.agenda-hero h1 {
  font-size: 40px;
  font-weight: 700;
  margin-bottom: 10px;
  position: relative;
    color: white;
}

.agenda-hero h1::after {
  content: "";
  width: 70px;
  height: 3px;
  background: #ef4444;
  display: block;
  margin-top: 10px;
}

.agenda-filter {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 0px;
}

.filter-left {
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
}

.tab {
  padding: 10px 18px;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  background: white;
  cursor: pointer;
  transition: all 0.2s ease;
}

.tab:hover {
  border-color: #1d4ea3;
  color: #1d4ea3;
}

.tab.active {
  background: #1d4ea3;
  color: white;
  border-color: #1d4ea3;
}

.filter-right input {
  width: 320px;
  padding: 12px 16px;
  border-radius: 10px;
  border: 1px solid #d1d5db;
  background: white;
  box-shadow: 0 2px 6px rgba(0,0,0,0.04);
}

.agenda-wrapper {
  margin-top: 30px;
  padding: 40px;
  background: #eef1f5;
  border-radius: 20px;
}
.agenda-state {
  background: white;
  border-radius: 12px;
  padding: 24px;
  text-align: center;
  color: #334155;
  font-weight: 500;
}

.agenda-state--error {
  color: #b91c1c;
}

.day-card {
  background: #ffffff;
  padding: 24px;
  border-radius: 16px;
  margin-bottom: 30px;
  box-shadow: 0 6px 18px rgba(0,0,0,0.04);
}

.day-header {
  display: flex;
  gap: 14px;
  align-items: center;
  margin-bottom: 20px;
}

.day-icon {
  width: 36px;
  height: 36px;
  border-radius: 999px;
  display: grid;
  place-items: center;
  background: #e2ebfb;
  color: #1d4ea3;
}

.day-header h3 {
  margin: 0;
}

.session {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
  border-radius: 14px;
  background: #f7f9fc;
  margin-bottom: 14px;
  transition: 0.2s ease;
}

.session:hover {
  transform: translateY(-2px);
  box-shadow: 0 6px 14px rgba(0,0,0,0.05);
}

.time {
  font-weight: 600;
  color: #1f4aa8;
  min-width: 100px;
}

.details h4 {
  font-size: 16px;
  font-weight: 600;
}

.details p {
  font-size: 14px;
  color: #6b7280;
}

.time {
  width: 110px;
  font-weight: 600;
  color: #1d4ea3;
}

.details {
  flex: 1;
}

.details h4 {
  margin: 0;
}

.details p {
  margin: 4px 0 0;
  color: #64748b;
}

.badge {
  padding: 6px 14px;
  border-radius: 999px;
  font-size: 12px;
  font-weight: 600;
  white-space: nowrap;
}

.badge.green {
  background: #d1fae5;
  color: #047857;
}

.badge.purple {
  background: #ede9fe;
  color: #6d28d9;
}

.badge.blue {
  background: #dbeafe;
  color: #1d4ed8;
}

.badge.amber {
  background: #fef3c7;
  color: #92400e;
}

@media (max-width: 1200px) {
  .agenda-wrapper {
    padding: 24px;
  }

  .agenda-hero h1 {
    font-size: 34px;
  }
}

@media (max-width: 960px) {
  .agenda-filter {
    flex-direction: column;
    align-items: flex-start;
    gap: 14px;
    margin-top: -20px;
  }

  .filter-right {
    width: 100%;
  }

  .filter-right input {
    width: 100%;
  }

  .agenda-wrapper {
    padding: 20px;
  }

  .session {
    padding: 16px;
  }

  .time {
    width: 90px;
  }
}

@media (max-width: 600px) {
  .agenda-hero {
    padding: 40px 0;
  }

  .agenda-hero h1 {
    font-size: 26px;
    line-height: 1.3;
  }

  .agenda-hero h1::after {
    width: 55px;
  }

  .agenda-filter {
    margin-top: -16px;
  }

  .filter-left {
    gap: 8px;
  }

  .tab {
    padding: 8px 14px;
    font-size: 13px;
  }

  .agenda-wrapper {
    padding: 14px;
    border-radius: 12px;
  }

  .day-card {
    padding: 16px;
  }

  .day-header {
    gap: 10px;
  }

  .day-header h3 {
    font-size: 18px;
  }

  .session {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }

  .time {
    width: auto;
    font-size: 14px;
  }

  .details h4 {
    font-size: 15px;
    line-height: 1.4;
  }

  .details p {
    font-size: 13px;
  }

  .badge {
    align-self: flex-start;
  }
}

@media (max-width: 420px) {
  .agenda-hero h1 {
    font-size: 22px;
  }

  .tab {
    font-size: 12px;
    padding: 6px 10px;
  }

  .details h4 {
    font-size: 14px;
  }

  .agenda-wrapper {
    padding: 10px;
  }
}
@media (max-width: 960px) {

  .agenda-filter {
    flex-direction: column;
    align-items: stretch;
    gap: 16px;
  }

  .filter-right input {
    width: 100%;
  }

  .agenda-wrapper {
    padding: 24px;
  }

  .session {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }

  .time {
    min-width: auto;
  }

  .badge {
    align-self: flex-start;
  }
}
</style>
