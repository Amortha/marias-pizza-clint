import React from 'react';
import BanarSlide from '../Banar/Banarslide';
import Pizzahouse from '../Pizzahouse/Pizzahouse';
import Ordernow from '../Ordernow/Ordernow';
import Discount from '../Disscountoffer/Discount';
import Topcatagoris from '../Topcatagoris/Topcatagoris';


const Home = () => {
  return (
    <div>
      <BanarSlide></BanarSlide>
     <Pizzahouse></Pizzahouse>
     <Ordernow></Ordernow>
     <Discount></Discount>
     <Topcatagoris></Topcatagoris>
    </div>
  )
};
export default Home;