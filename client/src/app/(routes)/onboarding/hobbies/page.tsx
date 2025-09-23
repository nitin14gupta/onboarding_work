'use client';

import React, { useState } from 'react';
import { LogoHeader } from '@/components/logo-header';
import { NextButton } from '@/components/next-button';
import { PreviousButton } from '@/components/previous-button';
import { MultiSelectTags } from '@/components/multi-select-tags';
import { getOnboardingImage } from '@/constants/images';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface HobbiesPageProps {
    step?: number;
    onNext?: () => void;
    onPrevious?: () => void;
}

const hobbiesOptions = [
    { id: 'drawing', label: 'Drawing' },
    { id: 'playing-sports', label: 'Playing sports' },
    { id: 'creative-writing', label: 'creative writing / Journaling' },
    { id: 'playing-music', label: 'Playing Music' },
    { id: 'reading-books', label: 'Reading books' },
    { id: 'programming', label: 'programming' },
    { id: 'dancing', label: 'Dancing' },
    { id: 'painting', label: 'Painting' }
];

const passionsOptions = [
    { id: 'helping-animals', label: 'Helping animals' },
    { id: 'creating-art', label: 'Creating art / Digital art work' },
    { id: 'teaching', label: 'Teaching' },
    { id: 'problem-solving', label: 'Problem Solving' },
    { id: 'performing-arts', label: 'Performing Arts' },
    { id: 'designing-games', label: 'Designing games' },
    { id: 'donating', label: 'Donating' }
];

export default function HobbiesPage({ step = 2 }: HobbiesPageProps) {
    const router = useRouter();
    const [selectedHobbies, setSelectedHobbies] = useState<string[]>([]);
    const [selectedPassions, setSelectedPassions] = useState<string[]>([]);

    const currentImage = getOnboardingImage(step);
    const isFormValid = selectedHobbies.length > 0 && selectedPassions.length > 0;

    const onNext = () => {
        router.push('/onboarding/skills');
    }

    const onPrevious = () => {
        router.push('/onboarding/about');
    }

    return (
        <div className="min-h-screen bg-white relative">
            <LogoHeader />

            <div className="container-responsive min-h-screen flex flex-col justify-center py-8">
                {/* Main Content */}
                <div className="flex-1 flex flex-col items-center justify-center space-y-8">

                    {/* Onboarding Illustration */}
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
                    <h1 className="text-2xl font-semibold text-center text-gray-800 mb-8 px-4"
                        style={{ fontSize: '28px', lineHeight: '1.2' }}>
                        Tell us your hobbies and passions !
                    </h1>

                    {/* Form Fields */}
                    <div className="w-full max-w-md space-y-8">

                        {/* Hobbies Selection */}
                        <MultiSelectTags
                            title="Select any 4 Hobbies"
                            subtitle=""
                            options={hobbiesOptions}
                            selectedOptions={selectedHobbies}
                            onSelectionChange={setSelectedHobbies}
                            maxSelections={4}
                        />

                        {/* Passions Selection */}
                        <MultiSelectTags
                            title="Select any 4 Passions"
                            subtitle=""
                            options={passionsOptions}
                            selectedOptions={selectedPassions}
                            onSelectionChange={setSelectedPassions}
                            maxSelections={4}
                        />
                    </div>
                </div>

                {/* Bottom Navigation */}
                <div className="mt-8 pt-6 space-y-4">
                    <div className="grid grid-cols-2 gap-4">
                        <PreviousButton onClick={onPrevious} />
                        <NextButton
                            onClick={onNext}
                            disabled={!isFormValid}
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};