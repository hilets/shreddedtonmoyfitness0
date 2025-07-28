
import { useEffect, useRef } from 'react';

interface LocomotiveScrollInstance {
  init(): void;
  on(event: string, func: Function): void;
  update(): void;
  destroy(): void;
  scrollTo(target: string | HTMLElement, options?: any): void;
}

declare global {
  interface Window {
    LocomotiveScroll: any;
  }
}

export const useLocomotiveScroll = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const locomotiveScrollRef = useRef<LocomotiveScrollInstance | null>(null);

  useEffect(() => {
    let locomotiveScroll: LocomotiveScrollInstance | null = null;

    const initLocomotiveScroll = async () => {
      try {
        const LocomotiveScroll = (await import('locomotive-scroll')).default;
        
        if (scrollRef.current) {
          locomotiveScroll = new LocomotiveScroll({
            el: scrollRef.current,
            smooth: true,
            multiplier: 1,
            class: 'is-revealed',
            scrollbarContainer: false,
            lenisOptions: {
              lerp: 0.1,
              duration: 1.2,
              orientation: 'vertical',
              gestureOrientation: 'vertical',
              smoothWheel: true,
              wheelMultiplier: 1,
              touchMultiplier: 2,
              normalizeWheel: true,
              easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            },
          });

          locomotiveScrollRef.current = locomotiveScroll;
        }
      } catch (error) {
        console.error('Failed to initialize Locomotive Scroll:', error);
      }
    };

    initLocomotiveScroll();

    return () => {
      if (locomotiveScroll) {
        locomotiveScroll.destroy();
      }
    };
  }, []);

  const scrollTo = (target: string | HTMLElement, options?: any) => {
    if (locomotiveScrollRef.current) {
      locomotiveScrollRef.current.scrollTo(target, options);
    }
  };

  return { scrollRef, scrollTo };
};
