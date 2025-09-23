'use client';
import React, { useState } from 'react';
import { LogoHeader } from '@/components/logo-header';
import { NextButton } from '@/components/next-button';
import { getOnboardingImage } from '@/constants/images';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

interface AboutPageProps {
    step?: number;
    onNext?: () => void;
}

export default function AboutPage({ step = 1 }: AboutPageProps) {
    const router = useRouter();
    const [location, setLocation] = useState('Bhimavaram, West Godavari');
    const [language, setLanguage] = useState('English');
    const [dragActive, setDragActive] = useState(false);
    const [uploadedFile, setUploadedFile] = useState<File | null>(null);

    const currentImage = getOnboardingImage(step);

    const onNext = () => {
        router.push('/onboarding/hobbies');
    }

    const handleDrag = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === 'dragenter' || e.type === 'dragover') {
            setDragActive(true);
        } else if (e.type === 'dragleave') {
            setDragActive(false);
        }
    };

    const handleDrop = (e: React.DragEvent) => {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);

        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            setUploadedFile(e.dataTransfer.files[0]);
        }
    };

    const handleFileSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            setUploadedFile(e.target.files[0]);
        }
    };

    return (
        <div className="min-h-screen bg-white relative">
            <LogoHeader />

            <div className="container-responsive min-h-screen flex flex-col justify-center py-8">
                {/* Main Content */}
                <div className="flex-1 flex flex-col items-center justify-center space-y-8">

                    {/* Onboarding Illustration */}
                    <div>
                        <Image
                            src={currentImage.src}
                            alt={currentImage.alt}
                            width={488}
                            height={451}
                            className="w-full h-full object-contain mt-10"
                        />
                    </div>

                    {/* Title */}
                    <h1 className="text-2xl font-semibold text-center text-gray-800 px-4"
                        style={{ fontSize: '26px', lineHeight: '1.2' }}>
                        Let us know about you !
                    </h1>

                    {/* Form Fields */}
                    <div className="w-full max-w-md space-y-6">

                        {/* Location Input */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">
                                Enter Location
                            </label>
                            <div className="relative flex items-center">
                                <input
                                    type="text"
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                    placeholder="Bhimavaram, West Godavari"
                                    className="w-full pl-4 pr-28 py-3 border border-gray-300 rounded-full 
        focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent 
        text-gray-700"
                                />

                                {/* Map Preview */}
                                <div className="absolute right-1 top-1 bottom-1 rounded-full overflow-hidden flex items-center border-2 border-gray-100">
                                    <img
                                        src="/images/map.png"
                                        alt="map"
                                        className="h-full w-24 object-cover rounded-full"
                                    />
                                </div>
                            </div>
                        </div>


                        {/* Language Dropdown */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">
                                Select language
                            </label>
                            <div className="relative">
                                <select
                                    value={language}
                                    onChange={(e) => setLanguage(e.target.value)}
                                    className="w-full px-4 py-3 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 
                           focus:border-transparent text-gray-700 appearance-none 
                           bg-white cursor-pointer"
                                >
                                    <option value="English">English</option>
                                    <option value="Hindi">Hindi</option>
                                    <option value="Telugu">Telugu</option>
                                    <option value="Tamil">Tamil</option>
                                    <option value="Spanish">Spanish</option>
                                    <option value="French">French</option>
                                </select>
                                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                    <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Photo Upload */}
                        <div className="space-y-2">
                            <label className="text-sm font-medium text-gray-700">
                                Upload your Photo
                            </label>

                            <div
                                className={`relative border-2 border-dashed rounded-xl p-8 text-center transition-colors
      ${dragActive
                                        ? 'border-blue-400 bg-blue-50'
                                        : uploadedFile
                                            ? 'border-green-400 bg-green-50'
                                            : 'border-gray-300 hover:border-gray-400'}
    `}
                                onDragEnter={handleDrag}
                                onDragLeave={handleDrag}
                                onDragOver={handleDrag}
                                onDrop={handleDrop}
                            >
                                <input
                                    type="file"
                                    accept="image/*"
                                    onChange={handleFileSelect}
                                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                                />

                                {uploadedFile ? (
                                    <div className="space-y-2">
                                        <div className="w-12 h-12 mx-auto bg-green-100 rounded-full flex items-center justify-center">
                                            <svg
                                                className="w-6 h-6 text-green-600"
                                                fill="none"
                                                stroke="currentColor"
                                                viewBox="0 0 24 24"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                        </div>
                                        <p className="text-sm font-medium text-green-600">
                                            {uploadedFile.name}
                                        </p>
                                        <p className="text-xs text-gray-500">Click to change</p>
                                    </div>
                                ) : (
                                    <div className="flex flex-col items-center space-y-3">
                                        {/* Cloud Icon */}
                                        <svg
                                            className="w-12 h-12 text-blue-500"
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth={2}
                                                d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6h.1a5 5 0 011 9.9M15 13l-3-3-3 3m3-3v12"
                                            />
                                        </svg>

                                        <p className="text-sm text-gray-600 font-medium">
                                            Drag and drop files here
                                        </p>

                                        <p className="text-sm text-gray-500">or</p>

                                        <button
                                            type="button"
                                            className="inline-flex items-center px-6 py-2 border border-blue-500 text-blue-600 
          rounded-full text-sm font-medium hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-400"
                                        >
                                            Upload
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>

                    </div>
                </div>

                {/* Bottom Navigation */}
                <div className="mt-8 pt-6">
                    <NextButton
                        onClick={onNext}
                        disabled={!location || !language}
                    />
                </div>
            </div>
        </div>
    );
};