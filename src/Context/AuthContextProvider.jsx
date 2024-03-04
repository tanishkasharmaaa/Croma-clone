import { createContext } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export default function AuthContextProvider(props) {
  const [auth, setAuth] = useState({
    isAuth: false,
    token: null
  });

  let navigate = useNavigate();

  async function login(username, password) {
    try {
      const response = await fetch(`https://reqres.in/api/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      if (response.ok) {
        let data = await response.json();

        setAuth({
          isAuth: true,
          token: data.token
        });

        navigate('/');
      } else {
        setAuth({
          isAuth: false,
          token: null
        });
        console.log('Authentication failed');
      }
    } catch (error) {
      console.log('Authentication failed');
    }
  }

  async function signup(username, email, password) {
    try {
      const response = await fetch(`https://reqres.in/api/register`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (response.ok) {
        let data = await response.json();

        setAuth({
          isAuth: true,
          token: data.token,
        });
       alert('Welcome to Chroma')
       
      } else {
        setAuth({
          isAuth: false,
          token: null,
        });
       alert('Either Email or Password is Invalid')
        
      }
    } catch (error) {
      console.error('Sign up failed');
    }
  }


  const logout = () => {
    setAuth({
      isAuth: false,
      token: null
    });
  };

  return <AuthContext.Provider value={{ auth,signup, login, logout }}>{props.children}</AuthContext.Provider>;
}
