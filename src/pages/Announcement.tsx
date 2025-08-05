import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Curtains from '@/components/Curtains';

const Announcement = () => {
  const [showCurtains, setShowCurtains] = useState(false);
  const [curtainsOpen, setCurtainsOpen] = useState(false);
  const navigate = useNavigate();

  const handleReveal = () => {
    const audio = new Audio('./sounds/audio1.mp3');
    audio.play()
    setShowCurtains(true);
    // Start curtain opening animation after a brief delay
    setTimeout(() => {
      setCurtainsOpen(true);
    }, 500);
  };

  const handleAnimationComplete = () => {
    // Navigate to the TEDx reveal page
    navigate('/reveal');
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-primary/10 rounded-full animate-floating" />
          <div className="absolute bottom-20 right-20 w-48 h-48 bg-primary/5 rounded-full animate-floating" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-10 w-32 h-32 bg-primary/8 rounded-full animate-floating" style={{ animationDelay: '2s' }} />
        </div>

        <div className="text-center z-10 max-w-4xl mx-auto px-6">
          {/* Main announcement text */}
          <div className="mb-16">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight animate-text-reveal">
              <span className="block text-foreground/90 mb-4">ACM at Adani University</span>
              <span className="block text-primary mb-4">is proud to announce!</span>
            </h1>
            
            <div className="animate-text-reveal-delayed">
              <p className="text-xl md:text-2xl text-foreground/70 mb-12 font-light tracking-wide">
                
              </p>
            </div>
          </div>

          {/* Enhanced Reveal button */}
          <div className="animate-text-reveal-delayed">
            <Button 
              onClick={handleReveal}
              className="reveal-button group relative px-12 py-8 text-xl font-bold tracking-wider uppercase rounded-full bg-gradient-to-r from-primary via-accent to-primary border-2 border-primary/30 shadow-[0_0_40px_hsl(var(--primary)/0.6)] transition-all duration-500 ease-out hover:scale-110 hover:shadow-[0_0_60px_hsl(var(--primary)/0.9)] hover:border-primary/60 active:scale-95 disabled:opacity-50 disabled:hover:scale-100"
              disabled={showCurtains}
            >
              <span className="relative z-10 flex items-center gap-4">
                <span className="text-white font-extrabold">Reveal the Surprise</span>
                <svg 
                  className="w-7 h-7 transition-all duration-300 group-hover:translate-x-2 group-hover:scale-110" 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
              
              {/* Enhanced glow effect */}
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary via-accent to-primary opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-70"></div>
              
              {/* Shimmer effect */}
              <div className="absolute inset-0 rounded-full overflow-hidden">
                <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent skew-x-12 transition-all duration-700 group-hover:left-[100%]"></div>
              </div>
              
              {/* Pulse ring */}
              <div className="absolute inset-0 rounded-full border-2 border-white/20 animate-ping opacity-0 group-hover:opacity-100"></div>
            </Button>
          </div>

          {/* Decorative elements */}
          <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-text-reveal-delayed">
            <div className="flex items-center gap-4">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-primary/50" />
              <div className="w-2 h-2 bg-primary rounded-full animate-pulse" />
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-primary/50" />
            </div>
          </div>
        </div>
      </div>

      {/* Curtains overlay */}
      {showCurtains && (
        <Curtains 
          isOpen={curtainsOpen} 
          onAnimationComplete={handleAnimationComplete}
        />
      )}
    </>
  );
};

export default Announcement;