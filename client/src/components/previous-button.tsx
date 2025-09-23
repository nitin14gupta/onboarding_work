import React from 'react';

interface PreviousButtonProps {
    onClick: () => void;
    disabled?: boolean;
    className?: string;
}

export const PreviousButton: React.FC<PreviousButtonProps> = ({
    onClick,
    disabled = false,
    className = ""
}) => {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className={`w-full bg-white hover:bg-gray-50 disabled:bg-gray-100 
text-blue-600 font-medium py-4 px-6 rounded-[50px] text-lg 
border-2 border-blue-600 hover:border-blue-700 disabled:border-gray-300 
disabled:text-gray-400 transition-colors duration-200 ${className}`}
        >
            Previous
        </button>
    );
};