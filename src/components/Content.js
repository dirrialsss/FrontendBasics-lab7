import React, { Component } from 'react';
import './Content.css';

class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      hobby2Color: { bg: '#dec9c9', text: '#000' },
      hobby3Color: { bg: '#dec9c9', text: '#000' },
      hobby2Clicked: false,
      hobby3Clicked: false
    };
  }

  getRandomColor = () => {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  toggleColorsHobby2 = () => {
    const bgColor = this.getRandomColor();
    const textColor = this.getRandomColor();
    this.setState({
      hobby2Color: { bg: bgColor, text: textColor },
      hobby2Clicked: !this.state.hobby2Clicked
    });
  };

  toggleColorsHobby3 = () => {
    const bgColor = this.getRandomColor();
    const textColor = this.getRandomColor();
    this.setState({
      hobby3Color: { bg: bgColor, text: textColor },
      hobby3Clicked: !this.state.hobby3Clicked
    });
  };

  render() {
    const { hobby2Color, hobby3Color } = this.state;
    
    return (
      <div className="content">
        {/* <h2>Сюкало Діана Сергіївна</h2> */}
        <p>Дата і місце народження: 8 листопада 2005 року, м. Черкаси. </p>
        <p>Освіта: Звенигородський ЗЗСО ім. Тараса Шевченка;</p>
        <p>НТУУ «КПІ ім. Ігоря Сікорського».</p>

        <h3>Мої хобі</h3>
        <ul>
          <li>Спорт</li>
          <li 
            id="hobby2" 
            onClick={this.toggleColorsHobby2}
            style={{
              backgroundColor: hobby2Color.bg,
              color: hobby2Color.text
            }}
          >
            Прогулянки
          </li>
          <li 
            id="hobby3" 
            onClick={this.toggleColorsHobby3}
            style={{
              backgroundColor: hobby3Color.bg,
              color: hobby3Color.text
            }}
          >
            Танці
          </li>
          <li>Прогулянки на природі</li>
          <li>Музика</li>
          <li>Читання книг</li>
        </ul>

        <h3>Улюблені книги</h3>
        <ol>
          <li>«Есенціалізм. Мистецтво визначати пріоритети»</li>
          <li>«Підсвідомості все підвладне»</li>
          <li>«Без зусиль»</li>
        </ol>
      </div>
    );
  }
}

export default Content;