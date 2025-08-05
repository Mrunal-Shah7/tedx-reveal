import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import confetti from 'canvas-confetti';
import tedxHero from '@/assets/tedx-hero.jpg';

const TEDxReveal = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    // Track mouse movement for cursor animation
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const triggerGrandConfetti = () => {
    // Grand confetti celebration for TEDx reveal
    const duration = 4000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min;
    }

    // Continuous confetti rain
    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);

      // TEDx red confetti from multiple points
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
        colors: ['#FF2B06', '#FF4500', '#DC143C', '#FF6B35']
      });
      
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
        colors: ['#FF2B06', '#FF4500', '#DC143C', '#FF6B35']
      });
    }, 250);

    // Multiple center bursts with different timings
    setTimeout(() => {
      confetti({
        particleCount: 150,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#FF2B06', '#FF4500', '#DC143C', '#FFFFFF', '#FFD700']
      });
    }, 500);

    setTimeout(() => {
      confetti({
        particleCount: 100,
        spread: 120,
        origin: { y: 0.7 },
        colors: ['#FF2B06', '#FF4500', '#DC143C', '#FFFFFF']
      });
    }, 1000);

    setTimeout(() => {
      confetti({
        particleCount: 200,
        spread: 180,
        origin: { y: 0.5 },
        colors: ['#FF2B06', '#FF4500', '#DC143C', '#FFD700', '#FFFFFF']
      });
    }, 1500);
  };

  useEffect(() => {
    // Track mouse movement for cursor animation
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    // Trigger animations after component mounts
    setTimeout(() => setIsVisible(true), 300);
    
    // Trigger grand confetti celebration when page loads
    setTimeout(() => {
      triggerGrandConfetti();
    }, 800); // Start confetti slightly after animations begin
  }, []);

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Enhanced Background with Image */}
      <div className="absolute inset-0">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img 
            src={tedxHero} 
            alt="TEDx Stage" 
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for better text contrast */}
          <div className="absolute inset-0 bg-black/70" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
        </div>
        
        {/* Static grid pattern background */}
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div 
            className="w-full h-full"
            style={{
              backgroundImage: `
                linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px),
                linear-gradient(hsl(var(--primary)) 1px, transparent 1px)`,
              backgroundSize: '60px 60px'
            }}
          />
        </div>
      </div>

      {/* Minimal floating particles for black background */}
      <div className="absolute inset-0">
        {/* Simple floating particles */}
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-primary rounded-full animate-floating opacity-60" />
        <div className="absolute top-3/4 left-3/4 w-2 h-2 bg-accent rounded-full animate-floating opacity-50" style={{ animationDelay: '1s' }} />
        <div className="absolute top-1/2 right-1/4 w-4 h-4 bg-primary/80 rounded-full animate-floating opacity-40" style={{ animationDelay: '2s' }} />
        <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-accent rounded-full animate-floating opacity-70" style={{ animationDelay: '3s' }} />
        
        {/* Corner accent lights */}
        <div className="absolute top-10 left-10 w-1 h-20 bg-gradient-to-b from-primary to-transparent opacity-30" />
        <div className="absolute top-10 right-10 w-1 h-20 bg-gradient-to-b from-accent to-transparent opacity-30" />
        <div className="absolute bottom-10 left-10 w-1 h-20 bg-gradient-to-t from-primary to-transparent opacity-30" />
        <div className="absolute bottom-10 right-10 w-1 h-20 bg-gradient-to-t from-accent to-transparent opacity-30" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center max-w-6xl mx-auto px-6">
          
          {/* Main Announcement */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="mb-16">
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-relaxed mb-12">
                <span className="block text-foreground/90 mb-6">
                  The first ever
                </span>
                <span className="block text-foreground/90 mb-8">
                  
                </span>
              </h1>
              <div className="mb-16 relative">
                {/* Elegant radial glow pattern behind TEDx logo */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative">
                    {/* Large radial gradient backdrop */}
                    <div className="absolute w-[600px] h-[400px] rounded-full bg-gradient-radial from-primary/30 via-primary/10 to-transparent animate-pulse blur-xl" 
                         style={{ left: '-300px', top: '-200px' }} />
                    
                    {/* Medium concentric circles */}
                    <div className="absolute w-80 h-80 rounded-full border-2 border-primary/20 animate-ping" 
                         style={{ left: '-160px', top: '-160px', animationDuration: '3s' }} />
                    
                    <div className="absolute w-60 h-60 rounded-full border border-accent/30 animate-ping" 
                         style={{ left: '-120px', top: '-120px', animationDuration: '4s', animationDelay: '1s' }} />
                    
                    {/* Floating light orbs */}
                    <div className="absolute w-6 h-6 rounded-full bg-primary/60 blur-sm animate-floating" 
                         style={{ left: '-200px', top: '-50px', animationDelay: '0s' }} />
                    
                    <div className="absolute w-4 h-4 rounded-full bg-accent/80 blur-sm animate-floating" 
                         style={{ right: '-180px', top: '-30px', animationDelay: '1.5s' }} />
                    
                    <div className="absolute w-8 h-8 rounded-full bg-primary/40 blur-sm animate-floating" 
                         style={{ left: '-100px', bottom: '-80px', animationDelay: '2.5s' }} />
                    
                    {/* Subtle geometric accents */}
                    <div className="absolute w-32 h-1 bg-gradient-to-r from-transparent via-primary/50 to-transparent rotate-45 animate-pulse" 
                         style={{ left: '-64px', top: '-100px', animationDelay: '1s' }} />
                    
                    <div className="absolute w-24 h-1 bg-gradient-to-r from-transparent via-accent/60 to-transparent -rotate-45 animate-pulse" 
                         style={{ right: '-48px', bottom: '-80px', animationDelay: '2s' }} />
                  </div>
                </div>
                
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary to-accent text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-black tracking-tight animate-glow relative z-10 leading-tight">
                  TEDx<span className="block sm:inline text-white">AdaniUniversity</span>
                </span>
              </div>
            </div>
          </div>

          {/* Subtitle */}
          <div className={`transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="mb-16">
              <p className="text-xl md:text-3xl lg:text-4xl font-light text-foreground/90 mb-6">
                is coming
              </p>
              <p className="text-2xl md:text-4xl lg:text-5xl font-bold text-primary mb-8">
                
              </p>
              <div className="relative">
                <p className="text-3xl md:text-5xl lg:text-6xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 tracking-wide animate-pulse shadow-2xl">
                  This Fall
                </p>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 rounded-full animate-pulse shadow-lg"></div>
                {/* Enhanced multi-layer glow effect */}
                <div className="absolute inset-0 text-3xl md:text-5xl lg:text-6xl font-bold text-yellow-400 blur-lg opacity-50 animate-pulse">
                  This Fall
                </div>
                <div className="absolute inset-0 text-3xl md:text-5xl lg:text-6xl font-bold text-orange-500 blur-md opacity-40 animate-pulse">
                  This Fall
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className={`transition-all duration-1000 delay-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="mt-20">
              <Button 
                onClick={triggerGrandConfetti}
                className="reveal-button text-base md:text-lg px-12 py-6 rounded-full bg-gradient-to-r from-primary via-accent to-primary border-2 border-primary/30 shadow-[0_0_30px_hsl(var(--primary)/0.5)] transition-all duration-300 hover:scale-110 hover:shadow-[0_0_50px_hsl(var(--primary)/0.8)] hover:border-primary/60 active:scale-95"
              >
                <span className="flex items-center gap-3">
                  🎉 Celebrate More 🎉
                </span>
              </Button>
            </div>
          </div>

          {/* Decorative TEDx branding */}
          <div className={`absolute bottom-8 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div className="flex items-center gap-10">
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
              <div className="text-primary font-bold text-sm tracking-[0.3em]">
                IDEAS • WORTH • SPREADING
              </div>
              <div className="w-24 h-px bg-gradient-to-r from-transparent via-primary to-transparent" />
            </div>
          </div>
        </div>
      </div>

      {/* Corner accent */}
      <div className="absolute top-8 right-8">
        <div className="w-16 h-16 border-t-2 border-r-2 border-primary/30 animate-pulse" />
      </div>
      <div className="absolute bottom-8 left-8">
        <div className="w-16 h-16 border-b-2 border-l-2 border-primary/30 animate-pulse" />
      </div>
    </div>
  );
};

export default TEDxReveal;