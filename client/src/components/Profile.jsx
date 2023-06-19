import React, { useEffect ,useState} from 'react'
import styled from 'styled-components'
import {AppContext} from './context'
import { useContext } from 'react'
import axios from 'axios'
import Cookies from 'universal-cookie'
import { Link } from 'react-router-dom'

export default function Profile() {
const [value, setvalue] = useState({});
const [oder, setoder] = useState(0)
useEffect(()=>{
getUser();
},[])
const cookie=new Cookies();
const getUser=async()=>{
  await axios.post("http://localhost:4000/getUser",{token:cookie.get("token")}).then(res=>{setvalue(res.data);setoder(res.data.TotalOrders.length)
    
}).catch(err=>console.log(err));
    }

  
    const Section=styled.section`
        height: 96vh;
        background-color: #eee;
    `
  return (
    <Section >
  <div className="container py-5 h-100">
    <div className="row d-flex justify-content-center align-items-center h-100">
      <div className="col-md-12 col-xl-4">

    <div className="card" style={{borderRadius:"15px"}}>
          <div className="card-body text-center">
            <div className="mt-3 mb-4">
              <img src={value.Profile}
                className="rounded-circle img-fluid" style={{width: "100px"}} />
            </div>
            <h4 className="mb-2">{value.Fname}</h4>
            <p className="text-muted mb-4">{value.Email}</p>
          
            <Link type="button" to="/Profile/update" className="btn btn-primary btn-rounded btn-lg">
              Update Profile
            </Link>
            <div className="d-flex justify-content-between text-center mt-5 mb-2">
              <div>
                <p className="mb-2 h5">{value.WalletCash}</p>
                <p className="text-muted mb-0">Wallets Balance</p>
              </div>
              <div className="px-3">
                <p className="mb-2 h5">8512</p>
                <p className="text-muted mb-0">Income amounts</p>
              </div>
              <div>
                <p className="mb-2 h5">{oder}</p>
                <p className="text-muted mb-0">Total Orders</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</Section>
  )
}
