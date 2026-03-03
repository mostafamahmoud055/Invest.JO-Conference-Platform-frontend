import { API_ROUTES } from "@/config/apiRoutes";
import { apiRequest } from "@/services/apiClient";

export const submitContactForm = (payload) =>
  apiRequest(API_ROUTES.contact.submit, {
    method: "POST",
    body: JSON.stringify(payload),
  });
