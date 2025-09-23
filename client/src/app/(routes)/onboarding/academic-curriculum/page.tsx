"use client"

import React, { useState } from 'react'
import { LogoHeader } from '@/components/logo-header'
import { PreviousButton } from '@/components/previous-button'
import Image from 'next/image'
import { getOnboardingImage } from '@/constants/images'
import { useRouter } from 'next/navigation'
import { MultiSelectTags } from '@/components/multi-select-tags'

const subjects = [
    { id: 'english', label: 'English' },
    { id: 'social', label: 'Social' },
    { id: 'chemistry', label: 'Chemistry' },
    { id: 'mathematics', label: 'Mathematics' },
    { id: 'hindi', label: 'Hindi' },
    { id: 'physics', label: 'Physics' },
]

export default function AcademicCurriculumPage({ step = 7 }: { step?: number }) {
    const router = useRouter();
    const [grade, setGrade] = useState<string>('7th Class')
    const [curriculum, setCurriculum] = useState<string>('CBSC')
    const [selectedSubjects, setSelectedSubjects] = useState<string[]>([])

    const currentImage = getOnboardingImage(step);

    const isFormValid = selectedSubjects.length === 5

    const onPrevious = () => router.push('/onboarding/academic-pathway')
    const onSubmit = () => router.push('/onboarding/wellness-pathway')

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
                    <h1 className="text-2xl font-semibold text-center text-gray-800 mb-2 px-4" style={{ fontSize: '28px', lineHeight: '1.2' }}>
                        Let's select the 'Academic curriculum'
                    </h1>

                    <div className="w-full max-w-md space-y-5">
                        {/* Grade */}
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Grade</label>
                            <div className="relative">
                                <select value={grade} onChange={(e) => setGrade(e.target.value)} className="w-full appearance-none rounded-full border border-gray-300 bg-white px-4 py-3 pr-10 text-gray-700 focus:border-blue-500 focus:outline-none">
                                    <option>7th Class</option>
                                    <option>8th Class</option>
                                    <option>9th Class</option>
                                    <option>10th Class</option>
                                </select>
                                <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">▾</span>
                            </div>
                        </div>

                        {/* Curriculum */}
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Curriculum</label>
                            <div className="relative">
                                <select value={curriculum} onChange={(e) => setCurriculum(e.target.value)} className="w-full appearance-none rounded-full border border-gray-300 bg-white px-4 py-3 pr-10 text-gray-700 focus:border-blue-500 focus:outline-none">
                                    <option>CBSC</option>
                                    <option>State Board</option>
                                    <option>ICSE</option>
                                </select>
                                <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">▾</span>
                            </div>
                        </div>

                        {/* Subjects order */}
                        <div className="space-y-3">
                            <label className="block text-sm font-medium text-gray-700">Select all five subjects in the order of your choice</label>
                            <MultiSelectTags
                                title=""
                                subtitle=""
                                options={subjects}
                                selectedOptions={selectedSubjects}
                                onSelectionChange={setSelectedSubjects}
                                maxSelections={5}
                            />
                        </div>
                    </div>
                </div>

                {/* Bottom Buttons */}
                <div className="mt-8 pt-6 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <PreviousButton onClick={onPrevious} />
                        <button onClick={onSubmit} disabled={!isFormValid} className={`rounded-full py-3 font-medium shadow-sm transition-colors ${isFormValid ? 'bg-blue-700 text-white hover:bg-blue-800' : 'bg-gray-200 text-gray-400 cursor-not-allowed'}`}>Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
