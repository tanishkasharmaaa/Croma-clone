import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
export default function Footer(){
    return(
        <div className="media">
        <h3>CONNECT WITH US</h3>
        <input style={{width:"50%"}} type="text" placeholder="Enter Email ID"/>
        <div style={{display:"flex",gap:"10px",fontSize:"25px"}} >
        <div><FaFacebook  /></div>
        <div><AiFillInstagram /></div>
        <div><FaTwitter /></div>
        <div><FaLinkedinIn /></div>
        <div><FaYoutube /></div>
        </div>
        </div>
    )
}