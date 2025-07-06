const Hero = () => {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-[calc(100vh-80px)] bg-soft-pink overflow-hidden">
      
      {/* Animated Rajasthani Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Floating Paisley Patterns */}
        <div className="absolute top-1/4 left-10 w-20 h-20 opacity-20 animate-pulse">
          <svg viewBox="0 0 100 100" className="w-full h-full text-vintage-brown animate-spin" style={{ animationDuration: '20s' }}>
            <path d="M30,50 C30,30 40,20 60,20 C80,20 90,30 90,50 C90,70 80,80 60,80 C50,80 40,75 35,65 C32,60 30,55 30,50 Z" fill="currentColor"/>
          </svg>
        </div>

        {/* Mandala Pattern */}
        <div className="absolute top-16 right-20 w-24 h-24 opacity-15 animate-bounce" style={{ animationDuration: '4s' }}>
          <svg viewBox="0 0 100 100" className="w-full h-full text-primary-orange animate-spin" style={{ animationDuration: '15s' }}>
            <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="2"/>
            <circle cx="50" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="1"/>
            <circle cx="50" cy="50" r="3" fill="currentColor"/>
            {Array.from({ length: 8 }, (_, i) => (
              <line
                key={i}
                x1="50"
                y1="50"
                x2={50 + 20 * Math.cos(i * Math.PI / 4)}
                y2={50 + 20 * Math.sin(i * Math.PI / 4)}
                stroke="currentColor"
                strokeWidth="1"
              />
            ))}
          </svg>
        </div>

        {/* Traditional Block Print */}
        <div className="absolute bottom-20 left-16 w-16 h-16 opacity-25 animate-pulse" style={{ animationDelay: '1s' }}>
          <svg viewBox="0 0 100 100" className="w-full h-full text-muted-text animate-spin" style={{ animationDuration: '25s' }}>
            <rect x="20" y="20" width="60" height="60" fill="none" stroke="currentColor" strokeWidth="3"/>
            <rect x="35" y="35" width="30" height="30" fill="none" stroke="currentColor" strokeWidth="2"/>
            <circle cx="50" cy="50" r="8" fill="currentColor"/>
          </svg>
        </div>

        {/* Henna Pattern */}
        <div className="absolute bottom-32 right-12 w-18 h-18 opacity-20 animate-bounce" style={{ animationDuration: '3s', animationDelay: '0.5s' }}>
          <svg viewBox="0 0 100 100" className="w-full h-full text-vintage-brown animate-spin" style={{ animationDuration: '30s' }}>
            <path d="M50,20 Q60,30 50,40 Q40,30 50,20 M50,60 Q60,70 50,80 Q40,70 50,60 M30,50 Q40,60 50,50 Q40,40 30,50 M70,50 Q80,60 70,70 Q60,60 70,50" fill="currentColor"/>
          </svg>
        </div>

        {/* Small Floating Dots */}
        <div className="absolute top-20 left-1/3 w-3 h-3 bg-primary-orange opacity-30 rounded-full animate-ping" style={{ animationDelay: '2s' }}></div>
        <div className="absolute top-40 right-1/3 w-2 h-2 bg-vintage-brown opacity-40 rounded-full animate-ping" style={{ animationDelay: '1s' }}></div>
        <div className="absolute bottom-40 left-1/4 w-4 h-4 bg-muted-text opacity-25 rounded-full animate-ping" style={{ animationDelay: '3s' }}></div>

        {/* Rajasthani Border Pattern */}
        <div className="absolute top-8 left-1/2 transform -translate-x-1/2 w-32 h-4 opacity-15">
          <svg viewBox="0 0 100 10" className="w-full h-full text-primary-orange">
            <path d="M10,5 Q15,2 20,5 Q25,8 30,5 Q35,2 40,5 Q45,8 50,5 Q55,2 60,5 Q65,8 70,5 Q75,2 80,5 Q85,8 90,5" 
                  fill="none" stroke="currentColor" strokeWidth="1"/>
          </svg>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center p-6 space-y-6">
        <h1 className="font-kristi text-8xl md:text-9xl font-normal text-primary-orange">
          O'Dokri
        </h1>
        <p className="text-lg md:text-xl text-muted-text font-medium tracking-wide">
          "Kapdo ka toh bahana hai, asli maksad yaadon ko pehnana hai"
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
          <a 
            className="flex min-w-[180px] cursor-pointer items-center justify-center rounded-full h-12 px-6 bg-primary-orange text-white text-base font-bold tracking-wide shadow-lg transition-transform transform hover:scale-105" 
            href="#styles"
          >
            <span>Explore the Collection</span>
          </a>
          <a 
            className="flex min-w-[180px] cursor-pointer items-center justify-center rounded-full h-12 px-6 bg-cream text-dark-text text-base font-bold tracking-wide shadow-lg transition-transform transform hover:scale-105" 
            href="#signup"
          >
            <span>Join The Dokri Club</span>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;