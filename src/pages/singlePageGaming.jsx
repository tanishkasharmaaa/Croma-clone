import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { gaming } from "../database/gaming";
import { NavLink } from "react-router-dom";
export default function SinglePageGaming() {
  const { id } = useParams();
  const [data, setData] = useState(null);

  useEffect(() => {
    // Find the appliance with the matching id
    const selectedGaming = gaming.find((game) => game.id === parseInt(id));

    // Set the data state with the selected appliance
    setData(selectedGaming);
  }, [id]);

  return (
    <>
     
      {data ? (

        <div className="singlePage-Div" >

          <div> <img src={data.img} alt="" /></div>

          <div><h3>{data.title}</h3> 
          
       <p> <span style={{fontSize:"130%", color:"aquamarine"}}>Price:</span ><span style={{fontSize:"120%"}}>₹{data.price}</span> </p>
          <p><span style={{fontSize:"130%", color:"aquamarine"}}>Delivery:</span><span style={{fontSize:"120%"}}> {data.delivery}</span></p>
          <NavLink to='/shopping'><button style={{padding:"3%" ,fontSize:"100%",borderRadius:"10px",backgroundColor:"aquamarine",fontWeight:"700", marginBottom:"5%"}}>Shop Now</button></NavLink> 
          <div style={{border:"1px solid rgb(2, 255, 171) ",borderRadius:"10px", display:"flex",textAlign:"center"}}>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum aspernatur culpa veritatis obcaecati suscipit ad, eveniet corporis vitae neque cumque ullam iste delectus illum assumenda, quae deserunt? Natus, aliquid ullam!
            
          </div>
          </div>
          
          
         
          {/* Add more details as needed */}
        </div>
      ) : (
        <p>Appliance not found</p>
      )}
    </>
  );
}
