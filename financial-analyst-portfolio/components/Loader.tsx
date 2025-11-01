import React from 'react';

const Note: React.FC<{ style: React.CSSProperties, bottom: string }> = ({ style, bottom }) => (
    <div
        className="note absolute left-1/2 -translate-x-1/2 w-24 h-12 bg-gradient-to-br from-green-400 to-teal-600 rounded border-2 border-green-700/50 shadow-[0_4px_10px_rgba(0,0,0,0.5)] flex items-center justify-center"
        style={{ ...style, bottom }}
    >
        <div className="w-5 h-5 rounded-full border-2 border-green-200/50 flex items-center justify-center text-green-100 font-bold text-lg">
            $
        </div>
    </div>
);


const Loader: React.FC = () => {
    const noteCount = 10;
    return (
        <div className="fixed inset-0 bg-[#0A192F] z-[100] flex items-center justify-center">
            <div className="relative w-24 h-48">
                {[...Array(noteCount)].map((_, i) => (
                    <Note
                        key={i}
                        style={{ animationDelay: `${i * 0.1}s`, zIndex: noteCount - i }}
                        bottom={`${i * 4}px`}
                    />
                ))}
                <p className="absolute -bottom-12 w-full text-center text-slate-400 font-lato animate-pulse">
                    Compiling Financial Projections...
                </p>
            </div>
        </div>
    );
};

export default Loader;