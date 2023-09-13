import './MenuItem.css'
import menu from '../../assets/menu.webp'
import data from '../../data'
import SubHeading from '../SubHeading/SubHeading'
import Item from '../Item/Item'


const  MenuItem = () => {
  return (
    <div className='section__padding menuItem flex__center menuItem' id='menu'>
      <div className="menuItem__title">
        <SubHeading title="Menu that fits you palatte" />
        <h1 className='headtext__cormorant'>Today’s Special</h1>
      </div>
      <div className="menuItem__content">
        <div className="menuItem__content_left">
            <div className='menuItem__content_left_title'>
                <p className='p__cormorant'>Wine & Bear</p>
            </div>
            <div className="menuItem__content_left_item">
            {data.wines.map((wine, index) => (
                <Item key={index} title={wine.title} price={wine.price} tags={wine.tags} />
            ))}
            </div>
        </div>
        <div className="menuItem__content_img">
            <img src={menu} alt="" />
        </div>
        <div className="menuItem__content_right">
        <div className='menuItem__content_right_title'>
                <p className='p__cormorant'>Cocktails</p>
            </div>
            <div className="menuItem__content_right_item">
                {data.cocktails.map((cocktails, index) => (
                    <Item key={index} title={cocktails.title} price={cocktails.price} tags={cocktails.tags} />
                ))}
            </div>
        </div>
      </div>
        <div className='menuItem__button'>
            <button className='custom__button'>View More</button>
        </div>
    </div>
  )
}

export default MenuItem
