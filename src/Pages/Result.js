import React from "react";
import "../styles/Result.scss";
import axios from "axios";
import heart from "../heart.svg";
const Result = () => {
  const [items, setItems] = React.useState([]);
  React.useEffect(() => {
    async function fetchItems() {
      const res = await axios.get("./products.json");
      setItems(res.data);
    }
    fetchItems();
  }, []);
  return (
    <div className='Result'>
      <div className='Result_head'>
        <h1 className='Result_head_title'>Результат</h1>
        <p className='Result_head_description'>Мы подобрали для вас наиболее подходящие средства</p>
      </div>
      <div className='Result_body'>
        {items &&
          items.map((item) => {
            return (
              <div className='Result_body_singleItem' key={item.id}>
                <div
                  className='Result_body_singleItem_image'
                  style={{
                    background: `url(${item.image})`,
                    backgroundSize: "contain",
                    backgroundRepeat: "no-repeat",
                    backgroundPosition: "center",
                  }}>
                  <img className='Result_body_singleItem_like' src={heart} alt='like' />
                </div>
                <p className='Result_body_singleItem_name'>{item.title}</p>
                <div className='Result_body_singleItem_prices'>
                  <del
                    style={item.oldPrice && { marginRight: "15px" }}
                    className='Result_body_singleItem_prices_old'>
                    {item.oldPrice ? item.oldPrice.toFixed(2) : null}
                  </del>
                  <p className='Result_body_singleItem_prices_new'>{item.price.toFixed(2)} руб.</p>
                </div>
              </div>
            );
          })}
      </div>
      <div className='Result_pagination'>
        <p className='Result_pagination_page current'>1</p>
        <p className='Result_pagination_page'>2</p>
        <p className='Result_pagination_page'>3</p>
        <p className='Result_pagination_page' style={{ cursor: "default" }}>
          ...
        </p>
        <p className='Result_pagination_page'>13</p>
      </div>
    </div>
  );
};

export default Result;
