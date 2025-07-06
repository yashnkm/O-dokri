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
    <header ref={headerRef} className="sticky top-0 z-50 bg-cream/80 backdrop-blur-md">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 ref={logoRef} className="text-3xl font-bold text-primary-orange">O'Dokri</h1>
        
        <nav className="hidden md:flex items-center space-x-8">
          <a 
            className="text-dark-text hover:text-primary-orange transition-colors" 
            href="#story"
          >
            Our Story
          </a>
          <a 
            className="text-dark-text hover:text-primary-orange transition-colors" 
            href="#styles"
          >
            Signature Styles
          </a>
          <a 
            className="text-dark-text hover:text-primary-orange transition-colors" 
            href="#community"
          >
            Community
          </a>
          <a 
            className="text-dark-text hover:text-primary-orange transition-colors" 
            href="#contact"
          >
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