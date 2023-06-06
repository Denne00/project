// types/env.d.ts
declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_API_URL: string;
    MONGODB_URI: string;
    SECRET: string;
  }
}
