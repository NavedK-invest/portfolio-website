import React from 'react';

const Note: React.FC<{ style?: React.CSSProperties; offsetY: number }> = ({ style, offsetY }) => (
<div
    className="note absolute w-24 h-12 -ml-12 bg-gradient-to-br from-green-400 to-teal-600 rounded-xl border-2 border-green-700/50 shadow-lg flex items-center justify-center animate-fadeInUp"
    style={{
    ...style,
    top: '50%',
    left: '50%',
      transform: `translate(-50%, ${offsetY}px)`, // single transform handles both axes
    }}
  >
    <div className="w-6 h-6 rounded-full border-2 border-green-200/50 flex items-center justify-center text-green-100 font-bold text-lg">
      $
    </div>
  </div>
);

const Loader: React.FC = () => {
  const noteCount = 10;
  const spacing = 20;

  return (
    <div className="fixed inset-0 bg-[#0A192F] z-[100] flex items-center justify-center">
      <div className="relative w-32 h-64">
        {[...Array(noteCount)].map((_, i) => (
          <Note
            key={i}
            offsetY={-((noteCount - 1) / 2 - i) * spacing}
            style={{
              animationDelay: `${i * 0.1}s`,
              zIndex: noteCount - i,
            }}
          />
        ))}
        <p className="absolute bottom-[-3rem] left-1/2 -translate-x-1/2 text-center text-slate-400 font-lato animate-pulse">
          Compiling Financial Projections...
        </p>
      </div>
    </div>
  );
};

export default Loader;
