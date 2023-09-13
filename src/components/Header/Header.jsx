import './Header.css'
import welcome from '../../assets/welcome.webp'
import SubHeading from '../SubHeading/SubHeading'

const Header = () => {
  return (
    <div className='section__padding app__wrapper' style={{
        backgroundColor: "var(--color-black)"
    }} id='home'>
      <div className='app__wrapper_info'>
        <SubHeading title="Chase the new Flavour"/>
        <h1 className='first__h1'>The key to Fine Dining</h1>
        <p className='p__opensans first__p'>Sit tellus lobortis sed senectus vivamus molestie. Condimentum volutpat morbi facilisis quam scelerisque sapien. Et, penatibus aliquam amet tellus </p>
        <button className='custom__button'>Explore</button>
      </div>
      <div className='app__wrapper_img'>
        <img src={welcome} alt="" />
      </div>
    </div>
  )
}

export default Header
