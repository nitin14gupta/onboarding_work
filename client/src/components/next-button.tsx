import React from 'react';

interface NextButtonProps {
    onClick: () => void;
    disabled?: boolean;
    className?: string;
}

export const NextButton: React.FC<NextButtonProps> = ({
    onClick,
    disabled = false,
    className = ""
}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`w-full bg-blue-600 hover:bg-blue-700 disabled:bg-gray-300 
        text-white font-medium py-4 px-6 rounded-xl transition-colors 
        duration-200 text-lg ${className}`}
        >
            Next
        </button>
    );
};