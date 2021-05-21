import React, { useEffect, useState} from 'react';
import { Card } from 'react-bootstrap';
import '../styles/home-page.css'
import {getProducts} from '../services/CarsDataService';
;

const HomePage = () => {
const [cars, setCars] = useState([{carsArray:[]}])

useEffect(() => {
  getProducts(cars).then((res) => {setCars(res)});
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

return (
  <>
    <div key="render">
      {carDataArray.map(renderCars)}
    </div>
  </>
//   <div>
//     <Card 
//     bg="light"
//     className="card"
//     text="dark"
//     style={{ width: '50rem', height: 'auto' }}
//     >
//     <Card.Header>Welcome</Card.Header>
//     <Card.Body>
//       {cars.map()}
//       <Card.Text>
//         To begin adding click the button below
//       </Card.Text>
//     </Card.Body>
//   </Card>
//   <Button onClick={() => {
//     if (count < 10) { setCount(count + 1)}
//   }}>{count}</Button>
// </div>
  );
};

export default HomePage;