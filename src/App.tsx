import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Story from './components/Story/Story'
import Styles from './components/Styles/Styles'
import Community from './components/Community/Community'
import Newsletter from './components/Newsletter/Newsletter'
import Instagram from './components/Instagram/Instagram'
import Footer from './components/Footer/Footer'

function App() {
  return (
    <div className="relative flex size-full min-h-screen flex-col group/design-root overflow-x-hidden">
      <div className="layout-container flex h-full grow flex-col">
        <Header />
        <main className="flex-1">
          <Hero />
          <Story />
          <Styles />
          <Community />
          <Newsletter />
          <Instagram />
        </main>
        <Footer />
      </div>
    </div>
  )
}

export default App