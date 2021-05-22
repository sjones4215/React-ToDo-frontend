import React, { useEffect, useState} from 'react';
import { Card, Spinner } from 'react-bootstrap';
import '../styles/home-page.css'
import {getProducts} from '../services/CarsDataService';
;

const HomePage = () => {
const [cars, setCars] = useState([{carsArray:[]}])
const [error, setError] = useState(null)
const [loading, setLoading] = useState(null)

useEffect(() => {
  async function init() { 
  try {  
    getProducts(cars).then((res) => {setCars(res)});
  } 
  catch (e) {
    if (e) {
      setError(e)
    }}
    finally {
      setLoading(false)
    }
  }
  init();
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, [])



function renderCars(c) {
  return(    
  <Card 
    bg="light"
    className="card"
    text="dark"
    style={{ width: '20rem', height: 'auto'}}
    >
    <Card.Header key={c.make}>{c.make}</Card.Header>
    <Card.Body>
      <Card.Title key={c.model}>{c.model}</Card.Title>
      <Card.Text key={c.year}>
        {c.year}
      </Card.Text>
    </Card.Body>
  </Card>
  )
}

const carDataArray = cars
if (error) throw error;
if (loading === true) return <Spinner />

return (
  <>
    <div key="render">
      {carDataArray.map(renderCars)}
    </div>
  </>
  )
}

export default HomePage;