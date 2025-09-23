"use client"

import React from 'react'
import { LogoHeader } from '@/components/logo-header'
import Image from 'next/image'
import { getOnboardingImage } from '@/constants/images'
import { useRouter } from 'next/navigation'

export default function LifestyleAssessmentIntro({ step = 10 }: { step?: number }) {
    const router = useRouter();
    const currentImage = getOnboardingImage(step);

    return (
        <div className="min-h-screen bg-[#EEF3FF] relative">
            <LogoHeader />

            <div className="container-responsive min-h-screen flex flex-col justify-center py-8">
                <div className="flex-1 flex flex-col items-center justify-center space-y-8">
                    <div className="w-full max-w-md mx-auto mb-6">
                        <Image src={currentImage.src} alt={currentImage.alt} width={488} height={451} className="w-full h-full object-contain mt-10" />
                    </div>

                    <div className="text-center px-6">
                        <h1 className="text-2xl font-semibold text-gray-800 mb-3" style={{ fontSize: '28px', lineHeight: '1.2' }}>
                            Let's do a lifestyle assessment to understand where your health stands.
                        </h1>
                        <p className="text-sm text-gray-600">Please fill it out genuinely so we can suggest a better lifestyle routine for you.</p>
                    </div>

                    <div className="w-full max-w-md mt-2">
                        <button onClick={() => router.push('/onboarding/activity-level')} className="w-full rounded-full bg-blue-700 text-white py-3 font-medium shadow-sm hover:bg-blue-800 transition-colors">OK</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
