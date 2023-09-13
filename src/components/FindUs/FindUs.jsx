import './FindUs.css'
import findus from "../../assets/findus.webp"
import SubHeading from '../SubHeading/SubHeading'
const FindUs = () => {
  return (
    <div className='app__wrapper app__bg section__padding'>
      <div className="left__content app__wrapper_info">
        <SubHeading title="Contact" />
        <h1 className='headtext__cormorant'>Find Us</h1>
        <p className='p__opensans first__p'>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
        <h3 className='p__cormorant h3tag'>Opening Hours</h3>
        <p className=' second__p'>Mon - Fri: 10:00 am - 02:00 am</p>
        <p className=' third__p'>Sat - Sun: 10:00 am - 03:00 am</p>
        <button className='custom__button'>Visit Us</button>
      </div>
      <div className="right__content app__wrapper_img">
        <img src={findus} alt="" />
      </div>
    </div>
  )
}

export default FindUs
