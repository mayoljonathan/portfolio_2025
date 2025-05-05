interface EnvironmentVariable {
  NEXT_PUBLIC_GA_TRACKING_ID: string;
}

declare namespace NodeJS {
  type ProcessEnv = EnvironmentVariable;
}
