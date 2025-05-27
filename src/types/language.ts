// Language types and constants
export const Language = {
  EN: "en",
  JA: "ja",
  ZH: "zh",
} as const;

export type Language = (typeof Language)[keyof typeof Language];
