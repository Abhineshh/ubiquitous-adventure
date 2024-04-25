import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from 'react-router-dom';
import { loginRoute } from '../utils/APIRoutes';

function Login() {
  const navigate = useNavigate();
  const [values, setValues] = useState({ username: "", password: "" });
  const toastOptions = {
    position: "bottom-right",
    autoClose: 8000,
    pauseOnHover: true,
    draggable: true,
    theme: "dark",
  };

  useEffect(() => {
    if (localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
      navigate("/");
    }
  }, []);


  const handleChange = (event) => {
    setValues({ ...values, [event.target.name]: event.target.value });
  };

  const validateForm = () => {
    const { username, password } = values;
    if (username === "") {
      toast.error("Email and Password is required.", toastOptions);
      return false;
    } else if (password === "") {
      toast.error("Email and Password is required.", toastOptions);
      return false;
    }
    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (validateForm()) {
      const { username, password } = values;
      const { data } = await axios.post(loginRoute, {
        username,
        password,
      });
      if (data.status === false) {
        toast.error(data.msg, toastOptions);
      }
      if (data.status === true) {
        localStorage.setItem(
          process.env.REACT_APP_LOCALHOST_KEY,
          JSON.stringify(data.user)
        );

        navigate("/");
      }
    }
  };

  return (
    <>
      <div className=' h-screen w-screen flex flex-col justify-center gap-4 items-center bg-white pt-0'>

        <form onSubmit={handleSubmit} className='flex flex-col gap-8 bg-slate-400 p-20 min-w-max border-2 pt-12'>
          <div className='flex items-center g-4 justify-center'>

            <h1 className='text-white text-4xl '>Neptune</h1>
          </div>

          <input
            type='text'
            placeholder='username'
            name='username'
            onChange={(e) => handleChange(e)}
            className=' bg-transparent p-4 border-2 bg-white text-black w-full text-base focus:border-2 focus:outline-none'
          />
          <input
            type='password'
            placeholder='PassWord'
            name='password'
            onChange={(e) => handleChange(e)}
            className=' bg-transparent p-4 border-2 bg-white text-black w-full text-base focus:border-2 focus:outline-none'
          />

          <button
            type='submit'
            className=' bg-indigo-600 text-white py-6 border-none font-bold cursor-pointer uppercase hover:bg-indigo-700 p-1 border-2  text-base focus:border-2 focus:outline-none '
          >
            Login
          </button>
          <span className='text-white'>Don't have an account? <Link className='text-indigo-600 font-bold' to="/register">register</Link></span>
        </form>
      </div>
      <ToastContainer />
    </>
  )
}


export default Login;
