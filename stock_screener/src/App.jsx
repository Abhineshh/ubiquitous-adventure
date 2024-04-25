import { useRef, useState } from 'react'
import './App.css'
import axios from 'axios'
import Navbar from './components/Navbar'
import TableOutput from './components/TableOutput'
import CompanyDetails from './components/CompanyDetails'

function App() {
  const [selectedCompany, setSelectedCompany] = useState(null)
  const [tableData, settableData] = useState()

  const fetchData = async (query) => {
    try {
      const response = await axios.get("https://financialm    sfasdasdfodelingprep.com/api/v3/stock-screener?apikey={YOUR API KEY}&country=US")
      settableData(response.data)
    } catch (err) {
      console.error(err);
    }
  }

  function handleCompanyClick(company) {
    setSelectedCompany(company)
  }

  return (
    <>
      <div className='h-screen w-screen'>
        <Navbar />
        {
          selectedCompany != null ? (
            <CompanyDetails company={selectedCompany} onClose={() => { setSelectedCompany(null) }} />
          ) : (
            <div>
              <TableOutput handleClick={(data) => { handleCompanyClick(data) }} handleFetch={(query) => { fetchData(query) }} tableData={tableData} />
            </div>
          )
        }
      </div>
    </>
  )
}

export default App
