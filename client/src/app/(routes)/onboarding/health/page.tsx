"use client"

import React, { useState } from 'react'
import { LogoHeader } from '@/components/logo-header'
import { PreviousButton } from '@/components/previous-button'
import { NextButton } from '@/components/next-button'
import Image from 'next/image'
import { getOnboardingImage } from '@/constants/images'
import { useRouter } from 'next/navigation'

interface HealthPageProps {
    step?: number;
}

export default function HealthPage({ step = 4 }: HealthPageProps) {
    const router = useRouter();

    const [bloodGroup, setBloodGroup] = useState<string>('O+ Positive')
    const [height, setHeight] = useState<string>('')
    const [weight, setWeight] = useState<string>('')
    const [rightEyeIssues, setRightEyeIssues] = useState<'Yes' | 'No'>('No')
    const [leftEyeIssues, setLeftEyeIssues] = useState<'Yes' | 'No'>('Yes')
    const [leftEyeVision, setLeftEyeVision] = useState<string>('')

    const currentImage = getOnboardingImage(step);

    const isFormValid = Boolean(bloodGroup && height && weight)

    const onNext = () => {
        router.push('/onboarding/learning')
    }

    const onPrevious = () => {
        router.push('/onboarding/skills')
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
                    <h1 className="text-2xl font-semibold text-center text-gray-800 mb-8 px-4" style={{ fontSize: '28px', lineHeight: '1.2' }}>
                        Please provide some basic health Info !
                    </h1>

                    {/* Form */}
                    <div className="w-full max-w-md space-y-5">
                        {/* Blood Group */}
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Select Blood Group</label>
                            <div className="relative">
                                <select
                                    className="w-full appearance-none rounded-full border border-gray-300 bg-white px-4 py-3 pr-10 text-gray-700 focus:border-blue-500 focus:outline-none"
                                    value={bloodGroup}
                                    onChange={(e) => setBloodGroup(e.target.value)}
                                >
                                    <option>O+ Positive</option>
                                    <option>A+ Positive</option>
                                    <option>B+ Positive</option>
                                    <option>AB+ Positive</option>
                                    <option>O- Negative</option>
                                    <option>A- Negative</option>
                                    <option>B- Negative</option>
                                    <option>AB- Negative</option>
                                </select>
                                <span className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">▾</span>
                            </div>
                        </div>

                        {/* Height */}
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Height in Centimeters</label>
                            <input
                                type="number"
                                placeholder="175"
                                value={height}
                                onChange={(e) => setHeight(e.target.value)}
                                className="w-full rounded-full border border-gray-300 px-4 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                            />
                        </div>

                        {/* Weight */}
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Weight in Kilograms</label>
                            <input
                                type="number"
                                placeholder="87"
                                value={weight}
                                onChange={(e) => setWeight(e.target.value)}
                                className="w-full rounded-full border border-gray-300 px-4 py-3 text-gray-700 placeholder-gray-400 focus:border-blue-500 focus:outline-none"
                            />
                        </div>

                        {/* Right Eye Issues */}
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Do you have any vision issues in your 'Right' eye?</label>
                            <div className="flex items-center gap-6 pl-2">
                                <label className="inline-flex items-center gap-2 text-gray-700">
                                    <input type="radio" className="h-4 w-4 text-blue-600" checked={rightEyeIssues === 'Yes'} onChange={() => setRightEyeIssues('Yes')} />
                                    <span>Yes</span>
                                </label>
                                <label className="inline-flex items-center gap-2 text-gray-700">
                                    <input type="radio" className="h-4 w-4 text-blue-600" checked={rightEyeIssues === 'No'} onChange={() => setRightEyeIssues('No')} />
                                    <span>No</span>
                                </label>
                            </div>
                        </div>

                        {/* Left Eye Issues */}
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Do you have any vision issues in your 'Left' eye?</label>
                            <div className="flex items-center gap-6 pl-2">
                                <label className="inline-flex items-center gap-2 text-gray-700">
                                    <input type="radio" className="h-4 w-4 text-blue-600" checked={leftEyeIssues === 'Yes'} onChange={() => setLeftEyeIssues('Yes')} />
                                    <span>Yes</span>
                                </label>
                                <label className="inline-flex items-center gap-2 text-gray-700">
                                    <input type="radio" className="h-4 w-4 text-blue-600" checked={leftEyeIssues === 'No'} onChange={() => setLeftEyeIssues('No')} />
                                    <span>No</span>
                                </label>
                            </div>
                        </div>

                        {/* Left Eye Vision */}
                        <div className="space-y-2">
                            <label className="block text-sm font-medium text-gray-700">Left eye vision Short / Long</label>
                            <input
                                type="text"
                                placeholder="-1.5 / +2.25"
                                value={leftEyeVision}
                                onChange={(e) => setLeftEyeVision(e.target.value)}
                                disabled={leftEyeIssues === 'No'}
                                className={`w-full rounded-full border px-4 py-3 placeholder-gray-400 focus:outline-none ${leftEyeIssues === 'No' ? 'bg-gray-100 border-gray-200 text-gray-400' : 'bg-white border-gray-300 text-gray-700 focus:border-blue-500'}`}
                            />
                        </div>
                    </div>
                </div>

                {/* Bottom Navigation */}
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
