
import './App.css'
import About from './Sections/About/About'
import AreaOfPractices from './Sections/AreaOfPractices/AreaOfPractices'
import Subscribe from './Sections/Subscribe/Subscribe'
import Landing from './Sections/Landing/Landing'
import OurTeam from './Sections/OurTeam/OurTeam'
import Reviews from './Sections/Reviews/Reviews'
import Footer from './Sections/Footer/Footer'
import Faq from './Sections/Faq/Faq'

function App() {
  

  return (
    <div>
      <Landing />
      <About />
      <AreaOfPractices />
      <Reviews />
      <OurTeam />
      <Faq />
      <Subscribe />
      <Footer />
    </div>
  )
}

export default App
