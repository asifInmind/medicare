const BASE_URL = process.env.NEXT_PUBLIC_API_BASE_URL;

export const API_ROUTES = {
  AUTH: {
    LOGIN: `${BASE_URL}/auth/login`,
    REGISTER: `${BASE_URL}/auth/register`,
  },
  PATIENTS: {
    ADD_PATIENTS: `${BASE_URL}/`,
    ADD_NEW_SCHEDULE: `${BASE_URL}/`,
  },
  TASK: {
    ADD_NEW_TASK: `${BASE_URL}/addnewtask`,
  },
};
