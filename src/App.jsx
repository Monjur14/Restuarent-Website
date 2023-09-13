import Headroom from 'react-headroom'
import './App.css'
import AboutUs from './components/AboutUs/AboutUs'
import Awards from './components/Award/Awards'
import Chef from './components/Chef/Chef'
import FindUs from './components/FindUs/FindUs'
import Footer from './components/Footer/Footer'
import Header from './components/Header/Header'
import Intro from './components/Intro/Intro'
import MenuItem from './components/MenuItem/MenuItem'
import Navbar from './components/Navbar/Navbar'
import Photos from './components/Photos/Photos'

function App() {

  return (
    <>
      <Headroom>
        <Navbar/>
      </Headroom>
      <Header/>
      <AboutUs/>
      <MenuItem/>
      <Chef/>
      <Intro/>
      <Awards/>
      <Photos/>
      <FindUs/>
      <Footer/>
    </>
  )
}

export default App
