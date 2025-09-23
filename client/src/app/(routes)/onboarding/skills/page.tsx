'use client'

import React, { useState } from 'react';
import { LogoHeader } from '@/components/logo-header';
import { NextButton } from '@/components/next-button';
import { PreviousButton } from '@/components/previous-button';
import { MultiSelectTags } from '@/components/multi-select-tags';
import { getOnboardingImage } from '@/constants/images';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface SkillsPageProps {
    step?: number;
    onNext?: () => void;
    onPrevious?: () => void;
}

const skillsOptions = [
    { id: 'time-management', label: 'Time management' },
    { id: 'basic-computer-skills', label: 'Basic computer skills' },
    { id: 'cooking', label: 'Cooking' },
    { id: 'team-work', label: 'Team Work' },
    { id: 'public-speaking', label: 'Public speaking' },
    { id: 'conflict-resolution', label: 'Conflict resolution' },
    { id: 'creativity', label: 'Creativity' }
];

const interestsOptions = [
    { id: 'content-creation', label: 'Content creation' },
    { id: 'video-games', label: 'Video games' },
    { id: 'animals-pets', label: 'Animals / Pets' },
    { id: 'history-and-archaeology', label: 'History and archaeology' },
    { id: 'technology-and-gadgets', label: 'Technology and gadgets' },
    { id: 'environmental-issues', label: 'Environmental Issues' }
];

export default function SkillsPage({ step = 3 }: SkillsPageProps) {
    const router = useRouter();
    const [selectedSkills, setSelectedSkills] = useState<string[]>([]);
    const [selectedInterests, setSelectedInterests] = useState<string[]>([]);

    const currentImage = getOnboardingImage(step);
    const isFormValid = selectedSkills.length > 0 && selectedInterests.length > 0;

    const onNext = () => {
        router.push('/onboarding/skills');
    }

    const onPrevious = () => {
        router.push('/onboarding/hobbies');
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
                        Share your skills and interests with us !
                    </h1>

                    {/* Form Fields */}
                    <div className="w-full max-w-md space-y-8">

                        {/* Skills Selection */}
                        <MultiSelectTags
                            title="Select any 4 Skills"
                            subtitle=""
                            options={skillsOptions}
                            selectedOptions={selectedSkills}
                            onSelectionChange={setSelectedSkills}
                            maxSelections={4}
                        />

                        {/* Interests Selection */}
                        <MultiSelectTags
                            title="Select any 4 Interests"
                            subtitle=""
                            options={interestsOptions}
                            selectedOptions={selectedInterests}
                            onSelectionChange={setSelectedInterests}
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