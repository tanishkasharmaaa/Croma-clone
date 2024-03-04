import { useState } from "react";
import { PiTruckLight } from "react-icons/pi";
import { FaStar } from "react-icons/fa6";
import { electronics } from "../database/electronics";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Element.css'
import { NavLink } from "react-router-dom";
function Appliances() {
  const [data, setData] = useState(electronics);
  const [filterValue, setFilterValue] = useState('');
  const handleSortPrice=(value)=>{
    const sortedData = [...data];
  if(value==='low'){
    sortedData.sort((a,b)=>a.price-b.price)
  }
  else if(value==='high'){
    sortedData.sort((a,b)=>b.price-a.price)
  }
  setData(sortedData)
  };
  const handleFilter = (e) => {
    setFilterValue(e.target.value);
  };

  const filteredData = data.filter(ele => ele.title.toLowerCase().includes(filterValue.toLowerCase()));
 
  return (
    <div className="parent" >
    
      <h1 >Electronics</h1>
      <div className="Inputs-div">
      <button className="low" onClick={()=>handleSortPrice('low')}>Sort low to high</button>
      <button className="high" onClick={()=>handleSortPrice('high')}>Sort high to low</button>
      <input
      className="low"
      
          type="text"
          placeholder="Filter by title"
          value={filterValue}
          onChange={handleFilter}
        />
      </div>
      <div className="main-product-box">
      {filteredData.map((ele) => (
        <div className="element" key={ele.id}>
          <div>
            <div className="product"> <img src={ele.img} alt="" /></div>
            </div>
         <div >
         <NavLink to={`/electronics/${ele.id}`} style={{ textDecoration: "none", color: "white" }}>
  <h4>{ele.title} <span class="badge text-bg-secondary" style={{ backgroundColor: "green" }}>New</span></h4>
</NavLink>
          
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

export default Appliances;
