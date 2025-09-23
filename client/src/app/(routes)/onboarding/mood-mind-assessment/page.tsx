"use client"

import React, { useState } from 'react'
import { LogoHeader } from '@/components/logo-header'
import Image from 'next/image'
import { getOnboardingImage } from '@/constants/images'
import { PreviousButton } from '@/components/previous-button'
import { NextButton } from '@/components/next-button'
import { useRouter } from 'next/navigation'

export default function MoodMindAssessmentPage({ step = 21 }: { step?: number }) {
    const router = useRouter();
    const [stress, setStress] = useState<number>(5)
    const [mindIssues, setMindIssues] = useState<'Yes' | 'No'>('No')
    const [meditated, setMeditated] = useState<'Yes' | 'No'>('No')
    const currentImage = getOnboardingImage(step);

    const onPrevious = () => router.push('/onboarding/additional-medical')
    const onNext = () => router.push('/onboarding/wellness-modes')

    return (
        <div className="min-h-screen bg-white relative">
            <LogoHeader />

            <div className="container-responsive min-h-screen flex flex-col justify-center py-8">
                <div className="flex-1 flex flex-col items-center justify-center space-y-8">
                    <div className="w-full max-w-md mx-auto mb-6">
                        <Image src={currentImage.src} alt={currentImage.alt} width={488} height={451} className="w-full h-full object-contain mt-10" />
                    </div>

                    <h1 className="text-2xl font-semibold text-center text-gray-800 mb-2 px-4" style={{ fontSize: '28px', lineHeight: '1.2' }}>
                        What’s your mood and mind saying today?
                    </h1>

                    <div className="w-full max-w-md space-y-6">
                        <div className="space-y-3">
                            <label className="block text-sm font-medium text-gray-700">How stressed do you feel daily?</label>
                            <input type="range" min={0} max={10} value={stress} onChange={(e) => setStress(Number(e.target.value))} className="w-full" />
                            <div className="flex justify-between text-xs text-gray-500">
                                {Array.from({ length: 11 }, (_, i) => (
                                    <span key={i}>{i}</span>
                                ))}
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Do you experience anxiety, mood swings, or depression?</label>
                            <div className="flex items-center gap-6">
                                <label className="inline-flex items-center gap-2 text-gray-700">
                                    <input type="radio" className="h-4 w-4 text-blue-600" checked={mindIssues === 'Yes'} onChange={() => setMindIssues('Yes')} />
                                    <span>Yes</span>
                                </label>
                                <label className="inline-flex items-center gap-2 text-gray-700">
                                    <input type="radio" className="h-4 w-4 text-blue-600" checked={mindIssues === 'No'} onChange={() => setMindIssues('No')} />
                                    <span>No</span>
                                </label>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Have you ever practiced meditation or breathing exercises?</label>
                            <div className="flex items-center gap-6">
                                <label className="inline-flex items-center gap-2 text-gray-700">
                                    <input type="radio" className="h-4 w-4 text-blue-600" checked={meditated === 'Yes'} onChange={() => setMeditated('Yes')} />
                                    <span>Yes</span>
                                </label>
                                <label className="inline-flex items-center gap-2 text-gray-700">
                                    <input type="radio" className="h-4 w-4 text-blue-600" checked={meditated === 'No'} onChange={() => setMeditated('No')} />
                                    <span>No</span>
                                </label>
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
