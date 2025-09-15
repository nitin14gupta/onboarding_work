// Centralized color palette for the onboarding flow
// Keep names semantic so swapping themes is easy
export const COLORS = {
  background: '#FFFFFF',
  surface: '#F7F8FA',
  primary: '#0A4FD5',
  primaryDark: '#083EAC',
  primaryLight: '#E6EEFF',
  text: '#20242B',
  textMuted: '#555A6B',
  accent: '#2B2A2A',
  border: '#E5E7EB',
  success: '#10B981',
  warning: '#F59E0B',
  danger: '#EF4444',
};

export type ColorKey = keyof typeof COLORS;

