import Home from "./pages/Home"
import About from "./pages/About"
import Skills from "./pages/Skills"
import Contact from "./pages/Contact"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import { BrowserRouter } from "react-router-dom"



function App() {

  return (
        <BrowserRouter>
            <Navbar />
            <div className="bg-[#00171f] h-auto text-white px-4 sm:px-8 lg:px-32">
                  <Home />
                  <About />
                  <Skills />
                  <Contact />
            <Footer />
            </div>
        </BrowserRouter>
  )
}

export default App
