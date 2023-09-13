import SubHeading from '../SubHeading/SubHeading'
import './Photos.css'
import photo1 from '../../assets/gallery01.webp'
import photo2 from '../../assets/gallery02.webp'
import photo3 from '../../assets/gallery03.webp'
import photo4 from '../../assets/gallery04.webp'
import {AiOutlineArrowLeft} from 'react-icons/ai'
import {AiOutlineArrowRight} from "react-icons/ai"
import {BiLogoInstagram} from "react-icons/bi"
import { useRef } from 'react'
import React from 'react'

const Photos = () => {
  const scrollRef = React.useRef(null);
  const scroll = (direction) => {
    const {current} = scrollRef;
    if(direction === "left"){
      current.scrollLeft -= 300;
    }else{
      current.scrollLeft += 300;
    }
  }
  return (
    <div className='photos section__padding'>
      <div className="left__content">
        <SubHeading title="Instagram"/>
        <h1 className='headtext__cormorant'>Photo Gallery</h1>
        <p className="p__opensans extra__p">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat mattis ipsum turpis elit elit scelerisque egestas mu.</p>
        <button className='custom__button'>View More</button>
      </div>
      <div className="right__content" ref={scrollRef}>
      {/* <div className="arrow__icons">
          <span onClick={() => scroll("left")}>
            <AiOutlineArrowLeft className='arrow__left' />
          </span>
          
          <span onClick={() => scroll("right")}>
          <AiOutlineArrowRight className='arrow__right' />
          </span>
        </div> */}
        <div className="photo__img_container">
            <img src={photo1} alt="" />
            <div className="overlay">
              <BiLogoInstagram className='insta'/>
            </div>
        </div>
        <div className="photo__img_container">
            <img src={photo2} alt="" />
            <div className="overlay">
            <BiLogoInstagram className='insta'/>
            </div>
        </div>
        <div className="photo__img_container">
            <img src={photo3} alt="" />
            <div className="overlay">
            <BiLogoInstagram className='insta'/>
            </div>
        </div>
        <div className="photo__img_container">
            <img src={photo4} alt="" />
            <div className="overlay">
            <BiLogoInstagram className='insta'/>
            </div>
        </div>
        
      </div>
    </div>
  )
}

export default Photos
