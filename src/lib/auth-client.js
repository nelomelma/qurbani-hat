
import { createAuthClient } from "better-auth/react";

const authBaseURL = import.meta.env.DEV
  ? import.meta.env.VITE_AUTH_URL
  : window.location.origin;

export const authClient = createAuthClient({
  baseURL: `${authBaseURL}/api/auth`,
});
