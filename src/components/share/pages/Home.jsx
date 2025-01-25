import Navbar from "../Navbar"
import Hero from "../../Hero"
import Analytics from "../../Analytics"
import NewsLetter from "../../NewsLetter"
import Cards from "../Cards"
import Footer from "../../Footer"

function Home() {
  return (
    <div>
        <Navbar />
        <Hero />
        <Analytics />
        <NewsLetter/>
        <Cards />
        <Footer />
    </div>
  )
}

export default Home