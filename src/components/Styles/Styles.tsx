import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const Styles = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const cardsRef = useRef<HTMLDivElement>(null);

  const products = [
    {
      id: 1,
      name: "Jhilmil Dress",
      description: "A dress that sparkles with memories.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB8LhVHpWPTCaTcYp87C5xG0VNDB5NEAK4z7yEEwXjIKkvE0LBo3S8mTZhRQroEk-rjlMY5TXBSZH57Wd2TJHrupLgncvmtvZQUrteoTTCo0a2Oqp5YjmHJLvTbHZ9oiaINNU0g-MkJGRF2uTtkRHMzZoprVHZHz-Br5uQxWUOd5STRX8ZZAkFdTm2vy_m-FC6isavEqt8MQHqW7FxrohziHZjSkwSN_7c4XNGG8OKDXHd0F_g75G8l90YK0pBk54F8-qg4SXohvAg"
    },
    {
      id: 2,
      name: "Manmarzi Blouse",
      description: "A blouse with a free-spirited charm.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBHP5XYrvnRclv4uIM8B7559Rvp3dr6KarUZbzZ2XuOfLRqpn75pPuX6DeQpPZd_7n6sMGPeYpiPYcqJhLixEj3bteh5xR1dJMt4vUMiErA4cWngg57AJh5PnutczeAqNPC03e4pdMy8V3PUbVsvB3RH_jiIc6K_Rb5nknixyOln_ngDDHPfQ6I8LXrrUW5hYtFCxp63at3h2RuhWWl-jOzh4BoRfcb-i3H9JSHkPSiIS0ZvLW8TloO1HKsVZmJ8cNmXV9bwfeUqzs"
    },
    {
      id: 3,
      name: "Bebaak Dress",
      description: "A dress that embodies courage and grace.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCc5CbqLRnnGmlMVJKZmFeZcQAv7AqHn4iI9OzVe-Mr2ztJrcZmIYzx8-mGAzWymxcKk-Vk5PNQ59GETqMwhP_8--RJhadbNLEWH3r6LGoMv7LN9bRlxJmDsGL6DQFw1_41UfXd3JrZn17ftxIJ40Jo3gyoqCiROR2gAlosLBfFYcees8lNTajoNXN1pYLy3UeK3ZWZ7Fk0aVwKHR3hbDB5_JrSbg_iuDs1DWZpyZRqNlpqu2boOZS23kTIMdY7nM4XTvRsvfABalw"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Animate title
      gsap.fromTo(titleRef.current, 
        {
          opacity: 0,
          y: 30
        },
        {
          opacity: 1,
          y: 0,
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

      // Animate cards with stagger
      const cards = cardsRef.current?.children;
      if (cards) {
        gsap.fromTo(cards,
          {
            opacity: 0,
            y: 50,
            scale: 0.9
          },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.6,
            ease: "power2.out",
            stagger: 0.2,
            scrollTrigger: {
              trigger: cardsRef.current,
              start: "top 85%",
              end: "bottom 20%",
              toggleActions: "play none none reverse"
            }
          }
        );
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} className="py-20 bg-soft-pink" id="styles">
      <div className="container mx-auto px-6">
        <h2 ref={titleRef} className="text-4xl font-bold text-center text-primary-orange mb-12">
          Signature Styles
        </h2>
        <div ref={cardsRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div 
              key={product.id}
              className="group bg-cream rounded-lg shadow-lg overflow-hidden transform hover:-translate-y-2 transition-transform duration-300"
            >
              <div 
                className="h-80 bg-cover bg-center" 
                style={{ backgroundImage: `url("${product.image}")` }}
              />
              <div className="p-6 text-center">
                <h3 className="text-2xl font-semibold text-dark-text">
                  {product.name}
                </h3>
                <p className="text-muted-text mt-2 mb-4">
                  {product.description}
                </p>
                <a 
                  className="inline-block px-5 py-2 text-sm font-bold text-primary-orange border border-primary-orange rounded-full hover:bg-primary-orange hover:text-white transition-colors" 
                  href="#"
                >
                  View Details
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Styles;