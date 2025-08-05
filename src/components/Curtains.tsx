import { useEffect, useState } from 'react';

interface CurtainsProps {
  isOpen: boolean;
  onAnimationComplete?: () => void;
}

const Curtains = ({ isOpen, onAnimationComplete }: CurtainsProps) => {
  const [shouldRender, setShouldRender] = useState(true);

  useEffect(() => {
    if (isOpen) {
      const timer = setTimeout(() => {
        onAnimationComplete?.();
        // Keep curtains rendered but invisible for 1 more second, then remove
        setTimeout(() => setShouldRender(false), 1000);
      }, 1000); // Animation duration
      return () => clearTimeout(timer);
    }
  }, [isOpen, onAnimationComplete]);

  if (!shouldRender) return null;

  return (
    <div className={`curtain-container ${isOpen ? 'curtain-open' : ''}`}>
      <div className="curtain-left">
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background to-transparent opacity-95" />
        <div className="absolute top-1/2 left-3/4 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-32 h-32 bg-primary/20 rounded-full animate-pulse-glow" />
        </div>
      </div>
      <div className="curtain-right">
        <div className="absolute inset-0 bg-gradient-to-l from-background via-background to-transparent opacity-95" />
        <div className="absolute top-1/2 left-1/4 transform -translate-x-1/2 -translate-y-1/2">
          <div className="w-32 h-32 bg-primary/20 rounded-full animate-pulse-glow" />
        </div>
      </div>
      
      {/* Central TEDx logo/text on curtains */}
      <div className="fixed inset-0 flex items-center justify-center z-50 pointer-events-none">
        <div className="text-center opacity-60">
          <h1 className="text-6xl font-bold tracking-wider text-primary animate-glow">
            
          </h1>
          <p className="text-xl mt-4 text-foreground/80"></p>
        </div>
      </div>
    </div>
  );
};

export default Curtains;
