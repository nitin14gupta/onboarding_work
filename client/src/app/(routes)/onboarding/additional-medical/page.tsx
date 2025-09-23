"use client"

import React, { useState } from 'react'
import { LogoHeader } from '@/components/logo-header'
import Image from 'next/image'
import { getOnboardingImage } from '@/constants/images'
import { PreviousButton } from '@/components/previous-button'
import { NextButton } from '@/components/next-button'
import { MultiSelectTags } from '@/components/multi-select-tags'
import { useRouter } from 'next/navigation'

const conditions = [
    { id: 'asthma', label: 'Asthma' },
    { id: 'heart-condition', label: 'Heart condition' },
    { id: 'joint-pain', label: 'Joint pain' },
    { id: 'diabetes', label: 'Diabetes' },
    { id: 'bp', label: 'Blood Pressure' },
    { id: 'migraine', label: 'Migraine' },
    { id: 'spondylosis', label: 'spondylosis' },
    { id: 'none', label: 'None' },
]

const allergies = [
    { id: 'food', label: 'Food allergies' },
    { id: 'skin', label: 'Skin allergies' },
    { id: 'drug', label: 'Drug Allergies' },
    { id: 'environment', label: 'Environmental allergies' },
    { id: 'insect', label: 'Insect Allergies' },
    { id: 'none', label: 'None' },
]

export default function AdditionalMedicalPage({ step = 20 }: { step?: number }) {
    const router = useRouter();
    const [selectedConditions, setSelectedConditions] = useState<string[]>([])
    const [selectedAllergies, setSelectedAllergies] = useState<string[]>([])
    const currentImage = getOnboardingImage(step);

    const isFormValid = true

    const onPrevious = () => router.push('/onboarding/health-warning')
    const onNext = () => router.push('/onboarding/mood-mind-assessment')

    return (
        <div className="min-h-screen bg-white relative">
            <LogoHeader />

            <div className="container-responsive min-h-screen flex flex-col justify-center py-8">
                <div className="flex-1 flex flex-col items-center justify-center space-y-8">
                    <div className="w-full max-w-md mx-auto mb-6">
                        <Image src={currentImage.src} alt={currentImage.alt} width={488} height={451} className="w-full h-full object-contain mt-10" />
                    </div>

                    <h1 className="text-2xl font-semibold text-center text-gray-800 mb-2 px-4" style={{ fontSize: '28px', lineHeight: '1.2' }}>
                        Almost done! A bit more on your health info
                    </h1>

                    <div className="w-full max-w-md space-y-6">
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Any existing medical conditions</label>
                            <MultiSelectTags
                                title=""
                                subtitle=""
                                options={conditions}
                                selectedOptions={selectedConditions}
                                onSelectionChange={setSelectedConditions}
                                maxSelections={8}
                            />
                        </div>

                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Do you have any allergies?</label>
                            <MultiSelectTags
                                title=""
                                subtitle=""
                                options={allergies}
                                selectedOptions={selectedAllergies}
                                onSelectionChange={setSelectedAllergies}
                                maxSelections={6}
                            />
                        </div>
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
