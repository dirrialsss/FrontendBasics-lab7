import React from 'react';
import './GoodsCard.css';

function GoodsCard({ name, price, image }) {
  return (
    <div className="goods-card">
      <div className="goods-image-container">
        <img src={image} alt={name} className="goods-image" />
      </div>
      <h3 className="goods-name">{name}</h3>
      <p className="goods-price">{price}</p>
      <button className="add-to-cart">Додати в кошик</button>
    </div>
  );
}

export default GoodsCard;