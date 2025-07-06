const Instagram = () => {
  const instagramImages = [
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCcAQKrMSR-7ZXrklkME7VXWTqAaBUrdRN8TO0r09woxSgD-Nys2ZznIieR1rwUsDht0qUkmh4xLJegIywW_9duchrcj8NWCv7Lhx6p97VOXGsJktipg3rLhMb-mjy3C4lSIWY8OrIz-qwtivCVDIH8H1A-ahDHQXSPGd-0WtD1fAxFwAx8IUxchuS536tI9lU7ttckjUMyWbNEwM6PXvk8SkEFgcM5T2rvKcxWbVlBso11HN8D0RpuG1WGjVLsxIrM6oIHb9x8sMg",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuAU3KzDB9EAC365VScLLqaP5i_AtCq6SdnDCla-SQVBjvts6oo9Z5tluoD67XDU79s4eVrZMi2CGZ1oQrFRM3jAOgO11Ur1JJETiS0rQHxpFOhMhDrC_Hjb1_FhRxhzL1eiLI0PIJiyHJYcPYyNNyAATNckzGMGsdYNejid0Nb8nm2-17t6ylQIGOa1XDfP355_gaxrNCmWi6u2LpQVStnWxPecgetWS56Y546gwvZZnePcloXVooK9xuKhisc7c209CRTqtL2Sz8w",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuDxji8oWFSf3d3yuqBX-RIktBWVT6CwlPOpnfAnk4vIpCMfhmX7FyIGMCN86NlaJtbaja-7eDyWzzMyvbZY7166qnOV1fsqvbFJAQgFqSNQSMuPPoLs8-829JIWhqeiOxGzLh_g3Er7jmUpg8n8W0dZPadZIT3CBVH3AnSMFnNA3dhTDEwKO2RPAFC_ZojGqswQ7RBozXEADY9afj96k9IubCyLsUB66UGZYKW21BZrqCb_OZXPiV8rI_LUj3NAYk2C_O4hVfoLDeA",
    "https://lh3.googleusercontent.com/aida-public/AB6AXuCejyImZF13esXI-AaK9rkYf2xa0h5N3CgRnFrvoW6tTkfDPSu_x7QBQqeHdyymiXHdX_qVz0nhHqavEinfWJlfU-zw1JYj3gtekFOTJNw_k0FZnjbQhycmCD8eNKWaAXj1SuiCC84hj6YRJW2WTHWjyRlKU7gNeh1c33tkFyoDDl9mWTE8gNNLEmKD78fEaUPlkBq4XdrdkWNbUGbmymj0dpKm5r009AaXRZZE8HbYKg6GPnFYyw1G4RVobBN87mp3Z3fXjqXMsGQ"
  ];

  return (
    <section className="py-20 bg-cream" id="instagram">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold text-primary-orange mb-8">
          Follow Our Journey{' '}
          <a className="text-primary-orange hover:underline" href="#" target="_blank" rel="noopener noreferrer">
            @odokri
          </a>
        </h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {instagramImages.map((image, index) => (
            <a 
              key={index}
              className="block group relative overflow-hidden rounded-lg" 
              href="#"
              target="_blank"
              rel="noopener noreferrer"
            >
              <div 
                className="bg-cover bg-center aspect-square transition-transform duration-300 group-hover:scale-110" 
                style={{ backgroundImage: `url("${image}")` }}
              />
              <div className="absolute inset-0 bg-black/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <svg 
                  fill="white" 
                  height="32" 
                  viewBox="0 0 24 24" 
                  width="32" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M7.8,2H16.2C19.4,2 22,4.6 22,7.8V16.2A5.2,5.2 0 0,1 16.2,21.4H7.8C4.6,21.4 2,18.8 2,15.6V7.8C2,4.6 4.6,2 7.8,2M7.6,4A3.6,3.6 0 0,0 4,7.6V16.4C4,18.39 5.61,20 7.6,20H16.4A3.6,3.6 0 0,0 20,16.4V7.6C20,5.61 18.39,4 16.4,4H7.6M17.25,5.5A1.25,1.25 0 0,1 18.5,6.75A1.25,1.25 0 0,1 17.25,8A1.25,1.25 0 0,1 16,6.75A1.25,1.25 0 0,1 17.25,5.5M12,7A5,5 0 0,1 17,12A5,5 0 0,1 12,17A5,5 0 0,1 7,12A5,5 0 0,1 12,7M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9Z" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Instagram;