import './Item.css'
const Item = ({title, price, tags}) => {
  return (
    <div className="Item">
      <div className="upper__div">
        <div className="upper__div_title">
          <p className="p__cormorant" style={{color: "#dcca87"}}>{title}</p>
        </div>
        <div className="upper__div_price">
          <div className="empty"></div>
          <p className="p__cormorant">{price}</p>
        </div>
      </div>
      <div className="lower_div">
        <p className="p__opensans" style={{fontSize: "12px"}}>{tags}</p>
      </div>
    </div>
  );
}

export default Item
