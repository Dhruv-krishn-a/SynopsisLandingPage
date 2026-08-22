'use client';
import { useEffect, useState } from 'react';

export default function MouseGlowEffect() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  if (!isMounted) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* Soft Electric Violet & Indigo Ambient Halos */}
      <div className="absolute top-10 left-10 w-[500px] h-[500px] rounded-full bg-violet-600/10 blur-[140px] opacity-40 pointer-events-none"></div>
      <div className="absolute top-[40%] right-10 w-[500px] h-[500px] rounded-full bg-indigo-600/10 blur-[140px] opacity-35 pointer-events-none"></div>

      {/* Dynamic Soft Cursor Spotlight */}
      <div 
        className="absolute w-[600px] h-[600px] rounded-full blur-[130px] opacity-25 mix-blend-screen"
        style={{
          background: 'radial-gradient(circle, rgba(139,92,246,0.3) 0%, rgba(99,102,241,0.15) 50%, transparent 80%)',
          left: mousePosition.x - 300,
          top: mousePosition.y - 300,
          transition: 'left 0.15s cubic-bezier(0.25, 1, 0.5, 1), top 0.15s cubic-bezier(0.25, 1, 0.5, 1)'
        }}
      />
    </div>
  );
}
