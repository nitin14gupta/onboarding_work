"use client"

import React, { useState } from 'react'
import { LogoHeader } from '@/components/logo-header'
import Image from 'next/image'
import { getOnboardingImage } from '@/constants/images'
import { PreviousButton } from '@/components/previous-button'
import { NextButton } from '@/components/next-button'
import { useRouter } from 'next/navigation'

export default function SocialLearningChoicesPage({ step = 25 }: { step?: number }) {
    const router = useRouter();
    const currentImage = getOnboardingImage(step);
    const [challenges, setChallenges] = useState<'Yes' | 'No'>('Yes')
    const [interact, setInteract] = useState<'Yes' | 'No'>('No')
    const [mentor, setMentor] = useState<'Yes' | 'No'>('No')

    const onPrevious = () => router.push('/onboarding/time-session-length')
    const onNext = () => router.push('/onboarding/consent-preferences')

    return (
        <div className="min-h-screen bg-white relative">
            <LogoHeader />

            <div className="container-responsive min-h-screen flex flex-col justify-center py-8">
                <div className="flex-1 flex flex-col items-center justify-center space-y-8">
                    <div className="w-full max-w-md mx-auto mb-6">
                        <Image src={currentImage.src} alt={currentImage.alt} width={488} height={451} className="w-full h-full object-contain mt-10" />
                    </div>

                    <h1 className="text-2xl font-semibold text-center text-gray-800 mb-2 px-4" style={{ fontSize: '28px', lineHeight: '1.2' }}>
                        Tell us your social learning choices.
                    </h1>

                    <div className="w-full max-w-md space-y-6">
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Would you like to join wellness challenges?</label>
                            <div className="flex items-center gap-6">
                                <label className="inline-flex items-center gap-2 text-gray-700"><input type="radio" checked={challenges === 'Yes'} onChange={() => setChallenges('Yes')} className="h-4 w-4 text-blue-600" /> Yes</label>
                                <label className="inline-flex items-center gap-2 text-gray-700"><input type="radio" checked={challenges === 'No'} onChange={() => setChallenges('No')} className="h-4 w-4 text-blue-600" /> No</label>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Do you want to interact with other learners?</label>
                            <div className="flex items-center gap-6">
                                <label className="inline-flex items-center gap-2 text-gray-700"><input type="radio" checked={interact === 'Yes'} onChange={() => setInteract('Yes')} className="h-4 w-4 text-blue-600" /> Yes</label>
                                <label className="inline-flex items-center gap-2 text-gray-700"><input type="radio" checked={interact === 'No'} onChange={() => setInteract('No')} className="h-4 w-4 text-blue-600" /> No</label>
                            </div>
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Are you open to mentor suggestions?</label>
                            <div className="flex items-center gap-6">
                                <label className="inline-flex items-center gap-2 text-gray-700"><input type="radio" checked={mentor === 'Yes'} onChange={() => setMentor('Yes')} className="h-4 w-4 text-blue-600" /> Yes</label>
                                <label className="inline-flex items-center gap-2 text-gray-700"><input type="radio" checked={mentor === 'No'} onChange={() => setMentor('No')} className="h-4 w-4 text-blue-600" /> No</label>
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
