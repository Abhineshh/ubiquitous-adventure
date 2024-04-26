import React, { useState } from 'react'
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

function ScreeningInput(props) {

  const [query, setquery] = useState({
    marketCapitalUL: 0,
    industry: "",
    priceUL: 0,
    dividendUL: 0,
    volumeUL: 0,
    exchange: "",
    country: "",
  })

  const { applyFunc } = props

  const handleChange = (event) => {
    setquery({ ...query, [event.target.name]: event.target.value })
  }

  const validateAndApply = () => {
    const requiredFields = [ 'industry', 'exchange', 'country'];
    const emptyFields = requiredFields.filter(field => !query[field]);
    if (emptyFields.length > 0) {
      toast.error('Please fill in all required fields.');
      return;
    }

    const numericFields = ['marketCapitalUL', 'priceUL', 'dividendUL', 'volumeUL'];
    const invalidNumericFields = numericFields.filter(field => isNaN(query[field]));
    if (invalidNumericFields.length > 0) {
      toast.error('Market capital, price, dividend, and volume fields must be numeric.');
      return;
    }

    applyFunc(query);

  };


  const industryOptions = [
    "Technology",
    "Automobile",
    "Software",
    "Autos",
    "Banks",
    "Beverages",
    "Semiconductors",
    "Electronics",
    "Internet",
    "Insurance"
    ];

  const exchangeOptions = [
    "NSE",
    "BSE",
    "NASDAQ",
    "AMEX",
    "EURONEXT",
    "NYSE",
  ];

  const countryOptions = [
    "IN",
    "US",
    "UK",
    "MX",
    "BR",
    "RU",
  ];

  return (
    <div className='md:pt-20 pt-28 border-2 border-slate-400 shadow-sm  border-x-0'>
      <ToastContainer />
      <div className='flex flex-wrap justify-center items-center'>


        <div className='m-2 items-center flex flex-col'>
          <label>Industry</label>
          <select name="industry" value={query.industry} onChange={handleChange} className='bg-transparent p-1 border-2  text-base focus:border-2 focus:outline-none'>
            <option value="">Select...</option>
            {industryOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>

        <div className='m-2 items-center flex flex-col'>
          <label>Exchange</label>
          <select name="exchange" value={query.exchange} onChange={handleChange} className='bg-transparent p-1 border-2  text-base focus:border-2 focus:outline-none'>
            <option value="">Select...</option>
            {exchangeOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>

        <div className='m-2 items-center flex flex-col'>
          <label>Country</label>
          <select name="country" value={query.country} onChange={handleChange} className='bg-transparent p-1 border-2  text-base focus:border-2 focus:outline-none'>
            <option value="">Select...</option>
            {countryOptions.map(option => (
              <option key={option} value={option}>{option}</option>
            ))}
          </select>
        </div>

        <div className='m-2 flex flex-col '>
          <label className='text-center'>Market Capital</label>
          <div>
            <input
              name='marketCapitalUL'
              type='number'
              onChange={(e) => handleChange(e)}
              className='bg-transparent p-1 border-2  text-base focus:border-2 focus:outline-none'
              placeholder='eg:2000' />
          </div>
        </div>

        <div className='m-2 items-center flex flex-col'>
          <label className='text-center'>price per Stock</label>
          <div>
            <input
              name='priceUL'
              type='number'
              onChange={(e) => handleChange(e)}
              className='bg-transparent p-1 border-2  text-base focus:border-2 focus:outline-none'
              placeholder='eg:2000' />
          </div>
        </div>

        <div className='m-2 flex flex-col'>
          <label className='text-center'>Dividend</label>
          <div>
            <input
              name='dividendUL'
              type='number'
              onChange={(e) => handleChange(e)}
              className='bg-transparent p-1 border-2  text-base focus:border-2 focus:outline-none'
              placeholder='eg:2000' />
          </div>
        </div>

        <div className='m-2 flex flex-col'>
          <label className='text-center'>Volume</label>
          <div>
            <input
              name='volumeUL'
              type='number'
              onChange={(e) => handleChange(e)}
              className='bg-transparent p-1 border-2  text-base focus:border-2 focus:outline-none'
              placeholder='eg:2000' />
          </div>
        </div>


      </div>
      <div className='flex flex-col items-center justify-center pb-5'>
        <button className='border-2 p-2 m-2 bg-indigo-700 active:bg-slate-400 hover:bg-red-600 ' onClick={() => { validateAndApply() }}>apply</button>
      </div>

    </div>
  )
}

export default ScreeningInput
