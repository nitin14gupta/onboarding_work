export type OnboardingImage = {
  id: number;
  src: string;
  alt: string;
};

// Public assets are placed under /public/images as Page {n}.png
// Map 1..27 to their respective files
export const ONBOARDING_IMAGES: OnboardingImage[] = Array.from({ length: 27 }, (_, i) => {
  const id = i + 1;
  return {
    id,
    src: `/images/Page ${id}.png`,
    alt: `Onboarding illustration ${id}`,
  };
});

export const getOnboardingImage = (step: number): OnboardingImage => {
  const clamped = Math.min(Math.max(step, 1), 27);
  return ONBOARDING_IMAGES[clamped - 1];
};

