import { useState } from "react";
import { PiTruckLight } from "react-icons/pi";
import { FaStar } from "react-icons/fa6";
import { healthfitness } from "../database/healthfitness";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Element.css";


function HealthFitness() {
  const [data, setData] = useState(healthfitness);

  // async function datafetch() {
  //   try {
  //     const res = await fetch(healthfitness);
  //     const final = await res.json();
  //     setData(final);
  //     console.log(final);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // }

  // useEffect(() => {
  //   datafetch();
  // }, []);

  const handleSortPrice = (value) =>{
    const sortedData = [...data];
    if (value === 'low') {
      sortedData.sort((a, b)=> a.price - b.price);
    } else if (value === 'high'){
      sortedData.sort((a, b)=> b.price - a.price);
    }
    setData(sortedData);
  }

  return (
    <div>
      <h1>Health</h1>
      <button onClick={()=>handleSortPrice('low')}>Sort Low To High</button>
      <button onClick={()=>handleSortPrice('high')}>Sort High To Low</button>
      <div className="main-product-box">
        {data.map((ele) => (
          <div className="element" key={ele.id}>
            <div>
              <div className="product">
                {" "}
                <img src={ele.img} alt="" />
              </div>
            </div>
            <div>
              <h4>
                {ele.title}{" "}
                <span
                  class="badge text-bg-secondary"
                  style={{ backgroundColor: "green" }}
                >
                  New
                </span>
              </h4>

              <p style={{ fontSize: "20px" }}>
                {ele.stars} <FaStar style={{ color: "green" }} />
              </p>
              <p style={{ fontSize: "30px" }}>₹{ele.price.toLocaleString('en-IN')}</p>

              {ele.delivery && (
                <p>
                  <PiTruckLight style={{ fontSize: "23px" }} />{" "}
                  <span>{ele.delivery}</span>
                </p>
              )}
            </div>
          </div>
        ))}
      </div>{" "}
    </div>
  );
}

export default HealthFitness;
