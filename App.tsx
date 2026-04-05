
import React, { useState, useCallback, useEffect, useRef } from 'react';
import SpinWheel from './components/SpinWheel';
import Quiz from './components/Quiz';
import { QUESTIONS } from './constants';
import { GameStatus } from './types';
import { Star, Trophy, Sparkles, RefreshCcw, CheckCircle, Play } from 'lucide-react';

const App: React.FC = () => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedStudent, setSelectedStudent] = useState<string | null>(null);
  const [gameStatus, setGameStatus] = useState<GameStatus>('IDLE');
  const [userAnswer, setUserAnswer] = useState<string | null>(null);
  const [showFeedback, setShowFeedback] = useState(false);

  const correctAudioRef = useRef<HTMLAudioElement | null>(null);
  const failAudioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    correctAudioRef.current = new Audio('https://assets.mixkit.co/active_storage/sfx/2019/2019-preview.mp3');
    failAudioRef.current = new Audio('https://assets.mixkit.co/active_storage/sfx/2017/2017-preview.mp3');

    return () => {
      if (correctAudioRef.current) correctAudioRef.current.pause();
      if (failAudioRef.current) failAudioRef.current.pause();
    };
  }, []);

  const currentQuestion = QUESTIONS[currentQuestionIndex];

  const handleStartSpin = () => {
    if (gameStatus === 'SPINNING') return;
    setGameStatus('SPINNING');
    setSelectedStudent(null);
    setShowFeedback(false);
    setUserAnswer(null);
  };

  const handleSpinEnd = (student: string) => {
    setSelectedStudent(student);
    setGameStatus('STUDENT_SELECTED');
  };

  const handleSelectOption = (key: string) => {
    setUserAnswer(key);
    setGameStatus('ANSWERING');
  };

  const isCorrect = userAnswer === currentQuestion.correctAnswer;

  const handleCheckResult = () => {
    if (!userAnswer) return;
    setShowFeedback(true);
    setGameStatus('CHECKED');

    if (isCorrect) {
      if (correctAudioRef.current) {
        correctAudioRef.current.currentTime = 0;
        correctAudioRef.current.play().catch(e => console.log("Correct audio play failed:", e));
      }
    } else {
      if (failAudioRef.current) {
        failAudioRef.current.currentTime = 0;
        failAudioRef.current.play().catch(e => console.log("Fail audio play failed:", e));
      }
    }
  };

  const handleNextTurn = () => {
    setGameStatus('IDLE');
    setSelectedStudent(null);
    setUserAnswer(null);
    setShowFeedback(false);
    // Loop questions
    setCurrentQuestionIndex((prev) => (prev + 1) % QUESTIONS.length);
  };

  return (
    <div className="min-h-screen bg-[#fef9c3] p-4 md:p-8 flex flex-col items-center">
      {/* Decorative elements */}
      <div className="fixed top-10 left-10 text-yellow-500 animate-float opacity-50"><Star size={48} fill="currentColor" /></div>
      <div className="fixed bottom-10 right-10 text-blue-400 animate-float opacity-50" style={{animationDelay: '1s'}}><Sparkles size={48} /></div>
      <div className="fixed top-40 right-20 text-red-400 animate-float opacity-50" style={{animationDelay: '0.5s'}}><Trophy size={48} /></div>

      <header className="mb-8 text-center relative z-10">
        <h1 className="text-5xl md:text-6xl font-black text-blue-700 tracking-tight drop-shadow-md mb-2 flex items-center justify-center gap-4">
          <Star className="text-yellow-500 fill-yellow-500" />
          VÒNG QUAY KÌ DIỆU
          <Star className="text-yellow-500 fill-yellow-500" />
        </h1>
        <p className="text-xl font-bold text-orange-600 bg-white/50 inline-block px-4 py-1 rounded-full border-2 border-orange-200 shadow-sm">
          chào mừng các bạn học sinh lớp 1C
        </p>
      </header>

      <main className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-8 items-start relative z-10">
        {/* Left Side: Quiz */}
        <div className="order-2 lg:order-1">
          <Quiz 
            question={currentQuestion}
            selectedOption={userAnswer}
            onSelectOption={handleSelectOption}
            showFeedback={showFeedback}
            isCorrect={isCorrect}
          />
        </div>

        {/* Right Side: Spin Wheel */}
        <div className="order-1 lg:order-2 flex flex-col items-center">
          <div className="mb-6 min-h-[80px] text-center w-full">
            {selectedStudent ? (
              <div className="animate-bounce inline-block">
                <span className="text-sm font-bold text-blue-500 block uppercase mb-1">Học sinh được chọn là:</span>
                <span className="text-4xl font-black text-white bg-red-500 px-6 py-2 rounded-2xl shadow-xl border-4 border-yellow-300 inline-block">
                  {selectedStudent}
                </span>
              </div>
            ) : gameStatus === 'SPINNING' ? (
              <span className="text-2xl font-bold text-orange-500 animate-pulse">Vòng quay đang xoay...</span>
            ) : (
              <span className="text-2xl font-bold text-gray-400 italic">Nhấn "Bắt đầu quay" để chọn học sinh!</span>
            )}
          </div>
          <SpinWheel onSpinEnd={handleSpinEnd} isSpinning={gameStatus === 'SPINNING'} />
        </div>
      </main>

      {/* Footer Controls */}
      <footer className="mt-12 mb-8 flex flex-wrap justify-center gap-6 relative z-10">
        <button
          onClick={handleStartSpin}
          disabled={gameStatus === 'SPINNING' || gameStatus === 'CHECKED'}
          className="group flex items-center gap-3 bg-gradient-to-br from-yellow-400 to-orange-500 text-white px-8 py-4 rounded-full font-black text-2xl shadow-[0_8px_0_rgb(194,120,0)] active:shadow-none active:translate-y-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:brightness-110"
        >
          <Play className="fill-white" />
          Bắt đầu quay
        </button>

        <button
          onClick={handleCheckResult}
          disabled={!userAnswer || gameStatus === 'CHECKED'}
          className="group flex items-center gap-3 bg-gradient-to-br from-blue-400 to-blue-600 text-white px-8 py-4 rounded-full font-black text-2xl shadow-[0_8px_0_rgb(29,78,216)] active:shadow-none active:translate-y-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:brightness-110"
        >
          <CheckCircle />
          Kiểm tra KQ
        </button>

        <button
          onClick={handleNextTurn}
          disabled={gameStatus !== 'CHECKED'}
          className="group flex items-center gap-3 bg-gradient-to-br from-green-400 to-green-600 text-white px-8 py-4 rounded-full font-black text-2xl shadow-[0_8px_0_rgb(21,128,61)] active:shadow-none active:translate-y-2 transition-all disabled:opacity-50 disabled:cursor-not-allowed hover:brightness-110"
        >
          <RefreshCcw className="group-hover:rotate-180 transition-transform duration-500" />
          Chơi tiếp
        </button>
      </footer>

      {/* Visual background clutter */}
      <div className="absolute top-1/4 left-1/4 w-12 h-12 bg-pink-200 rounded-full blur-xl opacity-40"></div>
      <div className="absolute bottom-1/4 right-1/4 w-20 h-20 bg-blue-200 rounded-full blur-xl opacity-40"></div>
    </div>
  );
};

export default App;
