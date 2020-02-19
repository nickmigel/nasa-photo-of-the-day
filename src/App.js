import React, { useState, useEffect } from "react";
import "./App.css";
import axios from 'axios'
import Title from './components/title/title'
import Picture from './components/image/image'
import Description from './components/description/description'


function App() {
  const [nasa, setNasa] = useState([])
  useEffect(() => {
    axios.get('https://api.nasa.gov/planetary/apod?api_key=SNLSrixHF4qBgt3xRYqoBcskh6wuaqx7dYm7JX9h')
      .then(response => {
        setNasa(response.data)
      })
  }, [])

  return (
    <div className="App">
      <p>{nasa.date}</p>
      <div className="header">
        <Title className="title" title={nasa.title} />
        <Picture className="changingImg" img={nasa.hdurl} />
      </div>
      <div className="info">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj-A3Dv3L1YEW75oDajyTXbzr9n6rI6j2DAy5RWp9YlIQApgpj3a-LbfC4Xb9J&s" alt="nasa logo" />
        <Description description={nasa.explanation} />
      </div>
      <a href="https://www.nasa.gov/">visit nasa website</a>
    </div>
  );
}

export default App;
