import { Spaceship } from "./components/Spaceship"
import { Experience } from "./components/Experience"
import { FeatureSection } from "./components/FeatureSection"
import { Hero } from "./components/Hero"
import { Navbar } from "./components/Navbar"
import { Testimonials } from "./components/Testimonials"
import { Footer } from "./components/Footer"

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <FeatureSection />
        <Experience />
        <Spaceship />
        <Testimonials />
        <Footer />
      </div>

    </>
  )
}

export default App
