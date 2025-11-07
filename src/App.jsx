import Hero from './Components/Hero/Hero'
import Featured from './Components/Featured/Featured'
import Navbar from './Components/Navbar/navbar'
import Categories from './Components/Categories/Categories'
import Catalog from './Components/Catalog/Catalog'
import Partner from './Components/Partner/Partner'
import Story from './Components/Stories/Story'
import Cta from './Components/CTA/Cta'
import Footer from './Components/Footer/Footer'
import "./index.css"

function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      <Featured/>
      <Categories/>
      <Catalog/>
      <Partner/>
      <Story/>
      <Cta/>
      <Footer/>
    </>
  )
}

export default App
