import React from 'react';

interface TagOption {
    id: string;
    label: string;
}

interface MultiSelectTagsProps {
    title: string;
    subtitle: string;
    options: TagOption[];
    selectedOptions: string[];
    onSelectionChange: (selected: string[]) => void;
    maxSelections?: number;
}

export const MultiSelectTags: React.FC<MultiSelectTagsProps> = ({
    title,
    subtitle,
    options,
    selectedOptions,
    onSelectionChange,
    maxSelections = 4
}) => {
    const handleTagToggle = (optionId: string) => {
        if (selectedOptions.includes(optionId)) {
            // Remove if already selected
            onSelectionChange(selectedOptions.filter(id => id !== optionId));
        } else if (selectedOptions.length < maxSelections) {
            // Add if under limit
            onSelectionChange([...selectedOptions, optionId]);
        }
    };

    return (
        <div className="space-y-4">
            <div className="space-y-1">
                <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
                <p className="text-sm text-gray-600">{subtitle}</p>
            </div>

            <div className="flex flex-wrap gap-3">
                {options.map((option) => {
                    const isSelected = selectedOptions.includes(option.id);
                    const canSelect = selectedOptions.length < maxSelections || isSelected;

                    return (
                        <button
                            key={option.id}
                            onClick={() => handleTagToggle(option.id)}
                            disabled={!canSelect}
                            className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200
                ${isSelected
                                    ? 'bg-blue-700 text-white border-2 border-blue-700 shadow-sm'
                                    : canSelect
                                        ? 'bg-white text-gray-700 border-2 border-gray-300 hover:border-blue-500 hover:text-blue-700'
                                        : 'bg-gray-100 text-gray-400 border-2 border-gray-200 cursor-not-allowed'
                                }
                ${isSelected ? 'scale-[0.98]' : 'hover:scale-[1.02]'}
            `}
                        >
                            {option.label}
                        </button>
                    );
                })}
            </div>

            <div className="text-xs text-gray-500">
                {selectedOptions.length}/{maxSelections} selected
            </div>
        </div>
    );
};