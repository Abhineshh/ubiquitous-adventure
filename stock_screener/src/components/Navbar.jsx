import React from 'react';

function Navbar() {
  return (
    <div className='fixed w-full h-16 flex justify-between items-center bg-slate-400 border-2 border-solid border-slate-400 border-r-0'>
      <div className="brand text-indigo-700  line leading-9 bg-slate-400 p-0">
        <h1 className='pl-10 pr-10 font-extrabold text-4xl'>Neptune</h1>
        <h4 className=' text-sm text-black text-right pr-10'>Stock Screener</h4>
      </div>
    </div>
  )
}

export default Navbar