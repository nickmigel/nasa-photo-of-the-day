import React, { useState, useEffect } from "react";
import axios from 'axios'
import './App.css'
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';


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
      <Card className='container'>
        <CardImg top width="100%" width="400vw" src={nasa.hdurl} alt="Image of the day" />
        <CardBody className='flex'>
          <CardTitle>{nasa.copyright}</CardTitle>
          <CardSubtitle>{nasa.date}</CardSubtitle>
          <CardText>{nasa.explanation}</CardText>
        </CardBody>
      </Card>
      <a href='https://www.nasa.gov/'>visit nasa website</a>
    </div>
  );
}

export default App;
