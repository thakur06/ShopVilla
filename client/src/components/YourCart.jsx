import React from 'react'
import { useState ,useEffect} from 'react';
import axios from 'axios';
import Cookies from 'universal-cookie';
import * as Icon from "react-bootstrap-icons"
export default function YourCart(props) {

  const {value,flag,ind}=props;
 
const [data, setdata] = useState({info:{},product:{}});
const cookie=new Cookies();
  useEffect(()=>{
getData();
  },[]);

  const getData=async()=>{
await axios.get(`http://localhost:4000/Cartitem/${value}`,{token:cookie.get("token")}).then 
(res=>{setdata({info:res.data,product:res.data.Item});
}).catch(err=>console.log(err));
  }

  const BuyNow=async()=>{

    await axios.post(`http://localhost:4000/BuyNow/${value}`,{token:cookie.get("token"),quantity:data.info.quantity}).then 
(res=>{console.log(res.data);
}).catch(err=>console.log(err));
      }
      const removeFromCart=async ()=>{
        let token=cookie.get("token");
        await axios.post(`http://localhost:4000/user/deleteCart/${data.info._id}`,{token}).then(flag(!ind)).catch(err=>{console.log(err)});
      
      
      }

  return (
    
    <div className="card mb-3  mx-auto shadow-lg p-3 mb-5 bg-body-tertiary rounded" style={{maxWidth: "540px"}}>
  <div className="row g-0">
    <div className="col-md-5">
      <img src={data.product.thumbnail} className="img-fluid rounded-start" style={{height:"77%",width:"100%"}} alt="..."/>
    </div>
    <div className="col-md-7 text-center">
      <div className="card-body">
        <h5 className="card-title">{data.product.title}</h5>
        <h6 className="card-title"><small>quantity : </small>{data.info.quantity}</h6>
        <p className="card-text">{data.product.description}</p>
        <p className="card-text"><small className="text-body-secondary">{data.info.createdAt}</small></p>
        <button  className='btn btn-outline-danger my-3 '><Icon.Trash size={28} color='red' onClick={removeFromCart()}/>Remove from cart</button>
        <button  className='btn btn-outline-success' onClick={()=>BuyNow()}><Icon.Trash size={28} color='green' />Buy now</button>
      </div>
    </div>
  </div>
</div>
  )
}
