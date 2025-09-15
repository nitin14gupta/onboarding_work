"use client";
import Image from "next/image";
import { useMemo, useEffect, useState } from "react";
import { notFound, useParams, useRouter } from "next/navigation";
import { onboardingData, OnboardingStep } from "@/constants/onboardingData";

const steps = onboardingData; // use data-driven steps

function Header() {
  return (
    <header className="w-full py-3 flex items-center">
      <div className="h-12 w-12 rounded-full bg-white border border-[#E5E7EB] overflow-hidden">
        <Image
          src="/images/vridhee_logo.png"
          alt="logo"
          className="h-full w-full object-contain"
          width={100}
          height={100}
        />
      </div>

    </header>
  );
}

function NavButtons({
  onPrev,
  onNext,
  nextLabel = "Next",
  prevLabel = "Previous",
  disableNext,
}: {
  onPrev?: () => void;
  onNext?: () => void;
  nextLabel?: string;
  prevLabel?: string;
  disableNext?: boolean;
}) {
  return (
    <div className="mt-6 grid grid-cols-2 gap-3">
      <button onClick={onPrev} className="btn-secondary">{prevLabel}</button>
      <button onClick={onNext} className="btn-primary" disabled={disableNext}>{nextLabel}</button>
    </div>
  );
}

function VersionA({ image }: { image: string }) {
  return (
    <div className="fade-in">
      <div className="w-full flex justify-center">
        <Image src={image} alt="Onboarding" width={803} height={768} priority className="w-full h-auto max-w-md" />
      </div>
    </div>
  );
}

function VersionB({ image }: { image: string }) {
  return (
    <div className="fade-in">
      <div className="w-full flex justify-center">
        <Image src={image} alt="Onboarding" width={803} height={768} priority className="w-full h-auto max-w-md" />
      </div>
    </div>
  );
}

export default function OnboardingStep() {
  const params = useParams<{ step: string }>();
  const router = useRouter();
  const total = steps.length;
  const current = Number(params.step);
  const [loading, setLoading] = useState(false);

  const config = useMemo<OnboardingStep | undefined>(() => steps[current - 1], [current]);
  if (!config) return notFound();

  const go = (n: number) => {
    setLoading(true);
    router.push(`/onboarding/${n}`);
  };

  const handlePrev = () => current > 1 && go(current - 1);
  const handleNext = () => current < total && go(current + 1);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight" || e.key.toLowerCase() === "enter") handleNext();
      if (e.key === "ArrowLeft") handlePrev();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [current]);

  return (
    <main className="container-responsive min-h-dvh flex flex-col">
      <Header />

      <section className="flex-1 overflow-auto">
        {/* <h1 className="text-center text-xl font-semibold text-[#20242B]">{config.title}</h1> */}
        {/* {config.subtext && (
          <p className="text-center text-sm text-[#555A6B] mt-1">{config.subtext}</p>
        )} */}

        <div className="mt-6">
          <VersionA image={config.image} />
        </div>
        <h1 className="text-center text-[2.2vh] font-semibold text-[#20242B] mt-6">{config.title}</h1>
        {config.subtext && (
          <p className="text-center text-[9px] text-[#555A6B] mt-2">{config.subtext}</p>
        )}
      </section>

      {/* Buttons based on data definition */}
      <div className="mb-6">
        {config.buttons.length === 1 ? (
          <div className="grid grid-cols-1">
            <button onClick={handleNext} className="btn-primary">{config.buttons[0].label}</button>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3">
            <button onClick={handlePrev} className="btn-secondary">{config.buttons[0].label}</button>
            <button onClick={handleNext} className="btn-primary">{config.buttons[1].label}</button>
          </div>
        )}
      </div>

      {loading && (
        <div className="fixed inset-0 grid place-items-center bg-black/5 animate-pulse pointer-events-none">
          <div className="h-10 w-10 rounded-full border-2 border-[#0A4FD5] border-t-transparent animate-spin" />
        </div>
      )}
    </main>
  );
}


