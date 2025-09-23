"use client"

import React, { useState } from 'react'
import { LogoHeader } from '@/components/logo-header'
import { PreviousButton } from '@/components/previous-button'
import { NextButton } from '@/components/next-button'
import { MultiSelectTags } from '@/components/multi-select-tags'
import Image from 'next/image'
import { getOnboardingImage } from '@/constants/images'
import { useRouter } from 'next/navigation'

const learningOptions = [
    { id: 'wellness', label: 'Wellness' },
    { id: 'academic', label: 'Academic' },
    { id: 'entrance-exam', label: 'Entrance Exam' },
    { id: 'deep-tech', label: 'Deep Tech' },
    { id: 'foreign-language', label: 'Foreign Language' },
    { id: 'indian-language', label: 'Indian Language' },
    { id: 'vocational-skills', label: 'Vocational Skills' },
    { id: 'games', label: 'Games' },
    { id: 'management', label: 'Management' },
    { id: 'climate', label: 'Climate' },
    { id: 'professional-development', label: 'Professional Development' },
    { id: 'space', label: 'Space' },
]

export default function LearningPage({ step = 5 }: { step?: number }) {
    const router = useRouter();
    const [selected, setSelected] = useState<string[]>([])

    const currentImage = getOnboardingImage(step);
    const isFormValid = selected.length > 0

    const onNext = () => {
        router.push('/onboarding/academic-pathway')
    }

    const onPrevious = () => {
        router.push('/onboarding/health')
    }

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

                    {/* Title */}
                    <h1 className="text-2xl font-semibold text-center text-gray-800 mb-4 px-4" style={{ fontSize: '28px', lineHeight: '1.2' }}>
                        What do you want to learn?
                    </h1>

                    <div className="w-full max-w-md">
                        <MultiSelectTags
                            title=""
                            subtitle=""
                            options={learningOptions}
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
