import React from 'react';
import Header from './components/Header';
import Content from './components/Content';
import Image from './components/Image';
import GoodsCard from './components/GoodsCard';
import './App.css';

const goods = [
  { id: 1, name: "Zero One зі смаком печивa", price: "50 грн", img: "/images/bar1.png" },
  { id: 2, name: "Zero One малиновий чізкейк", price: "50 грн", img: "/images/bar2.png" },
  { id: 3, name: "Zero One арахісова паста", price: "50 грн", img: "/images/bar3.png" },
  { id: 4, name: "Zero One зі смаком кави", price: "50 грн", img: "/images/bar4.png" },
  { id: 5, name: "FitWin фісташка та крем", price: "65 грн", img: "/images/bar5.png" },
  { id: 6, name: "FitWin печиво з кремом", price: "65 грн", img: "/images/bar6.png" },
];

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Image />
      
      <h2 className="goods-title">Протеїнові батончики</h2>
      <div className="goods-gallery">
        {goods.map((item) => (
          <GoodsCard
            key={item.id}
            name={item.name}
            price={item.price}
            image={item.img}
          />
        ))}
      </div>
    </div>
  );
}

export default App;