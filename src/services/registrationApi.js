import { API_ROUTES } from "@/config/apiRoutes";
import { apiRequest } from "@/services/apiClient";

const FIELD_MAP = {
  nationality: "nationality",
  firstName: "first_name",
  father_name: "father_name",
  grandfather_name: "grandfather_name",
  middleName: "middle_name",
  familyName: "family_name",
  nationalId: "national_id",
  lastName: "last_name",
  passportFile: "passport_file",
  email: "email",
  phoneCode: "phone_code",
  phoneNumber: "phone_number",
  jobTitle: "job_title",
  company: "company",
  website: "website",
  industry: "industry",
  country: "country",
  linkedinUrl: "linkedin_url",
  bio: "bio",
  arrivalDate: "arrival_date",
  arrivalTime: "arrival_time",
  departureDate: "departure_date",
  departureTime: "departure_time",
  hotel: "hotel",
  hotel_name: "hotel_name",
};

const appendFormValue = (formData, key, value) => {
  if (value === null || value === undefined || value === "") {
    return;
  }

  if (Array.isArray(value)) {
    value.forEach((entry) => {
      const file = entry instanceof File ? entry : entry?.file || entry?.raw;
      if (file instanceof File) {
        formData.append(key, file);
      }
    });
    return;
  }

  formData.append(key, String(value));
};

export const submitRegistration = (payload) => {
  const normalizedPayload = {
    ...payload,
    // Backend requires last_name; for Jordanian flow use familyName as fallback.
    lastName: payload.lastName || payload.familyName,
  };

  const formData = new FormData();
  Object.entries(FIELD_MAP).forEach(([sourceKey, targetKey]) => {
    appendFormValue(formData, targetKey, normalizedPayload[sourceKey]);
  });

  return apiRequest(API_ROUTES.auth.register, {
    method: "POST",
    body: formData,
    timeoutMs: 120000,
  });
};
