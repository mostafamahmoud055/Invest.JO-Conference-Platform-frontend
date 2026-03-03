import {
  API_ROUTES,
  resolveApiPath,
  withApiQuery,
} from "@/config/apiRoutes";
import { apiRequest } from "@/services/apiClient";

export const fetchHomeContent = () => apiRequest(API_ROUTES.content.home);

export const fetchAboutContent = () => apiRequest(API_ROUTES.content.about);

export const fetchAgendaContent = () => apiRequest(API_ROUTES.content.agenda);

export const fetchSpeakers = () => apiRequest(API_ROUTES.content.speakers);

export const fetchTourismContent = () => apiRequest(API_ROUTES.content.tourism);

export const fetchPartners = () => apiRequest(API_ROUTES.content.partners);

export const fetchNewsUpdates = (params = {}) =>
  apiRequest(withApiQuery(API_ROUTES.content.newsUpdates, params));

export const fetchInvestmentOpportunities = (params = {}) =>
  apiRequest(withApiQuery(API_ROUTES.opportunities.list, params));

export const fetchInvestmentOpportunityDetails = (id) =>
  apiRequest(resolveApiPath(API_ROUTES.opportunities.details, { id }));
