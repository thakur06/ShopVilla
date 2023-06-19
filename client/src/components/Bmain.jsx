import React,{useState, useEffect}from 'react'
import Bcoursel from './Bcoursel'
import styled from 'styled-components'
import { Link } from 'react-router-dom'
import axios from 'axios'
import AppContext from './context'
import { Bag } from 'react-bootstrap-icons'
export default function Bmain() {
    const Divs=styled.div`
  background-color: #f4f7f5;
    `
    const [products, setproducts] = useState([]);
    useEffect(()=>{
getProduct();

    },[]);
    const getProduct=async()=>{
await axios.get("http://localhost:4000/allItems").then(res=>{setproducts(res.data);

}).catch(err=>console.log(err));
    }
 
  return (
    <Divs>
    
    
    <div className=" text-center">
  <div className="row text-center">



    
 {  products.map((data,index)=>(<div key={index} className="col mx-2 my-2 ">
    <div  className="card " style={{width: "20rem"}}>
      <div className='bg-image hover-zoom'>
    <img src={data.thumbnail} height="170vh" className="card-img-top" alt="..."/></div>
  <div className="card-body">
    <h5 className="card-title col-10 text-truncate">{data.title}</h5>
    <h6 className="card-subtitle mb-2 text-body-secondary">{data.category}</h6>
    <span className="d-inline-block text-truncate" style={{maxWidth:"150px"}}>
  {data.description}
</span><br/>
    <Link  to={`/dashboard/product/${data._id}`} className="card-link btn btn-sm btn-outline-primary">Buy Now  </Link>
    {/* <Link to="/" className="card-link">Another link</Link> */}
  </div>
</div>
</div>))}
</div>
</div> 
   </Divs>
  )
}
