import React from 'react';
import BanarSlide from '../Banar/Banarslide';
import Pizzahouse from '../Pizzahouse/Pizzahouse';
import Ordernow from '../Ordernow/Ordernow';
import Discount from '../Disscountoffer/Discount';
import Topcatagoris from '../Topcatagoris/Topcatagoris';
import Costomarreviews from '../Costomerreview/Costomarreviews';
import MostLoveds from '../MostLoved/MostLoveds';
import Blogs from "../Blogs/Blogs"
import Arrival from '../Arrivals/Arrival';
import FeaturedProducts from '../FeaturedProduct/FeaturedProducts';

const Home = () => {
  return (
    <div>
      <BanarSlide></BanarSlide>
     <Pizzahouse></Pizzahouse>
     <Ordernow></Ordernow>
     <Arrival></Arrival>
     <Discount></Discount>
     <Topcatagoris></Topcatagoris>
     <FeaturedProducts></FeaturedProducts>
     <Costomarreviews></Costomarreviews>
     <MostLoveds></MostLoveds>
     <Blogs></Blogs>
    </div>
  )
};
export default Home;