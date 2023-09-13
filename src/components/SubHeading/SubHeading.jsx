import './SubHeading.css'
import spoon from '../../assets/spoon.svg'
const SubHeading = ({ title }) => {
  return (
    <div style={{ marginBottom: "2rem"}}>
      <p className='p__cormorant'>{title}</p>
      <img className="spoon__img" src={spoon} alt="" />
    </div>
  )
}

export default SubHeading