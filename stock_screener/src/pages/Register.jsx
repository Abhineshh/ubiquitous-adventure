import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { registerRoute } from '../utils/APIRoutes';
import axios from 'axios';


function Register() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

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

  const handleValidation = () => {
    const { password, confirmPassword, username, email } = values;
    if (password !== confirmPassword) {
      toast.error(
        "Password and confirm password should be same.",
        toastOptions
      );
      return false;
    } else if (username.length < 3) {
      toast.error(
        "Username should be greater than 3 characters.",
        toastOptions
      );
      return false;
    } else if (password.length < 8) {
      toast.error(
        "Password should be equal or greater than 8 characters.",
        toastOptions
      );
      return false;
    } else if (email === "") {
      toast.error("Email is required.", toastOptions);
      return false;
    }

    return true;
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (handleValidation()) {
      const { email, username, password } = values;
      const { data } = await axios.post(registerRoute, {
        username,
        email,
        password,
      });
      console.log("done")
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
      <div className=' h-fit w-screen flex flex-col justify-center gap-4 items-center bg-white pt-3 pb-3 '>

        <form onSubmit={(event)=>handleSubmit(event)} className='flex flex-col gap-8 bg-slate-400 p-20 min-w-max h-full pt-12  border-2'>
          <div className='flex items-center g-4 justify-center'>
            <h1 className='text-indigo-600 text-5xl font-extrabold'>Neptune</h1>
          </div>
          <input
            type='text'
            placeholder='UserName'
            name='username'
            onChange={(e) => handleChange(e)}
            className=' bg-transparent p-4 border-2  text-black bg-white w-full text-base focus:border-2 focus:outline-none'
          />
          <input
            type='email'
            placeholder='EmailId'
            name='email'
            onChange={(e) => handleChange(e)}
            className=' bg-transparent p-4 border-2 bg-white text-black w-full text-base focus:border-2 focus:outline-none'
          />
          <input
            type='password'
            placeholder='PassWord'
            name='password'
            onChange={(e) => handleChange(e)}
            className=' bg-transparent p-4 border-2 text-black w-full text-base focus:border-2 focus:outline-none bg-white'
          />
          <input
            type='password'
            placeholder='Confirm PassWord'
            name='confirmPassword'
            onChange={(e) => handleChange(e)}
            className=' bg-transparent p-4 border-2 text-black w-full text-base focus:border-2 focus:outline-none bg-white'
          />

          <button type='submit' className='bg-indigo-600 text-white py-6 border-none font-bold cursor-pointer uppercase hover:bg-indigo-700  p-1 border-2  text-base focus:border-2 focus:outline-none'>register</button>
          <span className='text-white'>
            Already have an account ? <Link className='text-indigo-600 font-bold' to={"/login"}>login</Link>
          </span>
        </form>
      </div>
      <ToastContainer />
    </>
  )
}

export default Register