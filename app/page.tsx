import Header from "./components/layout/header"
import Hero from "./components/sections/hero"
import About from "./components/sections/about"
import Portfolio from "./components/sections/portfolio"
import Owners from "./components/sections/owners"
import Contact from "./components/sections/contact"
import Footer from "./components/layout/footer"
import DomeGallery from './components/interactive/DomeGallery';
import CircularGallery from './components/interactive/CircularGallery'

export default function Home() {
  return (
    <div className="w-full overflow-x-hidden">
      <main className="min-h-screen bg-background">
        <Header />
        <Hero />
        <About />
        <div className="h-[600px] relative w-full mb-20">
          <CircularGallery bend={2} textColor="#ffffff" borderRadius={0.25} scrollEase={0.02} />
        </div>
        <Portfolio />
        <div className="w-full h-auto md:h-[48vh] xl:h-[120vh]">
          <DomeGallery />
        </div>
        <Owners />
        <Contact />
        <Footer />
      </main>
    </div>
  )
}