import React, { useContext, useState } from "react";
import { AuthContext } from "../Context/AuthContextProvider";

function Login() {
  const { auth,signup,login } = useContext(AuthContext);
  const [action, setAction] = useState("Login");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
const[email,setEmail]=useState("")
  const handleInput = (e) => {
    const { name, value } = e.target;
    if (name === 'email') {
      setUsername(value);
    } else if (name === 'password') {
      setPassword(value);
    }
  };

  const handleSubmit = (e) => {
  
    e.preventDefault(); // Prevents the form from submitting and refreshing the page
    if(action==='Login'){
       login(username, password);
    }
    else {
      // Sign up logic
      signup(username,email, password);
    }
  };

  return (
    <form className="container" onSubmit={handleSubmit}>
      <div className="header">
        <div className="text">{action === "Login" ? "Login" : "Sign Up"}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs" >
        {action === 'Login' ? null : <div className="input">
          <input type="text" placeholder="Name" />
        </div>}
        <div className="input">
          <input type="email" placeholder="Email" name="email" value={username} onChange={handleInput} />
        </div>
        <div className="input">
          <input type="password" placeholder="Password" name="password" value={password} onChange={handleInput} />
        </div>
      </div>
      {action === 'Sign Up' ? null : <div className="forgot-password">Lost Password?</div>}
      <div className="submit-container">
        <button className={action === "Login" ? "submit active" : "submit"} onClick={() => setAction("Login")} onSubmit={handleSubmit}>
          Login
        </button>
        <button className={action === "Sign Up" ? "submit active" : "submit"} onClick={() => setAction("Sign Up")}>
          Sign Up
        </button>
      </div>
    </form>
  );
}

export default Login;
