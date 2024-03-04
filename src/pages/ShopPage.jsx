import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
const Shop = () => {
  const navigate=useNavigate()
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const [formErrors, setFormErrors] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const validateForm = () => {
    let valid = true;
    const newFormErrors = { ...formErrors };

    // Check if fields are filled
    Object.entries(formData).forEach(([key, value]) => {
      if (value.trim() === "") {
        newFormErrors[key] = `${key} is required`;
        valid = false;
      } else {
        newFormErrors[key] = "";
      }
    });

    setFormErrors(newFormErrors);
    return valid;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
   navigate('/thanks')
    if (validateForm()) {
      // Perform submission logic
      console.log("Form submitted:", formData);
    } else {
      console.log("Form not submitted - fill in all fields");
    }
  };

  return (
    <div className="Address" >
      
      <form onSubmit={handleSubmit} >
        <div>
          
          <input
          
          placeholder="Address"
            type="text"
            id="firstName"
            name="firstName"
            value={formData.firstName}
            onChange={handleChange}
          />
          <p style={{ color: "red" }}>{formErrors.firstName}</p>
        </div>
        <div>
        
          <input
          
           placeholder="Town"
            type="text"
            id="lastName"
            name="lastName"
            value={formData.lastName}
            onChange={handleChange}
          />
          <p style={{ color: "red" }}>{formErrors.lastName}</p>
        </div>
        <div>
         
          <input 
           placeholder="Nearby Place"
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <p style={{ color: "red" }}>{formErrors.email}</p>
        </div>
        <div>
          <button  type="submit">Submit</button>
        </div>
      </form>
    </div>
  );
};

export default Shop;
