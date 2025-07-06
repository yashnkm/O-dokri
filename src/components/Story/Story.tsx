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
    <section ref={sectionRef} className="py-20 bg-cream" id="story">
      <div className="container mx-auto px-6">
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