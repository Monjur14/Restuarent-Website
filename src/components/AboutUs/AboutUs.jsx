import './AboutUs.css'
import g from '../../assets/G.png'
import knife from '../../assets/knife.webp'
import spoon from '../../assets/spoon.png'

const AboutUs = () => {
  return (
    <div className='app__bg app__wrapper aboutus' id='about'>
      <div className='app__aboutus_overlay flex__center'>
        <img src={g} alt="g image" />
      </div>
      <div className='aboutus__content section__padding'>
        <div className='aboutus__content_left'>
            <h1 className='headtext__cormorant'>About Us</h1>
            <img src={spoon} alt="spoon image" className='reverse-image'/>
            <p className='p__opensans second__p second__p_left'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra adipiscing ultrices vulputate posuere tristique. In sed odio nec aliquet eu proin mauris et.</p>
            <button className='custom__button'>Know More</button>
        </div>
        <div className='aboutus__content_img'>
            <img src={knife} alt="knife image" className='aboutus__knife'/>
        </div>
        <div className='aboutus__content_right'>
            <h1 className='headtext__cormorant'>Our History</h1>
            <img src={spoon} alt="spoon image" />
            <p className='p__opensans second__p '>Adipiscing tempus ullamcorper lobortis odio tellus arcu volutpat. Risus placerat morbi volutpat habitasse interdum mi aliquam In sed odio nec aliquet.</p>
            <button className='custom__button'>Know More</button>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
