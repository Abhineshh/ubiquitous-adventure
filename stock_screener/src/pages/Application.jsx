import { useState, useEffect } from 'react'
import axios from 'axios'
import Navbar from '../components/Navbar'
import TableOutput from '../components/TableOutput'
import { useNavigate } from 'react-router-dom'
import {getStockRoute} from "../utils/APIRoutes";

function Application() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState({
    _id:"",
    username:"",
    password:"",
  });
  const [tableData, settableData] = useState()

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        if (!localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)) {
          navigate("/login");
        } else {
          setCurrentUser(JSON.parse(localStorage.getItem(process.env.REACT_APP_LOCALHOST_KEY)))
        }
      } catch (err) {
        console.error(err);
      }
    };

    fetchUserData();
  }, [navigate]);

  console.log( currentUser)

  const fetchData = async (query) => {
    try {
      console.log(query)
      const response = await axios.get(`${getStockRoute}`,{
        params:{query,
            currentUser
        }
      })
      settableData(response.data)
      console.log(response.data)
    } catch (err) {
      console.error(err);
    }
  }

  

  return (
    <>
      <div className='h-screen w-screen'>
        <Navbar userData={currentUser} />
        <div>
          <TableOutput  handleFetch={(query) => { fetchData(query) }} tableData={tableData} />
        </div>
      </div>
    </>
  )
}

export default Application
