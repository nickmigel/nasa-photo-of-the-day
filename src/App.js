import React, { useState, useEffect } from "react";
import axios from 'axios'
import './App.css'
import {
  Card, CardImg, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle, Jumbotron, Container
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
      <Jumbotron className='header' fluid>
        <Container fluid>
          <h1 className="display-3">Nasa Image Of The Day</h1>
          <p className="lead">Amazing images everyday and a snippet of information</p>
        </Container>
      </Jumbotron>
      <Card className='container'>
        <CardBody className='flex'>
          <CardTitle>{nasa.copyright}</CardTitle>
          <CardSubtitle>{nasa.date}</CardSubtitle>
        </CardBody>
        <img width="400vw" src={nasa.hdurl} alt="Card image cap" />
        <CardBody>
          <CardText className='description'>{nasa.explanation}</CardText>
        </CardBody>
      </Card>

      <a href='https://www.nasa.gov/'>visit nasa website</a>
    </div>
  );
}

export default App;
