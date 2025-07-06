import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Community = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const quoteRef = useRef<HTMLParagraphElement>(null);
  const galleryRef = useRef<HTMLDivElement>(null);
  const tagsRef = useRef<HTMLDivElement>(null);

  const communityImages = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuA5nZAnC5W2rN-lDvUg87pcAjM9YCwINe5j4U5aGxNO-Tl7tqyhuwPFW7Jtr7QvuUX8lI1dVAsb-CFWZrwzbpZPXXVZhOl475zyvAeQjvWmhrMF8s1fpWmZunh7nvgt1DjBdla_N-V5lVE3ilqKwj3ltJ1zNUlR87HsJ5zGNp7bNPh327jA-jMYElQh2rXhrZayNydDO132b1pTYFpyCIqbuQGizRrepcvZO5g9fStJhKm4l5iDbvRO7-zdQtBbhJFw2PPKJ0R57WE",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuC8W2jgKu9_lc-dkFzBV29wJ9SEMm_yy6G0MQMcpMoMgeUyI-m2e23OnQOwlJcZBP5AnktNZmlWWOzQG30aQEi9X3dmN1AIl6uhtzc8qEJTZbpNJzgCuSnXqA5h3mkweSwX7bkEmf1Xfhsj00oXv6pfCzfoaoA1Yl61vt0J5Kn79j0ccelMf34nSi2Q_JpouJxCONISw_CnYF8ijHX1K4gKaqBZM4aAVaaGUWdnEqJU_ywLHaAqrFlKLYQgRwTXTI0_H7SzuxfXdkE",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCq5XbgfDC049Z2UqwjUCwRUzDCf7hrVLNAkWw87MahiR6Wm7WtCVojCLQJKtgFauDNCpSKdoo9kpdqdSW9CdfCBhzZWOjaHf_Ypy7GG-zn7FyY_0XOTIGsM_h5Get_LfJS0dsjM8IA2ASxT4fDszmcJnFFjKdAdZvsc85GZPH0c-2O8L3KiN-RUh0EC1DIEgcdSIn_k9JEBMfGnu9Ee3G32XfFEmA5d_kf4dIPXHRCfmHX9ue1vYdtTOfWLiXbh1V9LnMcPdLp0po",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAdr76eWoWNZ-EtrNJ2a0v7Mgb0FX-91Owlx73U0FD4y1jkHZwIdopSTeYHZ5Xy2tknT7H3qFy_EhzYICRVYzgwunMFkkgxmZiit3vrVmDFDYVT73XrdCGPzuKmF_SS7I6O0DG16GKVsp2EwdUoDrz1Z7qKmUPxCsiGI8DTwmxpJvdRcWLJJc5ycWygWXZIfPKSoPDAGfSQGKvpUHwwPiRQycAG7e6X8_GwRfdJ3S9go1RCPDLyiXS5OYlUcFR3aqv8eZpWZIAPt7A"
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title and quote
      gsap.fromTo([titleRef.current, quoteRef.current],
        {
          opacity: 0,
          y: 30
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );

      // Animate gallery images
      const images = galleryRef.current?.children;
      if (images) {
        gsap.fromTo(images,
          {
            opacity: 0,
            scale: 0.8,
            rotation: -5
          },
          {
            opacity: 1,
            scale: 1,
            rotation: 0,
            duration: 0.6,
            stagger: 0.1,
            ease: "back.out(1.7)",
            scrollTrigger: {
              trigger: galleryRef.current,
              start: "top 85%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }

      // Animate hashtags
      gsap.fromTo(tagsRef.current,
        {
          opacity: 0,
          y: 20
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: tagsRef.current,
            start: "top 90%",
            end: "bottom 20%",
            toggleActions: "play none none reverse"
          }
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-cream" id="community">
      <div className="container mx-auto px-6 text-center">
        <h2 ref={titleRef} className="text-4xl font-bold text-primary-orange mb-4">
          Community & Ethos
        </h2>
        <p ref={quoteRef} className="text-xl italic text-muted-text max-w-3xl mx-auto mb-8">
          "Wearing O'Dokri feels like stepping into a cherished memory, wrapped in comfort and style."
        </p>
        
        <div ref={galleryRef} className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {communityImages.map((image, index) => (
            <div 
              key={index}
              className="bg-cover bg-center aspect-square rounded-lg" 
              style={{ backgroundImage: `url("${image}")` }}
            />
          ))}
        </div>
        
        <div ref={tagsRef} className="flex justify-center items-center space-x-4 text-primary-orange font-semibold">
          <span>#TheDokriClub</span>
          <span className="text-gray-300">•</span>
          <span>#ModernOldSoul</span>
          <span className="text-gray-300">•</span>
          <span>#CottonWithCharacter</span>
        </div>
      </div>
    </section>
  );
};

export default Community;