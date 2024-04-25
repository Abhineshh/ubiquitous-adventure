import React, { useEffect, useState } from 'react'
import axios from 'axios';
import ScreeningInput from './ScreeningInput';

function TableOutput(props) {

  const {handleClick,handleFetch,tableData} = props

  return (
    <>
    <ScreeningInput applyFunc={(query)=>{handleFetch(query)}}/>
    <div className=' bg-white flex justify-center'>
      {
        tableData ? (

          <table className=' w-5/6 border-2 border-solid border-slate-400 text-sm'>
            <thead className='bg-slate-400'>
              <tr>
                <th className='border-2 text-center '>Symbol</th>
                <th className='border-2 text-center '>CompanyName</th>
                <th className='border-2 text-center '>Market Capital($)</th>
                <th className='border-2 text-center '>Sector</th>
                <th className='border-2 text-center '>Industry</th>
                <th className='border-2 text-center '>Stock Price($)</th>
                <th className='border-2 text-center '>Last Annual Dividend</th>
                <th className='border-2 text-center '>Volume</th>
                <th className='border-2 text-center '>Exchange</th>
                <th className='border-2 text-center '>Country</th>
                <th className='border-2 text-center '>is Actively Trading</th>
              </tr>
            </thead>

            <tbody>
              {tableData.map((data, index) => (
                <tr key={index} onClick={() => { ()=>{handleClick(data)} }} className=' cursor-pointer hover:bg-indigo-600 active:bg-red-600'>
                  <td className='border-2 border-slate-400 text-center'>{data.symbol}</td>
                  <td className='border-2 border-slate-400 text-center'>{data.companyName}</td>
                  <td className='border-2 border-slate-400 text-center'>{data.marketCap}</td>
                  <td className='border-2 border-slate-400 text-center'>{data.sector}</td>
                  <td className='border-2 border-slate-400 text-center'>{data.industry}</td>
                  <td className='border-2 border-slate-400 text-center'>{data.price}</td>
                  <td className='border-2 border-slate-400 text-center'>{data.lastAnnualDividend}</td>
                  <td className='border-2 border-slate-400 text-center'>{data.volume}</td>
                  <td className='border-2 border-slate-400 text-center'>{data.exchange}</td>
                  <td className='border-2 border-slate-400 text-center'>{data.country}</td>
                  <td className='border-2 border-slate-400 text-center'>{data.isActivelyTrading ? "Yes" : "No"}</td>
                </tr>
              ))}
            </tbody >

          </table >
        ) : (
          <div className='p-24'>search for stocks...</div>
        )
      }
    </div >
    </>
  )
}



export default TableOutput