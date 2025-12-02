import React, { useState, useRef } from 'react';
import './Image.css';

function Image() {
  const [imageVisible, setImageVisible] = useState(true);
  const [imageSize, setImageSize] = useState(550);
  const imageRef = useRef(null);
  const [imgExists, setImgExists] = useState(true);

  const handleAddImg = () => {
    if (!imgExists) {
      setImgExists(true);
      setImageVisible(true);
      setImageSize(550);
    } else {
      alert("❗Зображення вже додано!");
    }
  };

  const handleZoomIn = () => {
    if (imageSize < 1500) {
      setImageSize(prev => prev * 1.1);
    }
  };

  const handleZoomOut = () => {
    if (imageSize > 100) {
      setImageSize(prev => prev * 0.9);
    }
  };

  const handleDeleteImg = () => {
    setImageVisible(false);
    setImgExists(false);
  };

  return (
    <div className="image-section">
      <h3>Улюблене місто:</h3>
      <p>
        Мюнхен - це столиця Баварії, однієї з найбільших і найзаможніших федеральних земель Німеччини. 
        Це місто вражає своєю історичною архітектурою, яка гармонійно поєднується з сучасними будівлями та інфраструктурою. 
        Крім того, Мюнхен є батьківщиною відомого пивного фестивалю Октоберфест, який щорічно збирає мільйони відвідувачів з усього світу. 
        Тут можна насолодитися традиційною баварською кухнею, затишною атмосферою пивних садів та веселою музикою.
      </p>
      
      {imageVisible && imgExists && (
        <a href="https://www.muenchen.de/en/home" target="_blank" rel="noopener noreferrer">
          <img 
            ref={imageRef}
            src="images/munich.jpg" 
            alt="Munich" 
            className="munich-photo"
            style={{ 
              width: `${imageSize}px`, 
              height: `${imageSize * 400/550}px` 
            }}
          />
        </a>
      )}

      <div className="buttons">
        <button id="addImg" onClick={handleAddImg}>Додати</button>
        <button id="zoomIn" onClick={handleZoomIn}>Збільшити</button>
        <button id="zoomOut" onClick={handleZoomOut}>Зменшити</button>
        <button id="deleteImg" onClick={handleDeleteImg}>Видалити</button>
      </div>
    </div>
  );
}

export default Image;