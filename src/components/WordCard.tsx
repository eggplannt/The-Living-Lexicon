import React from 'react';

interface WordCardProps {
  word: string;
  definition: string;
  example: string;
}

const WordCard: React.FC<WordCardProps> = ({ word, definition, example }) => {
  return (
    <div className="h-full bg-white rounded-xl shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition-all duration-300 p-8 w-full max-w-2xl lg:max-w-3xl flex flex-col">
      <div className="flex justify-between items-start mb-4">
        <h2 className="text-4xl font-bold text-red-900 capitalize">{word}</h2>
        <span className="text-gray-400 hover:text-red-700 text-2xl cursor-pointer transition-colors duration-200">
          <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684z" />
          </svg>
        </span>
      </div>
      <p className="text-gray-800 text-lg mb-4 min-h-24">{definition}</p>
      <blockquote className="border-l-4 border-orange-300 italic text-gray-600 pl-4 mt-auto">
        {example}
      </blockquote>
    </div>
  );
};

export default WordCard;
