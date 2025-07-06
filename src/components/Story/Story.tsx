import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Story = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate image from left
      gsap.fromTo(imageRef.current, 
        {
          opacity: 0,
          x: -50
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate content from right
      gsap.fromTo(contentRef.current, 
        {
          opacity: 0,
          x: 50
        },
        {
          opacity: 1,
          x: 0,
          duration: 0.8,
          delay: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-cream relative overflow-hidden" id="story">
      {/* Architectural Elements - Jharokhas */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Left Jharokha */}
        <div className="absolute top-10 left-0 w-32 h-64 opacity-20">
          <svg viewBox="0 0 100 200" className="w-full h-full text-vintage-brown">
            {/* Arch structure */}
            <path d="M20,180 L20,60 Q20,20 50,20 Q80,20 80,60 L80,180 Z" fill="none" stroke="currentColor" strokeWidth="2"/>
            {/* Decorative columns */}
            <rect x="25" y="60" width="3" height="120" fill="currentColor"/>
            <rect x="72" y="60" width="3" height="120" fill="currentColor"/>
            {/* Intricate patterns */}
            <circle cx="50" cy="50" r="8" fill="none" stroke="currentColor" strokeWidth="1"/>
            <path d="M35,40 Q50,30 65,40" fill="none" stroke="currentColor" strokeWidth="1"/>
            <path d="M35,60 Q50,50 65,60" fill="none" stroke="currentColor" strokeWidth="1"/>
            {/* Base platform */}
            <rect x="15" y="175" width="70" height="5" fill="currentColor"/>
          </svg>
        </div>
        
        {/* Right Jharokha */}
        <div className="absolute top-16 right-0 w-28 h-56 opacity-15">
          <svg viewBox="0 0 100 200" className="w-full h-full text-primary-orange">
            {/* Multiple arches */}
            <path d="M15,180 L15,70 Q15,30 35,30 Q55,30 55,70 L55,180" fill="none" stroke="currentColor" strokeWidth="2"/>
            <path d="M45,180 L45,70 Q45,30 65,30 Q85,30 85,70 L85,180" fill="none" stroke="currentColor" strokeWidth="2"/>
            {/* Decorative elements */}
            <circle cx="35" cy="50" r="5" fill="none" stroke="currentColor" strokeWidth="1"/>
            <circle cx="65" cy="50" r="5" fill="none" stroke="currentColor" strokeWidth="1"/>
            <path d="M20,90 Q35,85 50,90 Q65,85 80,90" fill="none" stroke="currentColor" strokeWidth="1"/>
            {/* Base */}
            <rect x="10" y="175" width="80" height="5" fill="currentColor"/>
          </svg>
        </div>

        {/* Traditional Archway at bottom */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 w-40 h-20 opacity-10">
          <svg viewBox="0 0 200 50" className="w-full h-full text-primary-orange">
            <path d="M20,45 L20,25 Q20,5 50,5 L150,5 Q180,5 180,25 L180,45" fill="none" stroke="currentColor" strokeWidth="3"/>
            <path d="M30,40 Q50,30 70,40 Q90,30 110,40 Q130,30 150,40 Q170,30 170,40" fill="none" stroke="currentColor" strokeWidth="1"/>
            <circle cx="50" cy="25" r="3" fill="currentColor"/>
            <circle cx="100" cy="25" r="3" fill="currentColor"/>
            <circle cx="150" cy="25" r="3" fill="currentColor"/>
          </svg>
        </div>
      </div>
      
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div 
            ref={imageRef}
            className="w-full h-96 bg-center bg-no-repeat bg-cover rounded-lg shadow-xl" 
            style={{
              backgroundImage: `url("https://lh3.googleusercontent.com/aida-public/AB6AXuCJbiNfnoSPz9F5mlWS4_xBCtS64tcoyYzeXcy26bKK6jpFWyFgOm80I9rNy3Xgu7HnD8j35sWESkF8D9vftDmHS1q-hAv0QCvX6xf1aaxi6B6iqbgysC0z7zxVPKpFNLO2HPQIKUr-TO4NfGnxUr6ND8gXhKCFGEcSDY8lF_z7MT5N_jy8URt683292fX4V-fmacSHvxr66R_UXLdsuuCNmmf4PRkHGV0X9aLU1uRzIg24gMNedIqNmzsJmQwnEKi3OHZzeah0F-c")`,
              filter: 'sepia(0.4) contrast(0.9) brightness(1.1)'
            }}
          />
          <div ref={contentRef} className="text-center md:text-left">
            <h2 className="text-4xl font-bold leading-tight text-primary-orange mb-4">
              Our Story
            </h2>
            <p className="text-lg text-muted-text leading-relaxed">
              O'Dokri is a clothing brand that blends modern aesthetics with nostalgic elements, 
              inspired by the founder's grandmother and her timeless style. We believe in creating 
              pieces that are not just clothes, but memories you can wear. Each garment is a tribute 
              to enduring elegance and the stories that shape us.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Story;