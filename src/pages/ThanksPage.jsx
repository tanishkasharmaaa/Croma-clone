
import { NavLink } from "react-router-dom";

export function ThanksPage(){
    return(

        <>
         <div style={{textAlign:"center"}}>
        <h1>We are thankful to serve you</h1>
        <p>Your product will delivered by tomorrow</p>
        <NavLink to='/'><button style={{padding:"1%" ,fontSize:"100%",borderRadius:"10px",backgroundColor:"aquamarine",fontWeight:"700", marginBottom:"5%"}}>Home</button></NavLink> 
    </div>
        </>
    )
   
} 