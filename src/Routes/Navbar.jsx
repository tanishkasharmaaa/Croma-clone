import { NavLink } from "react-router-dom";
import { FaUserLarge } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { IoCart } from "react-icons/io5";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./nav.css";
import { NavComp } from "../components/navComp";

function Navbar() {
  return (
    <div className="nav-container">
      <nav className="main-nav">
        <NavLink to="/">
          <img
            className="logo"
            src="https://media-ik.croma.com/prod/https://media.croma.com/image/upload/v1637759004/Croma%20Assets/CMS/Category%20icon/Final%20icon/Croma_Logo_acrkvn.svg"
            alt=""
          />
        </NavLink>
        <NavComp />
        <FaLocationDot className="user" />
        <NavLink to="/login">
          <FaUserLarge className="user" style={{ color: "white" }} />
        </NavLink>
       
          <IoCart className="user" />
       
       
        {/* </div> */}
      </nav>
      <nav
        id="navbar-expand"
        className="navbar navbar-expand-lg bg-body-tertiary"
      >
        <div
          style={{ backgroundColor: "grey", margin: "none" }}
          className="container-fluid"
        >
          <a className="navbar-brand" href="#">
            Menu
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavDropdown">
            <ul className="navbar-nav">
              <li className="nav-item">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/electronics"
                >
                  Electronics
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/appliances">
                  Appliances
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/health&fitness">
                  Health & Fitness
                </NavLink>
              </li>
              <li className="nav-item dropdown">
                
                <a className="nav-link dropdown-toggle"href="#" role="button"data-bs-toggle="dropdown"aria-expanded="false">
                  Dropdown link
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <NavLink className="dropdown-item" to="/computers&tablets">
                      Computers & Tablets
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/camera&accessories">
                      Camera & Accessories
                    </NavLink>
                  </li>
                  <li>
                    <NavLink className="dropdown-item" to="/gaming">
                      Gaming
                    </NavLink>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
