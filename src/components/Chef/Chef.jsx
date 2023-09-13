import './Chef.css'
import chef from "../../assets/chef.webp"
import quote from '../../assets/quote.png'
import SubHeading from '../SubHeading/SubHeading'
import sign from '../../assets/sign.png'

const Chef = () => {
  return (
    <div className='section__padding app__wrapper chef app__bg'>
        <div className='app__wrapper_img chef__img'>
            <img src={chef} alt="" />
        </div>
        <div className='app__wrapper_info chef__info'>
            <div className="chef__info_top">
                <SubHeading title="Chef's Word" />
                <h1 className='headtext__cormorant'>What we believe in</h1>
            </div>
            <div className="chef__info__second">
                <div className="inner__div">
                    <img src={quote} alt="" />
                    <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur adipiscing elit auctor sit </p>
                </div>
                <p className='p__opensans extra__p'>auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit. Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu. Congue iaculis integer curabitur semper sit nunc.</p>
            </div>
            <div className='extra__div'>
                <div className="chef__info_third">
                <h1 className='p__cormorant'>Kevin Luo</h1>
                <p className='p__opensans'>Chef & Founder</p>
            </div>
            <div className="chef__info_last">
                <img src={sign} alt="" />
            </div>
            </div>
            
        </div>
    </div>
  )
}

export default Chef
