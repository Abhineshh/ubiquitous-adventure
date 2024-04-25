import React from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { logoutRoute } from '../utils/APIRoutes';


function Navbar(props) {
  const { userData } = props
  const navigate = useNavigate();

  const handleClick = async () => {
    console.log("done");
    const id = await JSON.parse(
      localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)
    )._id;
    const data = await axios.get(`${logoutRoute}/${id}`);
    if (data.status === 200) {
      localStorage.clear();
      navigate("/login");
    }
  };

  return (
    <div className='fixed w-full h-24 md:h-16 flex justify-between items-center bg-slate-400 border-2 border-solid border-slate-400 border-r-0'>
      <div className="brand text-indigo-700  line leading-9 bg-slate-400 p-0">
        <h1 className='pl-10 pr-10 font-extrabold text-5xl md:text-4xl'>Neptune</h1>
        <h4 className=' md:text-sm text-base text-black text-right pr-10'>Stock Screener</h4>
      </div>
      {
        userData &&
          <div className='flex flex-wrap'>
            <p className='m-2 text-indigo-600 font-extrabold text-3xl md:text-xl p-2'>{userData.username}</p>
            <button onClick={() => { handleClick() }} className='m-2 border-2 bg-indigo-600 text-white p-2 hover:bg-indigo-900 active:bg-red-600 text-base sm:text-3xl '>LogOut</button>
          </div>
        
      }

    </div>
  )
}

export default Navbar