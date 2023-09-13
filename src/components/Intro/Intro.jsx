import './Intro.css'
import {BsPlayFill} from 'react-icons/bs'
import {BsPauseFill} from "react-icons/bs"
import video from "../../assets/meal.mp4"
import { useRef, useState } from 'react'

const Intro = () => {
    const divRef = useRef();
    const [play, setPlay] = useState(true)
    const handle = () => {
        setPlay((prev) => !prev)

        if(play==true){
            divRef.current.play()
        }else{
            divRef.current.pause()
        }
    }

  return (
    <div className='app__wrapper_two intro'>
      <div className="video">
        <video
        ref={divRef}
        src={video}
        controls={false}
        type="video/mp4"
        loop
        ></video>
      </div>
      <div className="play_pause">
           <div onClick={handle}>{play ? <span><BsPlayFill color='#fff'className='icon'/></span>: <span><BsPauseFill color='#fff' className='icon'/></span>}</div>
      </div>
    </div>
  )
}

export default Intro
