"use client"

import React from 'react'
import { LogoHeader } from '@/components/logo-header'
import Image from 'next/image'
import { getOnboardingImage } from '@/constants/images'
import { useRouter } from 'next/navigation'

export default function HealthWarningPage({ step = 19 }: { step?: number }) {
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
                        <h1 className="text-2xl font-semibold text-[#F4A623] mb-4" style={{ fontSize: '26px', lineHeight: '1.2' }}>
                            Health Warning Alert !
                        </h1>
                        <div className="text-left max-w-md mx-auto space-y-4 text-gray-700">
                            <p>⚠️ Insufficient sleep is affecting your body's recovery and performance.</p>
                            <p>⚠️ Low activity levels detected, likely related to your job.</p>
                        </div>
                    </div>

                    <div className="w-full max-w-md mt-2">
                        <button onClick={() => router.push('/onboarding/additional-medical')} className="w-full rounded-full bg-blue-700 text-white py-3 font-medium shadow-sm hover:bg-blue-800 transition-colors">OK</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
