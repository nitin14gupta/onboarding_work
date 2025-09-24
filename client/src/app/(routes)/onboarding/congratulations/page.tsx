"use client"

import React from 'react'
import { LogoHeader } from '@/components/logo-header'
import Image from 'next/image'
import { getOnboardingImage } from '@/constants/images'

export default function CongratulationsPage({ step = 27 }: { step?: number }) {
    const currentImage = getOnboardingImage(step);

    return (
        <div className="min-h-screen bg-white relative">
            <LogoHeader />



            <div className="container-responsive min-h-screen flex flex-col justify-center py-8">
                <div className="flex-1 flex flex-col items-center justify-center space-y-6">
                    <div className="text-center px-6">
                        <div className="text-xl font-semibold mb-1">⭐ Congratulations! ⭐</div>
                        <div className="text-xs text-gray-500 mb-4">You've successfully completed the assessment.</div>
                    </div>
                    <div className="w-full max-w-md mx-auto mb-6">
                        <Image src={currentImage.src} alt={currentImage.alt} width={488} height={451} className="w-full h-full object-contain" />
                    </div>
                    <div className="text-center px-6">
                        <h2 className="text-lg font-semibold mb-2">Make an impact</h2>
                        <p className="text-sm text-gray-600 mb-4">"You can change a child’s future with the gift of education."</p>
                        <button className="rounded-full bg-[#F8B400] text-black px-5 py-2 font-medium shadow-sm hover:brightness-95">Donate Now</button>
                    </div>

                    <div className="w-full max-w-md mt-4">
                        <button className="w-full rounded-full bg-blue-700 text-white py-3 font-medium shadow-sm">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    )
}
