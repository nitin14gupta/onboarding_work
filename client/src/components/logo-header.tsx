import React from 'react';

export const LogoHeader: React.FC = () => {
    return (
        <div className="absolute top-6 left-6 z-10">
            <div className="w-12 h-12 rounded-full flex items-center justify-center">
                <div className="text-white text-xl font-bold">
                    <img src="/images/vridhee_logo.png" alt="Vridhee Logo" className="h-10" />
                </div>
            </div>
        </div>
    );
};
