import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Cookies from 'universal-cookie';

export default function Orders() {
    const [details, setdetails] = useState([]);
    const cookie=new Cookies();
    useEffect(()=>{
getDetails();
    },[]);

    const getDetails=async()=>{
await axios.post("http://localhost:4000/user/orders",{token:cookie.get("token")}).then(res=>setdetails(res.data.TotalOrders)).catch(err=>{
    console.log(err);
});
    }
  return (
    <div className="row text-center">
    {details.map((data,index)=>(
           <div key={index} className="col">
           <div className="card" style={{width: "18rem"}}>
         <img src={data.product.thumbnail} className="card-img-top" alt="..."/>
         <div className="card-body">
           <h5 className="card-title">{data.product.title}</h5>
           <p className="card-text">{data.product.description}</p>
           <p className="card-text">Quantity : {data.quantity}</p>
          <small className='float-end'>--Ordered on : {data.createdAt.substring(0,10)} </small>
         </div>
         </div>
           </div>
        
    )) }</div>
  )
}
