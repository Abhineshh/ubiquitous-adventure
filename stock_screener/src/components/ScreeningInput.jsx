import React, { useState } from 'react'

function ScreeningInput(props) {

  const [query,setquery] = useState({
    symbol:"",
    companyName:"",
    marketCapitalUL:"",
    marketCapitalLL:"",
    sector:"",
    industry:"",
    priceUL: "",
    priceLL:"",
    dividendUL: "",
    dividendLL:"",
    volumeUL: "",
    volumeLL:"",
    exchange: "",
    country: "",
  })

  const {applyFunc} = props

  const handleChange = (event)=>{
    setquery({...query,[event.target.name]:event.target.value})
  }

  return (
    <div className='pt-20 border-2 border-slate-400 shadow-sm  border-x-0'>
      
        <div className='flex flex-wrap justify-center'>

          <div className='m-2 items-center flex flex-col'>
            <label>Enter the stock symbol or any(for all)</label>
            <input
              name='symbol'
              onChange={(e)=>handleChange(e)}
              className='bg-transparent p-1 border-2  text-base focus:border-2 focus:outline-none'
              placeholder='eg:AAPL' />
          </div>

          <div className='m-2 items-center flex flex-col'>
            <label>Company Name</label>
            <input
              name='companyName'
              onChange={(e)=>handleChange(e)}
              className='bg-transparent p-1 border-2  text-base focus:border-2 focus:outline-none'
              placeholder='microsoft' />
          </div>



          <div className='m-2 items-center flex flex-col'>
            <label>Sector</label>
            <input
              name='sector'
              onChange={(e)=>handleChange(e)}
              className='bg-transparent p-1 border-2 text-base focus:border-2 focus:outline-none'
              placeholder='eg:technology' />
          </div>

          <div className='m-2 items-center flex flex-col'>
            <label>industry</label>
            <select className='bg-transparent p-1 border-2   text-base focus:border-2 focus:outline-none'>
              <option>technology</option>
              <option>Automobile</option>
            </select>
          </div>

          <div className='m-2 items-center flex flex-col'>
            <label>Exchange</label>
            <select className='bg-transparent p-1 border-2  text-base focus:border-2 focus:outline-none'>
              <option>nse</option>
              <option>bse</option>
            </select>
          </div>

          <div className='m-2 items-center flex flex-col'>
            <label>
              country
            </label>
            <input
              name='country'
              onChange={(e)=>handleChange(e)}
              className='bg-transparent p-1 border-2  text-base focus:border-2 focus:outline-none'
              placeholder='eg:india' />
          </div>

          <div className='m-2 flex flex-col '>
            <label className='text-center'>Market Capital</label>
            <div>
              <label>MoreThan:</label>
              <input
                name='marketCapitalUL'
                onChange={(e)=>handleChange(e)}
                className='bg-transparent p-1 border-2  text-base focus:border-2 focus:outline-none'
                placeholder='eg:1000' />
            </div>
            <div>
              <label>LessThan:</label>
              <input
                name='marketCapitalLL'
                onChange={(e)=>handleChange(e)}
                className='bg-transparent p-1 border-2  text-base focus:border-2 focus:outline-none'
                placeholder='eg:2000' />
            </div>
          </div>

          <div className='m-2 items-center flex flex-col'>
            <label className='text-center'>price per Stock</label>
            <div>
              <label>MoreThan:</label>
              <input
                name='priceUL'
                onChange={(e)=>handleChange(e)}
                className='bg-transparent p-1 border-2  text-base focus:border-2 focus:outline-none'
                placeholder='eg:1000' />
            </div>
            <div>
              <label>LessThan:</label>
              <input
                name='priceLL'
                onChange={(e)=>handleChange(e)}
                className='bg-transparent p-1 border-2  text-base focus:border-2 focus:outline-none'
                placeholder='eg:2000' />
            </div>
          </div>

          <div className='m-2 flex flex-col'>
            <label className='text-center'>dividend</label>
            <div>
              <label>MoreThan:</label>
              <input
                name='dividendUL'
                onChange={(e)=>handleChange(e)}
                className='bg-transparent p-1 border-2  text-base focus:border-2 focus:outline-none'
                placeholder='eg:1000' />
            </div>
            <div>
              <label>LessThan:</label>
              <input
                name='dividendLL'
                onChange={(e)=>handleChange(e)}
                className='bg-transparent p-1 border-2  text-base focus:border-2 focus:outline-none'
                placeholder='eg:2000' />
            </div>
          </div>

          <div className='m-2 flex flex-col'>
            <label className='text-center'>Volume</label>
            <div>
              <label>MoreThan:</label>
              <input
                name='volumeUL'
                onChange={(e)=>handleChange(e)}
                className='bg-transparent p-1 border-2 text-base focus:border-2 focus:outline-none'
                placeholder='eg:1000' />
            </div>
            <div>
              <label>LessThan:</label>
              <input
                name='volumeLL'
                onChange={(e)=>handleChange(e)}
                className='bg-transparent p-1 border-2  text-base focus:border-2 focus:outline-none'
                placeholder='eg:2000' />
            </div>
          </div>


        </div>
        <div className='flex justify-center'>
          <button className='border-2 p-2 m-2 bg-indigo-700 active:bg-slate-400 hover:bg-red-600 ' onClick={()=>{applyFunc(query)}}>apply</button>
        </div>

    </div>
  )
}

export default ScreeningInput