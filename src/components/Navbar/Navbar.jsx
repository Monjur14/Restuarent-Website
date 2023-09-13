import { GiHamburgerMenu } from 'react-icons/gi'
import { MdOutlineRestaurantMenu } from 'react-icons/md'
import './Navbar.css'
import gricht from '../../assets/gericht.png'
import { useState } from 'react'

const Navbar = () => {
  const [navtoggle, setNavtoggle] = useState(true)
  return (
    <nav className='navbar'>
        <div className="navbar__logo">
          <img src={gricht} alt="" />
        </div>
        <ul className="navbar__ul">
          <li className="p__opensans">
            <a href="#home">Home</a>
          </li>
          <li className="p__opensans">
            <a href="#about">About</a>
          </li>
          <li className="p__opensans">
            <a href="#menu">Menu</a>
          </li>
          <li className="p__opensans">
            <a href="#awards">Awards</a>
          </li>
          <li className="p__opensans">
            <a href="#contact">Contact</a>
          </li>
        </ul>
        <div className="navbar__login">
          <a href="#login" className="p__opensans">
            Log In / Register
          </a>
          <div></div>
          <a href="#book" className="p__opensans">
            Book Table
          </a>
        </div>
        <div className="navbar__small_screen">
           {navtoggle ? <GiHamburgerMenu className='overlay__open' color='#fff' fontSize={27} onClick={() => {setNavtoggle(false)}}/> : <><div className="navbar__small_screen_overlay flex__center slide-bottom">
          <MdOutlineRestaurantMenu className='overlay__close' color='#fff' fontSize={27} onClick={() => { setNavtoggle(true)} } />
          <ul className="navbar__ul_small_screen">
            <li className="p__cormorant" onClick={() => {setNavtoggle(true)}}>
              <a href="#home">Home</a>
            </li>
            <li className="p__cormorant" onClick={() => {setNavtoggle(true)}}>
              <a href="#about">About</a>
            </li>
            <li className="p__cormorant" onClick={() => {setNavtoggle(true)}}>
              <a href="#menu">Menu</a>
            </li>
            <li className="p__cormorant" onClick={() => {setNavtoggle(true)}}>
              <a href="#awards">Awards</a>
            </li>
            <li className="p__cormorant" onClick={() => {setNavtoggle(true)}}>
              <a href="#contact">Contact</a>
            </li>
            <li className="p__cormorant" onClick={() => {setNavtoggle(true)}}>
            <a href="#book">Book Table</a>
            </li>
          </ul>
        </div></> } 
        </div>
    </nav>
  );
}

export default Navbar
