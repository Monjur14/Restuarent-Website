import './Awards.css'
import data from '../../data'
import laurels from '../../assets/laurels.webp'
import SubHeading from '../SubHeading/SubHeading'
import Laurels from '../Laurels/Laurels'
import awards1 from '../../assets/award01.png'
import awards2 from '../../assets/award02.png'
import awards3 from '../../assets/award03.png'
import awards4 from '../../assets/award05.png'

const Awards = () => {
  return (
    <div className="app__wrapper app__bg awards section__padding" id='awards'>
      <div className='extra__div'>
      <div className="app__wrapper_info first__section">
          <SubHeading title="Awards & recognition"/>
          <h1 className='headtext__cormorant'>Our Laurels</h1>
      </div>
      <div className="awards__list">
        <div className="awards__item">
          <div className="awards__img">
            <img src={awards1} alt="" />
          </div>
          <div className="awards__info">
            <p className='p__cormorant'>Bib Gourmond</p>
            <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur.</p>
          </div>
        </div>
        <div className="awards__item">
          <div className="awards__img">
            <img src={awards2} alt="" />
          </div>
          <div className="awards__info">
            <p className='p__cormorant'>Rising Star</p>
            <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur.</p>
          </div>
        </div>
        <div className="awards__item">
          <div className="awards__img">
            <img src={awards3} alt="" />
          </div>
          <div className="awards__info">
            <p className='p__cormorant'>AA Hospitality</p>
            <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur.</p>
          </div>
        </div>
        <div className="awards__item">
          <div className="awards__img">
            <img src={awards4} alt="" />
          </div>
          <div className="awards__info">
            <p className='p__cormorant'>Outstanding Chef</p>
            <p className='p__opensans'>Lorem ipsum dolor sit amet, consectetur.</p>
          </div>
        </div>
      </div>
      </div>

      <div className="app__wrapper_img">
          <img src={laurels} alt="" />
      </div>
    </div>
  )
}

export default Awards
