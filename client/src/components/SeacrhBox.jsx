import axios from 'axios';
import React,{useState,useEffect}from 'react'
import { Link } from 'react-router-dom';
let numbers = ["hi i am iphone ", "home decor","skin ","face","lithiumm","cars","dog", "gadgets","laptop","infinnix"]
export default function SeacrhBox() {
  const [items, setitems] = useState("");
  const [products, setproducts] = useState([]);
  const [filtered, setfiltered] = useState([])
  useEffect(()=>{
getProduct();
  },[])
  const getProduct=async()=>{
    await axios.get("http://localhost:4000/allItems").then(res=>{setproducts(res.data);
    setfiltered(res.data)
    }).catch(err=>console.log(err));
        }
        const mytester=()=>{
          setfiltered(products.filter((data,index)=>{
       
          let result = data.title.toLowerCase();

if (result.match(items.toLowerCase())){
 return data;
}else {
 return false;
}

        }));}
  return (
    <div className='container text-center'>
<input className="form-control form-control-sm" type="text" placeholder="search items" aria-label=".form-control-sm example" value={items} onChange={(e)=>{e.preventDefault();setitems(e.target.value)
  mytester();
}}></input>

<div className="row text-center my-3">

{ filtered.length>0 ?  filtered.map((data,index)=>
   <div key={index} className="col-4  my-3">
   <div className="card" >
 <img src={data.thumbnail} height="170vh"  className="card-img-top" alt="..."/>
 <div className="card-body">
   <h5 className="card-title text-truncate">{data.title}</h5>
   <p className="card-text text-truncate">{data.description}</p>
   <button className='btn btn-outline-warning'><Link to={`/dashboard/product/${data._id}`} style={{textDecoration:"none", color:"#607D8B"}}>Buy now </Link></button>
 </div>
 </div>
   </div>):<div><img className='img-fluid' src='/noresult.gif' /></div>
  }
  </div>

    </div>
  )

}
