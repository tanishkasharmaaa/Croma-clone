import { useState } from "react";
import { PiTruckLight } from "react-icons/pi";
import { FaStar } from "react-icons/fa6";
import { DataBase } from "../database/searchData";
import "bootstrap/dist/css/bootstrap.min.css";
import { NavLink } from "react-router-dom";
export function Search() {
  const [data, setData] = useState(DataBase);
  const [titleFilter, setTitleFilter] = useState("");
  const [priceFilter, setPriceFilter] = useState("");
  
  const handleSortPrice = (value) => {
    const sortedData = [...data];
    if (value === "low") {
      sortedData.sort((a, b) => a.price - b.price);
    } else if (value === "high") {
      sortedData.sort((a, b) => b.price - a.price);
    }
    setData(sortedData);
  };

  const handleTitleFilter = (e) => {
    setTitleFilter(e.target.value);
  };

  const handlePriceFilter = (e) => {
    setPriceFilter(e.target.value);
  };

  const filteredData = data.filter((ele) =>
    ele.title.toLowerCase().includes(titleFilter.toLowerCase()) &&
    (priceFilter === "" || ele.price <= parseFloat(priceFilter))
  );

  return (
    <div className="parent">
      <h1>Search Items Here</h1>
      <div
        className="search-Inputs-div"
        
      >
        <button className="low" onClick={() => handleSortPrice("low")}>
          Sort low to high
        </button>
        <button className="high" onClick={() => handleSortPrice("high")}>
          Sort high to low
        </button>
        <input
          className="low"
          type="text"
          placeholder="Filter by title"
          value={titleFilter}
          onChange={handleTitleFilter}
          style={{
            padding: "10px",
            color: "white",
            fontSize: "10px",
            borderRadius: "10px",
            border: "none",
            backgroundColor: "hsl(0, 0%, 29%)",
          }}
        />
        <input
          type="number"
          placeholder="Filter by price"
          value={priceFilter}
          onChange={handlePriceFilter}
          style={{
            padding: "10px",
            color: "white",
            fontSize: "10px",
            borderRadius: "10px",
            border: "none",
            backgroundColor: "hsl(0, 0%, 29%)",
          }}
        />
      </div>
      <div className="main-product-box">
        {filteredData.map((ele) => (
          <div className="element" key={ele.id}>
            <div>
              <div className="product">
                {" "}
                <img src={ele.img} alt="" />
              </div>
            </div>
            <div>
            <NavLink to={`/searchItem/${ele.id}`} style={{ textDecoration: "none", color: "white" }}>
  <h4>{ele.title} <span class="badge text-bg-secondary" style={{ backgroundColor: "green" }}>New</span></h4>
</NavLink>
              <p style={{ fontSize: "20px" }}>
                {ele.stars} <FaStar style={{ color: "green" }} />
              </p>
              <p style={{ fontSize: "30px" }}>₹{ele.price}</p>
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
