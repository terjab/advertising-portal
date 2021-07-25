import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import style from './Ad.module.scss';

// const img = 'https://picsum.photos/200/300';

export const Ad = ({ children, img, price, title, category, id }) => {
  const [click, setClick] = useState(0);
  const history = useHistory();

  const adClicked = () => {
    setClick(click + 1);
    history.push(`${category}/${id}`);
  }

  return (
    <button className={style.ad} onClick={() => adClicked()}>
      <div className={style.container}>
        <img src={img} alt="Ad" className={style.img} />
      </div>
      <div className={style.title}>{title}</div>
      <div className={style.text}>{children}</div>
      <div className={style.price}>{price} Kč</div>
    </button>
  )
}