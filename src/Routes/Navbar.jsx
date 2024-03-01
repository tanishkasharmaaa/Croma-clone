import {NavLink} from 'react-router-dom'
import { FaUserLarge } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import './nav.css'
function Navbar(){
    return (
        <>
        <nav className='main-nav'>
            <div className="logo">
                 <img src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1637759004/Croma%20Assets/CMS/Category%20icon/Final%20icon/Croma_Logo_acrkvn.svg" alt="" />
            </div>
            {/* menu */}

           

            {/* search */}

            <div className='search-bar'>
                <input type="text" />
            </div>
            {/* Login */}
            <div className='users'>
           <NavLink to='/location'> <FaLocationDot style={{color:'white',fontSize:"25px"}}/> </NavLink>
            <NavLink to='/user'><FaUserLarge style={{color:'white',fontSize:"25px"}}/></NavLink>
            </div>
      
        </nav> 

        <nav className='nav-bar-second'>
        <div className='menu-link'>
  <div><NavLink to='/electronics' style={{textDecoration: "none", color:"white"}}>Electronics</NavLink></div>
  <div><NavLink to='/appliances' style={{textDecoration: "none",color:"white"}}>Appliances</NavLink></div>
<div><NavLink to='/health&fitness' style={{textDecoration: "none",color:"white"}}>HealthFitness</NavLink></div>
<div><NavLink to='/computers&tablets' style={{textDecoration: "none",color:"white"}}>Computer & Tablets</NavLink></div>
<div><NavLink to='/camera&accessories' style={{textDecoration: "none",color:"white"}}>Cameras & Accessories</NavLink></div>
<div><NavLink to='/gaming' style={{textDecoration: "none",color:"white"}}>Gaming</NavLink></div>
 </div> 
 </nav>  </>
    )
}

export default Navbar