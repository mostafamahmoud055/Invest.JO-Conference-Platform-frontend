const getEnvPath = (key, fallback) => {
  const value = import.meta.env[key]?.trim();
  return value && value.length > 0 ? value : fallback;
};

const trimSlashes = (value) => value.replace(/^\/+|\/+$/g, "");

export const resolveApiPath = (template, params = {}) => {
  let resolved = template;
  Object.entries(params).forEach(([key, value]) => {
    resolved = resolved.replace(`:${key}`, encodeURIComponent(String(value)));
  });
  return resolved;
};

export const withApiQuery = (path, query = {}) => {
  const searchParams = new URLSearchParams();
  Object.entries(query).forEach(([key, value]) => {
    if (value === undefined || value === null || value === "") return;
    searchParams.append(key, String(value));
  });

  const queryString = searchParams.toString();
  return queryString ? `${path}?${queryString}` : path;
};

export const API_ROUTES = {
  auth: {
    register: getEnvPath(
      "VITE_API_REGISTER_ENDPOINT",
      import.meta.env.VITE_REGISTER_ENDPOINT?.trim() || "/register",
    ),
  },
  content: {
    home: getEnvPath("VITE_API_HOME_ENDPOINT", "/home"),
    about: getEnvPath("VITE_API_ABOUT_ENDPOINT", "/about"),
    agenda: getEnvPath("VITE_API_AGENDA_ENDPOINT", "/agendas"),
    speakers: getEnvPath("VITE_API_SPEAKERS_ENDPOINT", "/speakers"),
    tourism: getEnvPath("VITE_API_TOURISM_ENDPOINT", "/tourism"),
    partners: getEnvPath("VITE_API_PARTNERS_ENDPOINT", "/partners"),
    newsUpdates: getEnvPath("VITE_API_NEWS_ENDPOINT", "/news-updates"),
  },
  opportunities: {
    list: getEnvPath(
      "VITE_API_OPPORTUNITIES_ENDPOINT",
      "/investment-opportunities",
    ),
    details: getEnvPath(
      "VITE_API_OPPORTUNITY_DETAILS_ENDPOINT",
      "/investment-opportunities/:id",
    ),
  },
  contact: {
    submit: getEnvPath("VITE_API_CONTACT_ENDPOINT", "/contact"),
  },
};

export const listConfiguredApiRoutes = () => {
  const result = {};
  Object.entries(API_ROUTES).forEach(([groupKey, routes]) => {
    result[groupKey] = {};
    Object.entries(routes).forEach(([routeKey, routePath]) => {
      result[groupKey][routeKey] = `/${trimSlashes(routePath)}`;
    });
  });
  return result;
};
