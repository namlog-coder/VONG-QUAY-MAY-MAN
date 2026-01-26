
import React, { useEffect, useRef, useState, useCallback } from 'react';
import { STUDENTS, COLORS } from '../constants';

interface SpinWheelProps {
  onSpinEnd: (student: string) => void;
  isSpinning: boolean;
}

const SpinWheel: React.FC<SpinWheelProps> = ({ onSpinEnd, isSpinning }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [rotation, setRotation] = useState(0);
  const [targetRotation, setTargetRotation] = useState(0);
  
  const drawWheel = useCallback(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const size = canvas.width;
    const centerX = size / 2;
    const centerY = size / 2;
    const radius = size / 2 - 10;
    const sliceAngle = (2 * Math.PI) / STUDENTS.length;

    ctx.clearRect(0, 0, size, size);

    STUDENTS.forEach((student, i) => {
      const angle = i * sliceAngle + rotation;
      ctx.beginPath();
      ctx.fillStyle = COLORS[i % COLORS.length];
      ctx.moveTo(centerX, centerY);
      ctx.arc(centerX, centerY, radius, angle, angle + sliceAngle);
      ctx.lineTo(centerX, centerY);
      ctx.fill();
      ctx.strokeStyle = 'white';
      ctx.lineWidth = 1;
      ctx.stroke();

      // Draw text
      ctx.save();
      ctx.translate(centerX, centerY);
      ctx.rotate(angle + sliceAngle / 2);
      ctx.textAlign = 'right';
      ctx.fillStyle = 'white';
      ctx.font = 'bold 8px Quicksand';
      ctx.fillText(student.name.split(' ').pop() || '', radius - 20, 5);
      ctx.restore();
    });

    // Outer border
    ctx.beginPath();
    ctx.arc(centerX, centerY, radius, 0, 2 * Math.PI);
    ctx.strokeStyle = '#f59e0b';
    ctx.lineWidth = 5;
    ctx.stroke();

    // Center point
    ctx.beginPath();
    ctx.arc(centerX, centerY, 15, 0, 2 * Math.PI);
    ctx.fillStyle = '#fff';
    ctx.fill();
    ctx.stroke();
  }, [rotation]);

  useEffect(() => {
    drawWheel();
  }, [drawWheel]);

  useEffect(() => {
    if (isSpinning) {
      const extraSpins = 5 + Math.random() * 5;
      const newRotation = targetRotation + (extraSpins * 2 * Math.PI);
      setTargetRotation(newRotation);

      let start: number | null = null;
      const duration = 4000;

      const animate = (time: number) => {
        if (!start) start = time;
        const progress = (time - start) / duration;

        if (progress < 1) {
          // Ease-out cubic
          const easeOut = 1 - Math.pow(1 - progress, 3);
          const currentRot = rotation + (newRotation - rotation) * easeOut;
          setRotation(currentRot);
          requestAnimationFrame(animate);
        } else {
          setRotation(newRotation);
          // Calculate who won
          const sliceAngle = (2 * Math.PI) / STUDENTS.length;
          const normalizedRotation = (newRotation % (2 * Math.PI));
          // The wheel rotation is clockwise. The pointer is at 0 (right).
          // Index = (2PI - rotation) / sliceAngle
          const actualRotation = (2 * Math.PI - normalizedRotation) % (2 * Math.PI);
          const winningIndex = Math.floor(actualRotation / sliceAngle) % STUDENTS.length;
          onSpinEnd(STUDENTS[winningIndex].name);
        }
      };

      requestAnimationFrame(animate);
    }
  }, [isSpinning]);

  return (
    <div className="relative flex flex-col items-center">
      <div className="relative">
        {/* Pointer */}
        <div className="absolute top-1/2 -right-4 -translate-y-1/2 z-10 w-0 h-0 border-t-[15px] border-t-transparent border-b-[15px] border-b-transparent border-r-[25px] border-r-orange-500 shadow-lg"></div>
        <canvas 
          ref={canvasRef} 
          width={400} 
          height={400} 
          className="rounded-full shadow-2xl bg-white"
        />
      </div>
    </div>
  );
};

export default SpinWheel;
