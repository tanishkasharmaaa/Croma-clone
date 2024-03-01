import { useEffect, useState } from "react";
import { PiTruckLight } from "react-icons/pi";
import { FaStar } from "react-icons/fa6";

import 'bootstrap/dist/css/bootstrap.min.css';
import './Element.css'
function Gaming() {
  const [data, setData] = useState([]);

  async function datafetch() {
    try {
      const res = await fetch(`http://localhost:3031/gaming`);
      const final = await res.json();
      setData(final);
      console.log(final);
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    datafetch();
  }, []);

  return (
    <div>
    
      <h1>Gaming</h1>
      <div className="main-product-box">
      {data.map((ele) => (
        <div className="element" key={ele.id}>
          <div>
            <div className="product"> <img src={ele.img} alt="" /></div>
            </div>
         <div >
          <h4>{ele.title} <span class="badge text-bg-secondary" style={{backgroundColor:"green"}}>New</span></h4>
          
          <p style={{fontSize:"20px"}}>{ele.stars} <FaStar style={{color:"green"}}/></p>
          <p style={{ fontSize: "30px" }}>₹{ele.price}</p>
          
          {ele.delivery && (
            <p >
              <PiTruckLight style={{ fontSize: "23px" }}/> <span>{ele.delivery}</span>
            </p>
          )} 
        </div></div>
       
      ))}
     
    </div> </div>
  );
}

export default Gaming;
