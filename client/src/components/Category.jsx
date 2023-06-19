import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams ,Link } from 'react-router-dom'
import { Bag } from 'react-bootstrap-icons'
export default function Category() {
    const {value}=useParams();
    const [sata, setdata] = useState([]);
     const catGetter=async()=>{
await axios.post(`http://localhost:4000/category/${value}`).then(res=>setdata(res.data)).catch(err=>console.log(err));
     }
    useEffect(()=>{
catGetter();

    },[])
    

  return (
<div className='row text-center'>

{
    sata.map((data,index)=>(
        <div key={index} className="col my-2">
    <div  className="card" style={{width: "18rem"}}>
    <img src={data.thumbnail} height="170vh" className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title col-10 text-truncate">{data.title}</h5>
    <h6 className="card-subtitle mb-2 text-body-secondary">{data.category}</h6>
    <span className="d-inline-block text-truncate" style={{maxWidth:"150px"}}>
  {data.description}
</span><br/>
    <Link  to={`/dashboard/product/${data._id}`} className="card-link btn btn-sm btn-primary">Buy Now  <Bag color='white' size={24}/></Link>
    {/* <Link to="/" className="card-link">Another link</Link> */}
  </div>
</div>
</div>
    ))
}

</div>
  )
}
