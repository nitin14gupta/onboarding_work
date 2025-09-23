"use client"

import React, { useState } from 'react'
import { LogoHeader } from '@/components/logo-header'
import Image from 'next/image'
import { getOnboardingImage } from '@/constants/images'
import { PreviousButton } from '@/components/previous-button'
import { NextButton } from '@/components/next-button'
import { useRouter } from 'next/navigation'

const smokingHabitOptions = [
    'Occasional Smoker',
    'Light Smoker (1–3/day)',
    'Moderate Smoker (4–10/day)',
    'Heavy Smoker (15–20+/day)',
    'Former Smoker',
    'Trying to Quit',
] as const

type Habit = typeof smokingHabitOptions[number]

export default function SmokingStatusPage({ step = 14 }: { step?: number }) {
    const router = useRouter();
    const [doSmoke, setDoSmoke] = useState<'Yes' | 'No'>('Yes')
    const [habit, setHabit] = useState<Habit>('Occasional Smoker')
    const currentImage = getOnboardingImage(step);

    const onPrevious = () => router.push('/onboarding/diet')
    const onNext = () => router.push('/onboarding/alcohol-status')

    return (
        <div className="min-h-screen bg-white relative">
            <LogoHeader />

            <div className="container-responsive min-h-screen flex flex-col justify-center py-8">
                <div className="flex-1 flex flex-col items-center justify-center space-y-8">
                    <div className="w-full max-w-md mx-auto mb-6">
                        <Image src={currentImage.src} alt={currentImage.alt} width={488} height={451} className="w-full h-full object-contain mt-10" />
                    </div>

                    <h1 className="text-2xl font-semibold text-center text-gray-800 mb-2 px-4" style={{ fontSize: '28px', lineHeight: '1.2' }}>
                        Smoking Status
                    </h1>

                    <div className="w-full max-w-md space-y-6">
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Do You Smoke ?</label>
                            <div className="flex items-center gap-6">
                                <label className="inline-flex items-center gap-2 text-gray-700">
                                    <input type="radio" className="h-4 w-4 text-blue-600" checked={doSmoke === 'Yes'} onChange={() => setDoSmoke('Yes')} />
                                    <span>Yes</span>
                                </label>
                                <label className="inline-flex items-center gap-2 text-gray-700">
                                    <input type="radio" className="h-4 w-4 text-blue-600" checked={doSmoke === 'No'} onChange={() => setDoSmoke('No')} />
                                    <span>No</span>
                                </label>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Smoking Habits</label>
                            <div className="space-y-3">
                                {smokingHabitOptions.map((opt) => (
                                    <button
                                        key={opt}
                                        onClick={() => setHabit(opt)}
                                        disabled={doSmoke === 'No'}
                                        className={`w-full flex items-center justify-between rounded-full border px-4 py-3 text-left transition-colors ${habit === opt && doSmoke === 'Yes' ? 'bg-blue-700 text-white border-blue-700' : doSmoke === 'No' ? 'bg-gray-100 text-gray-400 border-gray-200 cursor-not-allowed' : 'bg-white text-gray-700 border-gray-300 hover:border-blue-400'}`}
                                    >
                                        <span>{opt}</span>
                                        <span className={`ml-3 inline-block h-5 w-5 rounded-full border-2 ${habit === opt && doSmoke === 'Yes' ? 'border-white ring-4 ring-white/50 bg-transparent' : 'border-gray-400'}`}></span>
                                    </button>
                                ))}
                            </div>
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
