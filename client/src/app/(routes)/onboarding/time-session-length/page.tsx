"use client"

import React, { useState } from 'react'
import { LogoHeader } from '@/components/logo-header'
import Image from 'next/image'
import { getOnboardingImage } from '@/constants/images'
import { PreviousButton } from '@/components/previous-button'
import { NextButton } from '@/components/next-button'
import { useRouter } from 'next/navigation'

export default function TimeSessionLengthPage({ step = 24 }: { step?: number }) {
    const router = useRouter();
    const currentImage = getOnboardingImage(step);
    const [duration, setDuration] = useState<'15 min' | '30 min' | '60 min'>('30 min')

    const onPrevious = () => router.push('/onboarding/session-type-selection')
    const onNext = () => router.push('/onboarding/social-learning-choices')

    return (
        <div className="min-h-screen bg-white relative">
            <LogoHeader />

            <div className="container-responsive min-h-screen flex flex-col justify-center py-8">
                <div className="flex-1 flex flex-col items-center justify-center space-y-8">
                    <div className="w-full max-w-md mx-auto mb-6">
                        <Image src={currentImage.src} alt={currentImage.alt} width={488} height={451} className="w-full h-full object-contain mt-10" />
                    </div>

                    <h1 className="text-2xl font-semibold text-center text-gray-800 mb-2 px-4" style={{ fontSize: '28px', lineHeight: '1.2' }}>
                        Your preferred time and session length
                    </h1>

                    {/* Day picker mock (non-functional checkboxes) */}
                    <div className="w-full max-w-md space-y-4">
                        <div className="flex items-center gap-6 text-sm text-gray-700 pl-2">
                            <label className="inline-flex items-center gap-2"><span className="inline-block h-4 w-4 rounded-full border border-gray-400"></span> Every day</label>
                            <label className="inline-flex items-center gap-2"><span className="inline-block h-4 w-4 rounded-full border border-gray-400"></span> Weekend</label>
                        </div>
                        <div className="grid grid-cols-7 gap-2 text-center text-xs">
                            {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((d, i) => (
                                <label key={d} className={`rounded-full px-3 py-2 border ${i < 2 || i >= 4 ? 'bg-blue-50 border-blue-500 text-blue-600' : 'bg-white border-gray-300 text-gray-600'}`}>
                                    <span className={`inline-block mr-2 h-3 w-3 rounded-sm ${i < 2 || i >= 4 ? 'bg-blue-600' : 'bg-transparent border border-gray-300'}`}></span>
                                    {d}
                                </label>
                            ))}
                        </div>

                        {/* Time choose mock */}
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Prefer Time</label>
                            <div className="relative">
                                <input readOnly value="11 : 30" className="w-full rounded-full border border-gray-300 px-4 py-3 text-gray-700" />
                                <span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500">AM ▾</span>
                            </div>
                        </div>

                        {/* Duration */}
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Prefer Duration</label>
                            {(['15 min', '30 min', '60 min'] as const).map((opt) => (
                                <button key={opt} onClick={() => setDuration(opt)} className={`w-full flex items-center justify-between rounded-full border px-4 py-3 text-left transition-colors ${duration === opt ? 'bg-blue-700 text-white border-blue-700' : 'bg-white text-gray-700 border-gray-300 hover:border-blue-400'}`}>
                                    <span>{opt}</span>
                                    <span className={`ml-3 inline-block h-5 w-5 rounded-full border-2 ${duration === opt ? 'border-white ring-4 ring-white/50 bg-transparent' : 'border-gray-400'}`}></span>
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
