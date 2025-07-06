import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export const fadeInUp = (element: string | Element, delay: number = 0) => {
  return gsap.fromTo(element, 
    {
      opacity: 0,
      y: 50
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      delay,
      ease: "power2.out"
    }
  );
};

export const fadeInLeft = (element: string | Element, delay: number = 0) => {
  return gsap.fromTo(element,
    {
      opacity: 0,
      x: -50
    },
    {
      opacity: 1,
      x: 0,
      duration: 0.8,
      delay,
      ease: "power2.out"
    }
  );
};

export const fadeInRight = (element: string | Element, delay: number = 0) => {
  return gsap.fromTo(element,
    {
      opacity: 0,
      x: 50
    },
    {
      opacity: 1,
      x: 0,
      duration: 0.8,
      delay,
      ease: "power2.out"
    }
  );
};

export const staggerFadeIn = (elements: string | Element[], delay: number = 0.1) => {
  return gsap.fromTo(elements,
    {
      opacity: 0,
      y: 30
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.6,
      stagger: delay,
      ease: "power2.out"
    }
  );
};

export const scaleOnHover = (element: string | Element) => {
  const el = typeof element === 'string' ? document.querySelector(element) : element;
  if (!el) return;

  el.addEventListener('mouseenter', () => {
    gsap.to(el, {
      scale: 1.05,
      duration: 0.3,
      ease: "power2.out"
    });
  });

  el.addEventListener('mouseleave', () => {
    gsap.to(el, {
      scale: 1,
      duration: 0.3,
      ease: "power2.out"
    });
  });
};

export const scrollFadeIn = (element: string | Element, trigger?: string | Element) => {
  return gsap.fromTo(element,
    {
      opacity: 0,
      y: 50
    },
    {
      opacity: 1,
      y: 0,
      duration: 0.8,
      ease: "power2.out",
      scrollTrigger: {
        trigger: trigger || element,
        start: "top 80%",
        end: "bottom 20%",
        toggleActions: "play none none reverse"
      }
    }
  );
};

export const parallaxEffect = (element: string | Element, speed: number = 0.5) => {
  return gsap.to(element, {
    yPercent: -50 * speed,
    ease: "none",
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      end: "bottom top",
      scrub: true
    }
  });
};