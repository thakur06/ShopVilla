import React,{useState,useRef,useEffect} from 'react'
import { useParams ,Link} from 'react-router-dom'
import * as Icon from "react-bootstrap-icons"
import * as Bt from "react-bootstrap"
import axios from 'axios';
import Cookie  from 'universal-cookie';
import { AppContext } from './context';
import { useContext } from 'react';
export default function Bcards(props) {
  
  
  const cookies=new Cookie();
const [msg, setmsg] = useState("");
const [currImg, setcurrImg] = useState("")
    const{pid}=useParams();
    const [toast, settoast] = useState(false)
    const [product, setproduct] = useState({value:{},images:[]});
    const [pcount, setpcount] = useState(1);
    useEffect(()=>{
      productDetails();

    },[])
const productDetails=async()=>{
await axios.get(`http://localhost:4000/getProduct/${pid}`).then(res=>{setproduct({value:res.data,images:res.data.images});
setcurrImg(res.data.thumbnail);

}).catch(err=>console.log(err));
}
const addToCart=async ()=>{
  let token=cookies.get("token");
  await axios.post(`http://localhost:4000/addToCart/${pid}`,{quantity:pcount,token});


}
const addToWish=async ()=>{
  let token=cookies.get("token");
  await axios.post(`http://localhost:4000/addToWishList/${pid}`,{token})

}

  return ( <>
    <div className="row g-0 bg-light position-relative">
    <div className="col-md-6 mb-md-0 p-md-4">
      <img src={currImg} className="img-fluid" style={{Width:"100vh", Height:"10vh", maxHeight:"30vh"}} alt="..."/>
      <div className='row col-md-9 mb-md-0 p-md-4'>
      {product.images.map((value,index)=>(<img src={value} onClick={()=>{
setcurrImg(value)
      }} key={index}className="img-thumbnail col-3 mx-1 my-1"  alt="..."/>
      ))}
      </div>
    </div>
    <div className="col-md-6 p-4 ps-md-0">
      <h5 className="mt-0">{product.value.title}</h5>
      <p>{product.value.description}</p>
      <h6>Price : {product.value.price}</h6>
      
    <h6>{product.value.rating}</h6>
    <h6>{product.value.stock}</h6>
    <h6>{product.value.brand}</h6>
      <form className="row row-cols-lg-auto g-3 align-items-center">
  <div className="col-12">
    <label className="visually-hidden" htmlFor="inlineFormInputGroupUsername">Enter ammount</label>
    <div className="input-group">
      <input type="number" className="form-control" id="inlineFormInputGroupUsername" placeholder="Enter ammount"/>
    </div>
  </div>

  <div className="col-12">
    <label className="visually-hidden" htmlFor="inlineFormSelectPref">Preference</label>
    <select className="form-select" id="inlineFormSelectPref" onChange={(e)=>{
console.log(e.target.value)
    }} defaultValue={1}>
      <option >Choose...</option>
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
    </select>
  </div></form>
  <button className='btn btn-primary rounded-pill mx-2 my-2' onClick={()=>{ setmsg("added to cart"); settoast(true);setTimeout(()=>{settoast(false);
  addToCart();

  },1000)}}>Add to cart <Icon.Cart4 size={28}   color={"white"} /></button>
      <button className='btn btn-danger' style={{borderRadius:"100%"}} onClick={()=>{ setmsg("added to wish List"); settoast(true);setTimeout(()=>{settoast(false);
  addToWish();
 

  },1000)}}>Add to list<Icon.HeartFill size={28}   color={"white"} /></button>
    </div>
  </div>
  {/* <h1>Similar product</h1> */}
 
  {/* <div className="row">
    <div className="col ">
     <div className="card" style={{width: "18rem"}}>
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
    <div className="col">
     <div className="card" style={{width: "18rem"}}>
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
    <div className="col">
     <div className="card" style={{width: "18rem"}}>
  <img src="..." className="card-img-top" alt="..."/>
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
    <a href="#" className="btn btn-primary">Go somewhere</a>
  </div>
</div>
    </div>
  </div> */}


{toast &&<Bt.Toast autohide={true} delay={100}   className="align-items-center bg-primary position-fixed bottom-0 end-0">
  <div className="d-flex">
    <Bt.ToastBody>{msg}</Bt.ToastBody>

    <button type="button" className="btn-close me-2 m-auto" onClick={()=>{
      settoast(false);
    }} data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
</Bt.Toast>}
</>
  )
}
