const Footer = () => {
  return (
    <footer className="bg-soft-pink py-12 relative overflow-hidden" id="contact">
      {/* Subtle Rajasthani Pattern Background */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-4 left-1/4 w-8 h-8">
          <svg viewBox="0 0 100 100" className="w-full h-full text-primary-orange">
            <path d="M30,50 C30,30 40,20 60,20 C80,20 90,30 90,50 C90,70 80,80 60,80 C50,80 40,75 35,65 C32,60 30,55 30,50 Z" fill="currentColor"/>
          </svg>
        </div>
        <div className="absolute bottom-6 right-1/3 w-6 h-6">
          <svg viewBox="0 0 100 100" className="w-full h-full text-vintage-brown">
            <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="3"/>
            <circle cx="50" cy="50" r="8" fill="currentColor"/>
          </svg>
        </div>
      </div>
      <div className="container mx-auto px-6 text-center relative z-10">
        <h3 className="text-2xl font-bold text-primary-orange mb-4">
          O'Dokri
        </h3>
        
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 mb-6">
          <a 
            className="text-muted-text hover:text-primary-orange transition-colors" 
            href="#story"
          >
            About
          </a>
          <a 
            className="text-muted-text hover:text-primary-orange transition-colors" 
            href="#contact"
          >
            Contact
          </a>
          <a 
            className="text-muted-text hover:text-primary-orange transition-colors" 
            href="#instagram"
          >
            Instagram
          </a>
        </div>
        
        <p className="text-muted-text text-sm">
          © 2024 O'Dokri. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;