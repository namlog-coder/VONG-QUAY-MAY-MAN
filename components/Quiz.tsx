
import React from 'react';
import { Question } from '../types';
import 'katex/dist/katex.min.css';
import { InlineMath } from 'react-katex';

interface QuizProps {
  question: Question;
  selectedOption: string | null;
  onSelectOption: (key: string) => void;
  showFeedback: boolean;
  isCorrect: boolean | null;
}

const Quiz: React.FC<QuizProps> = ({ 
  question, 
  selectedOption, 
  onSelectOption, 
  showFeedback,
  isCorrect 
}) => {
  return (
    <div className="bg-white p-8 rounded-3xl shadow-xl border-4 border-yellow-400 min-h-[400px] flex flex-col">
      <div className="flex items-center gap-3 mb-6">
        <span className="bg-orange-500 text-white w-10 h-10 rounded-full flex items-center justify-center font-bold text-xl">
          {question.id}
        </span>
        <h2 className="text-2xl font-bold text-blue-800 leading-tight">
          {question.image ? (
            <div className="flex flex-col gap-4">
              <img 
                src={question.image} 
                alt="Câu hỏi" 
                className="max-h-48 object-contain rounded-xl border-2 border-gray-100"
                referrerPolicy="no-referrer"
              />
              {question.text && (
                <span className="text-lg text-gray-600">
                  {question.text.includes('\\frac') ? <InlineMath math={question.text} /> : question.text}
                </span>
              )}
            </div>
          ) : (
            question.text.includes('\\frac') ? <InlineMath math={question.text} /> : question.text
          )}
        </h2>
      </div>

      <div className="space-y-4 flex-grow">
        {question.options.map((option) => (
          <button
            key={option.key}
            onClick={() => !showFeedback && onSelectOption(option.key)}
            className={`w-full text-left p-4 rounded-2xl border-2 transition-all text-lg font-semibold flex items-center gap-4 ${
              selectedOption === option.key
                ? 'bg-blue-100 border-blue-500 text-blue-900'
                : 'bg-gray-50 border-gray-200 text-gray-700 hover:bg-yellow-50 hover:border-yellow-300'
            } ${
              showFeedback && option.key === question.correctAnswer
                ? 'bg-green-100 border-green-500 !text-green-800'
                : ''
            } ${
              showFeedback && selectedOption === option.key && option.key !== question.correctAnswer
                ? 'bg-red-100 border-red-500 !text-red-800'
                : ''
            }`}
            disabled={showFeedback}
          >
            <span className={`w-8 h-8 rounded-full flex items-center justify-center border-2 ${
              selectedOption === option.key ? 'bg-blue-500 text-white border-blue-500' : 'bg-white border-gray-300 text-gray-500'
            }`}>
              {option.key}
            </span>
            {option.text.includes('\\frac') ? <InlineMath math={option.text} /> : option.text}
          </button>
        ))}
      </div>

      {showFeedback && (
        <div className={`mt-6 p-4 rounded-2xl text-center animate-bounce font-bold text-2xl ${
          isCorrect ? 'bg-green-500 text-white' : 'bg-red-500 text-white'
        }`}>
          {isCorrect ? '🎉 Rất giỏi! Chúc mừng em!' : '💪 Em cố gắng hơn nhé!'}
        </div>
      )}
    </div>
  );
};

export default Quiz;
