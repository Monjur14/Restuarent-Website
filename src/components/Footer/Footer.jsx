import SubHeading from '../SubHeading/SubHeading'
import './Footer.css'
import logo from "../../assets/gericht.png"
import spoon from '../../assets/spoon.png'
import {FaFacebookF} from 'react-icons/fa'
import {AiOutlineTwitter} from "react-icons/ai"
import {AiFillInstagram} from "react-icons/ai"

const Footer = () => {
  return (
    <div className='app__bg footer' id='contact'>
      <div className="contact">
        <SubHeading title="Newsletter"/>
        <h1 className='headtext__cormorant'>Subscribe to Our Newsletter</h1>
        <p className="p__opensans">And never miss latest Updates!</p>
        <div className="input__div">
            <input type="text" placeholder='Email Address'/>
            <button className='custom__button'>Subscribe</button>
        </div>
      </div>
      <div className="footer__container">
        <div className="footer__content">
            <h1>Contact Us</h1>
            <p className='p__opensans'>9 W 53rd St, New York, NY 10019, USA</p>
            <p className='p__opensans'>+1 212-344-1230</p>
            <p className='p__opensans'>+1 212-555-1230</p>
        </div>
        <div className="footer__content">
            <img src={logo} alt="" />
            <p className='p__opensans'> "The best way to find yourself is to lose yourself in the service of others.”</p>
            <img src={spoon} alt="" />
            <div className="icons">
                <FaFacebookF/>
                <AiOutlineTwitter/>
                <AiFillInstagram/>
            </div>
        </div>
        <div className="footer__content">
            <h1>Working Hours</h1>
            <p className='p__opensans'>Monday-Friday:</p>
            <p className='p__opensans'>08:00 am -12:00 am</p>
            <p className='p__opensans'>Saturday-Sunday:</p>
            <p className='p__opensans'>07:00am -11:00 pm</p>
        </div>
      </div>
      <div className="footer__credit">
        <p className='p__opensans'>&copy; 2023 GERICHT | Developed by Monjur Hossen</p>
      </div>
    </div>
  )
}

export default Footer
