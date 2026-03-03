import { API_BASE_URL, API_TIMEOUT_MS, hasApiBaseUrl } from "@/config/env";

const normalizePath = (path = "") => path.replace(/^\/+/, "");

const buildApiUrl = (path) => `${API_BASE_URL}/${normalizePath(path)}`;

const parseResponseBody = async (response) => {
  const contentType = response.headers.get("content-type") || "";
  if (contentType.includes("application/json")) {
    return response.json();
  }

  const text = await response.text();
  return text || null;
};

export class ApiError extends Error {
  constructor(message, { status = 0, data = null } = {}) {
    super(message);
    this.name = "ApiError";
    this.status = status;
    this.data = data;
  }
}

export const apiRequest = async (path, options = {}) => {
  if (!hasApiBaseUrl()) {
    throw new ApiError(
      "API base URL is not configured. Set VITE_API_BASE_URL in your .env file.",
    );
  }

  const controller = new AbortController();
  const timeoutMs = Number(options.timeoutMs ?? API_TIMEOUT_MS);
  const timeoutId = setTimeout(() => controller.abort(), timeoutMs);

  const headers = new Headers(options.headers || {});
  if (!headers.has("Accept")) {
    headers.set("Accept", "application/json");
  }
  const isFormData = options.body instanceof FormData;
  if (!isFormData && options.body && !headers.has("Content-Type")) {
    headers.set("Content-Type", "application/json");
  }

  try {
    const response = await fetch(buildApiUrl(path), {
      method: options.method || "GET",
      body: options.body,
      headers,
      signal: options.signal || controller.signal,
    });

    const responseData = await parseResponseBody(response);
    if (!response.ok) {
      const errorMessage =
        (typeof responseData === "string" && responseData) ||
        responseData?.message ||
        "API request failed";

      throw new ApiError(
        errorMessage,
        {
          status: response.status,
          data: responseData,
        },
      );
    }

    return responseData;
  } catch (error) {
    if (error.name === "AbortError") {
      throw new ApiError("Request timed out. Please try again.");
    }

    if (error instanceof ApiError) {
      throw error;
    }

    throw new ApiError(error.message || "Unexpected network error");
  } finally {
    clearTimeout(timeoutId);
  }
};
