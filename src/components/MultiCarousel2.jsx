import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import {healthfitness} from '../database/healthfitness'

export default function MultiCarousel2() {
  const [data, setData] = useState(healthfitness);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

console.log(data)
  return (
    <div className="div">
      <h1>Trending Machines</h1>
      <Carousel responsive={responsive} className="carousel">
      {data.map((ele)=>(
        <div className="carousel-card">
        <img src={ele.img} alt="" />
        <div>
        <p style={{fontSize:"bold"}}>{ele.title}</p>
        <p>{ele.price}</p></div>
        </div>
      ))}
      </Carousel>
    </div>
  );
}
