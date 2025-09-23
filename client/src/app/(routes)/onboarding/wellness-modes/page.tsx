"use client"

import React, { useState } from 'react'
import { LogoHeader } from '@/components/logo-header'
import Image from 'next/image'
import { getOnboardingImage } from '@/constants/images'
import { PreviousButton } from '@/components/previous-button'
import { NextButton } from '@/components/next-button'
import { MultiSelectTags } from '@/components/multi-select-tags'
import { useRouter } from 'next/navigation'

const modes = [
    { id: 'meditation', label: 'Meditation' },
    { id: 'pranayama', label: 'Pranayama' },
    { id: 'yoga', label: 'Yoga' },
    { id: 'zomba', label: 'Zomba' },
    { id: 'fitness', label: 'Fitness/Workouts' },
    { id: 'migraine', label: 'Migraine' },
    { id: 'ayurveda', label: 'Ayurveda or Alternative therapies' },
]

export default function WellnessModesPage({ step = 22 }: { step?: number }) {
    const router = useRouter();
    const [selected, setSelected] = useState<string[]>([])
    const currentImage = getOnboardingImage(step);

    const isFormValid = selected.length > 0
    const onPrevious = () => router.push('/onboarding/mood-mind-assessment')
    const onNext = () => router.push('/onboarding/session-type-selection')

    return (
        <div className="min-h-screen bg-white relative">
            <LogoHeader />

            <div className="container-responsive min-h-screen flex flex-col justify-center py-8">
                <div className="flex-1 flex flex-col items-center justify-center space-y-8">
                    <div className="w-full max-w-md mx-auto mb-6">
                        <Image src={currentImage.src} alt={currentImage.alt} width={488} height={451} className="w-full h-full object-contain mt-10" />
                    </div>

                    <h1 className="text-2xl font-semibold text-center text-gray-800 mb-2 px-4" style={{ fontSize: '28px', lineHeight: '1.2' }}>
                        Which wellness modes do you prefer?
                    </h1>

                    <div className="w-full max-w-md">
                        <MultiSelectTags
                            title="Select  Wellness Modes"
                            subtitle=""
                            options={modes}
                            selectedOptions={selected}
                            onSelectionChange={setSelected}
                            maxSelections={3}
                        />
                    </div>
                </div>

                <div className="mt-8 pt-6 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <PreviousButton onClick={onPrevious} />
                        <NextButton onClick={onNext} disabled={!isFormValid} />
                    </div>
                </div>
            </div>
        </div>
    )
}
