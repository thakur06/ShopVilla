import React from 'react'
import { useState , useEffect} from 'react'
import YourCart from './YourCart';
import *  as Icon from "react-bootstrap-icons"
import YourWish from './YourWish';
import axios from 'axios';
import { AppContext } from './context';
import { useContext } from 'react';
import Cookies from 'universal-cookie';

export default function WishList() {

const cookie=new Cookies();
 const [lists, setlists] = useState([]);
 const [flag, setflag] = useState(false)
    const cars = new Array("Saab", "Volvo", "BMW","gmc","hummer");
useEffect(()=>{
getMe();

},[flag])

const getMe=async()=>{
  await axios.post("http://localhost:4000/getUser",{token:cookie.get("token")}).then(res=>{setlists(res.data.WishList);}).catch(err=>console.log(err));
}
  return (
    <>
    <div className="card text-center my-2 border-0">
  
  <div className="card-body">
    <h5 className="card-title">Your Cart </h5>
    <p className="card-text"></p>
   <Icon.HeartFill size={38} color="#ff0000"/>
  </div>
  
</div>

<div className="row text-center">
  

    {lists.length >0 ?
lists.map((data,index)=>(
    <YourWish key={index} value={data} flag={setflag} ind={flag}/>
)):<h1>Add items now</h1>
    }</div>
    
    </>
  )
}
