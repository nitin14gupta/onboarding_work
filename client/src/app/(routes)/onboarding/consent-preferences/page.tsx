"use client"

import React from 'react'
import { LogoHeader } from '@/components/logo-header'
import Image from 'next/image'
import { getOnboardingImage } from '@/constants/images'
import { PreviousButton } from '@/components/previous-button'
import { useRouter } from 'next/navigation'

export default function ConsentPreferencesPage({ step = 26 }: { step?: number }) {
    const router = useRouter();
    const currentImage = getOnboardingImage(step);

    const onPrevious = () => router.push('/onboarding/social-learning-choices')
    const onSubmit = () => router.push('/onboarding/congratulations')

    return (
        <div className="min-h-screen bg-white relative">
            <LogoHeader />

            <div className="container-responsive min-h-screen flex flex-col justify-center py-8">
                <div className="flex-1 flex flex-col items-center justify-center space-y-8">
                    <div className="w-full max-w-md mx-auto mb-6">
                        <Image src={currentImage.src} alt={currentImage.alt} width={488} height={451} className="w-full h-full object-contain mt-10" />
                    </div>

                    <h1 className="text-2xl font-semibold text-center text-gray-800 mb-2 px-4" style={{ fontSize: '28px', lineHeight: '1.2' }}>
                        Consent & Preferences
                    </h1>

                    <div className="w-full max-w-md space-y-3 text-sm text-gray-700">
                        <label className="flex items-start gap-3"><input type="checkbox" className="mt-1 h-4 w-4" /> Consent to receive notifications/emails</label>
                        <label className="flex items-start gap-3"><input type="checkbox" className="mt-1 h-4 w-4" /> Data sharing consent <span className="text-xs text-gray-500">(for AI recommendation or wellness reports to mentors)</span></label>
                        <label className="flex items-start gap-3"><input type="checkbox" className="mt-1 h-4 w-4" /> I read and agree to <a className="text-blue-600 underline" href="#">privacy policy</a></label>
                        <label className="flex items-start gap-3"><input type="checkbox" className="mt-1 h-4 w-4" /> I read and agree to <a className="text-blue-600 underline" href="#">terms and conditions</a></label>
                    </div>
                </div>

                <div className="mt-8 pt-6 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <PreviousButton onClick={onPrevious} />
                        <button onClick={onSubmit} className="rounded-full bg-blue-700 text-white py-3 font-medium shadow-sm hover:bg-blue-800 transition-colors">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
