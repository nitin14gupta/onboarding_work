"use client"

import React, { useState } from 'react'
import { LogoHeader } from '@/components/logo-header'
import Image from 'next/image'
import { getOnboardingImage } from '@/constants/images'
import { PreviousButton } from '@/components/previous-button'
import { NextButton } from '@/components/next-button'
import { useRouter } from 'next/navigation'

const options = ['Less than 4 hrs', '4–6 hrs', '6–8 hrs', 'More than 8 hrs'] as const
type Resting = typeof options[number]

export default function RestingHoursPage({ step = 16 }: { step?: number }) {
    const router = useRouter();
    const [selected, setSelected] = useState<Resting>('4–6 hrs')
    const currentImage = getOnboardingImage(step);

    const onPrevious = () => router.push('/onboarding/alcohol-status')
    const onNext = () => router.push('/onboarding/sleep-experience')

    return (
        <div className="min-h-screen bg-white relative">
            <LogoHeader />

            <div className="container-responsive min-h-screen flex flex-col justify-center py-8">
                <div className="flex-1 flex flex-col items-center justify-center space-y-8">
                    <div className="w-full max-w-md mx-auto mb-6">
                        <Image src={currentImage.src} alt={currentImage.alt} width={488} height={451} className="w-full h-full object-contain mt-10" />
                    </div>

                    <h1 className="text-2xl font-semibold text-center text-gray-800 mb-2 px-4" style={{ fontSize: '28px', lineHeight: '1.2' }}>
                        Resting Hours
                    </h1>

                    <div className="w-full max-w-md space-y-3">
                        <label className="block text-sm font-medium text-gray-700">Sleep Duration</label>
                        <div className="space-y-3">
                            {options.map((opt) => (
                                <button
                                    key={opt}
                                    onClick={() => setSelected(opt)}
                                    className={`w-full flex items-center justify-between rounded-full border px-4 py-3 text-left transition-colors ${selected === opt ? 'bg-blue-700 text-white border-blue-700' : 'bg-white text-gray-700 border-gray-300 hover:border-blue-400'}`}
                                >
                                    <span>{opt}</span>
                                    <span className={`ml-3 inline-block h-5 w-5 rounded-full border-2 ${selected === opt ? 'border-white ring-4 ring-white/50 bg-transparent' : 'border-gray-400'}`}></span>
                                </button>
                            ))}
                        </div>
                    </div>
                </div>

                <div className="mt-8 pt-6 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <PreviousButton onClick={onPrevious} />
                        <NextButton onClick={onNext} />
                    </div>
                </div>
            </div>
        </div>
    )
}

