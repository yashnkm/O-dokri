import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Story from './components/Story/Story'
import Styles from './components/Styles/Styles'
import Community from './components/Community/Community'
import Newsletter from './components/Newsletter/Newsletter'
import Instagram from './components/Instagram/Instagram'
import Footer from './components/Footer/Footer'

// Traditional Divider Component
const TraditionalDivider = ({ variant = "paisley" }: { variant?: "paisley" | "mandala" | "geometric" }) => {
  const patterns = {
    paisley: (
      <div className="flex justify-center items-center space-x-4">
        <div className="w-8 h-8">
          <svg viewBox="0 0 100 100" className="w-full h-full text-primary-orange">
            <path d="M30,50 C30,30 40,20 60,20 C80,20 90,30 90,50 C90,70 80,80 60,80 C50,80 40,75 35,65 C32,60 30,55 30,50 Z" fill="currentColor"/>
          </svg>
        </div>
        <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-primary-orange to-transparent"></div>
        <div className="w-12 h-12">
          <svg viewBox="0 0 100 100" className="w-full h-full text-vintage-brown">
            <circle cx="50" cy="50" r="25" fill="none" stroke="currentColor" strokeWidth="2"/>
            <circle cx="50" cy="50" r="15" fill="none" stroke="currentColor" strokeWidth="2"/>
            <circle cx="50" cy="50" r="5" fill="currentColor"/>
            {Array.from({ length: 8 }, (_, i) => (
              <line
                key={i}
                x1="50"
                y1="50"
                x2={50 + 15 * Math.cos(i * Math.PI / 4)}
                y2={50 + 15 * Math.sin(i * Math.PI / 4)}
                stroke="currentColor"
                strokeWidth="1"
              />
            ))}
          </svg>
        </div>
        <div className="w-32 h-[2px] bg-gradient-to-r from-transparent via-primary-orange to-transparent"></div>
        <div className="w-8 h-8">
          <svg viewBox="0 0 100 100" className="w-full h-full text-primary-orange">
            <path d="M30,50 C30,30 40,20 60,20 C80,20 90,30 90,50 C90,70 80,80 60,80 C50,80 40,75 35,65 C32,60 30,55 30,50 Z" fill="currentColor"/>
          </svg>
        </div>
      </div>
    ),
    mandala: (
      <div className="flex justify-center items-center">
        <div className="w-16 h-16">
          <svg viewBox="0 0 100 100" className="w-full h-full text-primary-orange">
            <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="1"/>
            <circle cx="50" cy="50" r="20" fill="none" stroke="currentColor" strokeWidth="1"/>
            <circle cx="50" cy="50" r="10" fill="none" stroke="currentColor" strokeWidth="2"/>
            <circle cx="50" cy="50" r="3" fill="currentColor"/>
            {Array.from({ length: 12 }, (_, i) => (
              <line
                key={i}
                x1="50"
                y1="50"
                x2={50 + 30 * Math.cos(i * Math.PI / 6)}
                y2={50 + 30 * Math.sin(i * Math.PI / 6)}
                stroke="currentColor"
                strokeWidth="1"
              />
            ))}
          </svg>
        </div>
      </div>
    ),
    geometric: (
      <div className="flex justify-center items-center space-x-2">
        <div className="w-6 h-6 bg-primary-orange transform rotate-45"></div>
        <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-vintage-brown to-transparent"></div>
        <div className="w-8 h-8 border-2 border-primary-orange transform rotate-45"></div>
        <div className="w-20 h-[1px] bg-gradient-to-r from-transparent via-vintage-brown to-transparent"></div>
        <div className="w-6 h-6 bg-primary-orange transform rotate-45"></div>
      </div>
    )
  };

  return (
    <div className="flex justify-center py-8 px-4">
      {patterns[variant]}
    </div>
  );
};

function App() {
  return (
    <div className="relative flex size-full min-h-screen flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <main className="flex-1">
          <Hero />
          <TraditionalDivider variant="paisley" />
          <Story />
          <TraditionalDivider variant="mandala" />
          <Styles />
          <TraditionalDivider variant="geometric" />
          <Community />
          <TraditionalDivider variant="paisley" />
          <Newsletter />
          <TraditionalDivider variant="mandala" />
          <Instagram />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App