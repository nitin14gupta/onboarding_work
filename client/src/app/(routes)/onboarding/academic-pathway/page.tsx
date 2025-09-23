"use client"

import React from 'react'
import { LogoHeader } from '@/components/logo-header'
import Image from 'next/image'
import { getOnboardingImage } from '@/constants/images'
import { useRouter } from 'next/navigation'

export default function AcademicPathwayPage({ step = 6 }: { step?: number }) {
    const router = useRouter();
    const currentImage = getOnboardingImage(step);

    const proceed = () => router.push('/onboarding/academic-curriculum')

    return (
        <div className="min-h-screen bg-white relative">
            <LogoHeader />

            <div className="container-responsive min-h-screen flex flex-col justify-center py-8">
                <div className="flex-1 flex flex-col items-center justify-center space-y-8">
                    {/* Illustration */}
                    <div className="w-full max-w-md mx-auto mb-6">
                        <Image
                            src={currentImage.src}
                            alt={currentImage.alt}
                            width={488}
                            height={451}
                            className="w-full h-full object-contain mt-10"
                        />
                    </div>

                    {/* Title & subtext */}
                    <div className="text-center px-6">
                        <h1 className="text-2xl font-semibold text-gray-800 mb-3" style={{ fontSize: '28px', lineHeight: '1.2' }}>
                            Let's proceed by selecting the 'Academic curriculum'
                        </h1>
                        <p className="text-sm text-gray-500">following which you can select the 'Wellness' pathway as well.</p>
                    </div>

                    {/* Proceed Button */}
                    <div className="w-full max-w-md mt-2">
                        <button onClick={proceed} className="w-full rounded-full bg-blue-700 text-white py-3 font-medium shadow-sm hover:bg-blue-800 transition-colors">
                            Proceed
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}
