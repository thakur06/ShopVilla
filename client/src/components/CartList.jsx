import React, { useEffect } from 'react'
import { useState ,useContext} from 'react'
import YourCart from './YourCart';
import { AppContext } from './context';
import *  as Icon from "react-bootstrap-icons"
import axios from 'axios';
import Cookies from 'universal-cookie';
export default function CartList(props) {
 
   
    
const cookie=new Cookies();
    const [lists, setlists] = useState([]);
    const [flag, setflag] = useState(false)
    useEffect(()=>{
      getMe();
    },[flag]);

    const getMe=async()=>{
      
      await axios.post("http://localhost:4000/getUser",{token:cookie.get("token")}).then(res=>{setlists(res.data.Cart);}).catch(err=>console.log(err));
    }
  
  return (
    <>
    <div className="card text-center my-2 border-0">
  
  <div className="card-body">
    <h5 className="card-title">Special title treatment</h5>
    <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
   <Icon.Cart4 size={38} color="blue"/>
  </div>
  
</div>

    {
lists.map((data,index)=>(
    <YourCart key={index} value={data} flag={setflag} ind={flag}/>
))
    }
   
    </>
  )
}
