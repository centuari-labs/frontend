export const BASE_URL =
  process.env.NEXT_PUBLIC_ENV === "localhost"
    ? process.env.NEXT_PUBLIC_BASE_URL
    : `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`;

