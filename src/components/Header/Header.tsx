import { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const logoRef = useRef<HTMLHeadingElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Header slide down animation on load
      gsap.fromTo(headerRef.current,
        {
          y: -100,
          opacity: 0
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          ease: "power2.out"
        }
      );

      // Logo bounce animation
      gsap.fromTo(logoRef.current,
        {
          scale: 0.8,
          opacity: 0
        },
        {
          scale: 1,
          opacity: 1,
          duration: 0.6,
          delay: 0.3,
          ease: "back.out(1.7)"
        }
      );
    }, headerRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (mobileMenuRef.current) {
      if (isMenuOpen) {
        gsap.fromTo(mobileMenuRef.current,
          {
            height: 0,
            opacity: 0
          },
          {
            height: 'auto',
            opacity: 1,
            duration: 0.3,
            ease: "power2.out"
          }
        );
      }
    }
  }, [isMenuOpen]);

  return (
    <header ref={headerRef} className="sticky top-0 z-50 bg-cream/80 backdrop-blur-md border-b border-primary-orange/10 relative overflow-hidden">
      {/* Geometric Pattern Background */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary-orange/5 via-transparent to-vintage-brown/5"></div>
        <div className="absolute top-2 left-10 w-6 h-6">
          <svg viewBox="0 0 100 100" className="w-full h-full text-primary-orange">
            <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="2"/>
            <circle cx="50" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="1"/>
            <circle cx="50" cy="50" r="3" fill="currentColor"/>
          </svg>
        </div>
        <div className="absolute top-2 right-10 w-6 h-6">
          <svg viewBox="0 0 100 100" className="w-full h-full text-vintage-brown">
            <path d="M30,50 C30,30 40,20 60,20 C80,20 90,30 90,50 C90,70 80,80 60,80 C50,80 40,75 35,65 C32,60 30,55 30,50 Z" fill="currentColor"/>
          </svg>
        </div>
      </div>
      
      {/* Traditional Border Pattern */}
      <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-transparent via-primary-orange/30 to-transparent"></div>
      <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-[2px]">
        <svg viewBox="0 0 100 4" className="w-full h-full text-primary-orange">
          <path d="M10,2 Q15,1 20,2 Q25,3 30,2 Q35,1 40,2 Q45,3 50,2 Q55,1 60,2 Q65,3 70,2 Q75,1 80,2 Q85,3 90,2" 
                fill="none" stroke="currentColor" strokeWidth="1"/>
        </svg>
      </div>
      
      <div className="container mx-auto px-6 py-4 flex justify-between items-center relative z-10">
        <h1 ref={logoRef} className="text-3xl font-bold text-primary-orange">O'Dokri</h1>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            className="text-dark-text hover:text-primary-orange transition-colors flex items-center gap-2 group" 
            href="#story"
          >
            <div className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity">
              <svg viewBox="0 0 100 100" className="w-full h-full text-current">
                <path d="M30,50 C30,30 40,20 60,20 C80,20 90,30 90,50 C90,70 80,80 60,80 C50,80 40,75 35,65 C32,60 30,55 30,50 Z" fill="currentColor"/>
              </svg>
            </div>
            Our Story
          </a>
          <a 
            className="text-dark-text hover:text-primary-orange transition-colors flex items-center gap-2 group" 
            href="#styles"
          >
            <div className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity">
              <svg viewBox="0 0 100 100" className="w-full h-full text-current">
                <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="3"/>
                <circle cx="50" cy="50" r="8" fill="currentColor"/>
              </svg>
            </div>
            Signature Styles
          </a>
          <a 
            className="text-dark-text hover:text-primary-orange transition-colors flex items-center gap-2 group" 
            href="#community"
          >
            <div className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity">
              <svg viewBox="0 0 100 100" className="w-full h-full text-current">
                <path d="M50,20 Q60,30 50,40 Q40,30 50,20 M50,60 Q60,70 50,80 Q40,70 50,60 M30,50 Q40,60 50,50 Q40,40 30,50 M70,50 Q80,60 70,70 Q60,60 70,50" fill="currentColor"/>
              </svg>
            </div>
            Community
          </a>
          <a 
            className="text-dark-text hover:text-primary-orange transition-colors flex items-center gap-2 group" 
            href="#contact"
          >
            <div className="w-4 h-4 opacity-60 group-hover:opacity-100 transition-opacity">
              <svg viewBox="0 0 100 100" className="w-full h-full text-current">
                <rect x="25" y="25" width="50" height="50" fill="none" stroke="currentColor" strokeWidth="3"/>
                <rect x="35" y="35" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2"/>
                <circle cx="50" cy="50" r="8" fill="currentColor"/>
              </svg>
            </div>
            Contact
          </a>
        </nav>

        <a 
          className="hidden md:inline-block px-5 py-2 text-sm font-bold text-white bg-primary-orange rounded-full hover:bg-orange-600 transition-colors" 
          href="#signup"
        >
          Join The Dokri Club
        </a>

        <button 
          className="md:hidden text-dark-text"
          onClick={toggleMenu}
        >
          <svg 
            className="feather feather-menu" 
            fill="none" 
            height="24" 
            stroke="currentColor" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
            viewBox="0 0 24 24" 
            width="24"
          >
            <line x1="3" x2="21" y1="12" y2="12" />
            <line x1="3" x2="21" y1="6" y2="6" />
            <line x1="3" x2="21" y1="18" y2="18" />
          </svg>
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div ref={mobileMenuRef} className="md:hidden bg-cream border-t border-soft-pink">
          <div className="container mx-auto px-6 py-4 space-y-4">
            <a 
              className="block text-dark-text hover:text-primary-orange transition-colors" 
              href="#story"
              onClick={() => setIsMenuOpen(false)}
            >
              Our Story
            </a>
            <a 
              className="block text-dark-text hover:text-primary-orange transition-colors" 
              href="#styles"
              onClick={() => setIsMenuOpen(false)}
            >
              Signature Styles
            </a>
            <a 
              className="block text-dark-text hover:text-primary-orange transition-colors" 
              href="#community"
              onClick={() => setIsMenuOpen(false)}
            >
              Community
            </a>
            <a 
              className="block text-dark-text hover:text-primary-orange transition-colors" 
              href="#contact"
              onClick={() => setIsMenuOpen(false)}
            >
              Contact
            </a>
            <a 
              className="block px-5 py-2 text-sm font-bold text-white bg-primary-orange rounded-full hover:bg-orange-600 transition-colors text-center" 
              href="#signup"
              onClick={() => setIsMenuOpen(false)}
            >
              Join The Dokri Club
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;