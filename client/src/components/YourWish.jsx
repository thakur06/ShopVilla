import axios from 'axios';
import React, { useEffect,useState } from 'react'
import Cookies from 'universal-cookie';
import { Trash } from 'react-bootstrap-icons';
export default function YourWish(props) {
  const [data, setdata] = useState({info:{},product:{}});
  const cookie=new Cookies();
 
  const {value,flag,ind}=props;
  useEffect(()=>{
getData();
console.log(flag,ind)
  },[]);

  const addToCart=async ()=>{
    let token=cookie.get("token");
    await axios.post(`http://localhost:4000/addToCart/${data.product._id}`,{quantity:1,token});
  
  
  }
  const removeFromWish=async ()=>{
    let token=cookie.get("token");
    await axios.post(`http://localhost:4000/user/deleteWish/${data.info._id}`,{token}).then(flag(!ind)).catch(err=>{console.log(err)});
  

  }

  const getData=async()=>{
    await axios.get(`http://localhost:4000/Wishitem/${value}`,{token:cookie.get("token")}).then 
    (res=>{setdata({info:res.data,product:res.data.Item});
}).catch(err=>console.log(err));
      }
    return (
   
    <div className="col">
    <div className="card" style={{width: "18rem"}}>
  <img src={data.product.thumbnail} className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">{data.product.title} </h5>
    <p className="card-text">{data.product.description}</p>
    <button  className='btn btn-outline-danger my-3 mx-3 ' onClick={()=>addToCart()}><Trash size={28} color='red' />Add to cart</button>
        <button  className='btn btn-outline-success' onClick={()=>removeFromWish()}><Trash size={28} color='green' />remove from whishlist
       <br/> <small className='float-end'>double click to confirm remove</small>
        </button>
  </div>
  </div>
    </div>
    
  
  
  
  )
}
