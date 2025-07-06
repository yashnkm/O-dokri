const Footer = () => {
  return (
    <footer className="bg-soft-pink py-12" id="contact">
      <div className="container mx-auto px-6 text-center">
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