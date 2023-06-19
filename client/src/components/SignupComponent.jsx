import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'
import Cookie from 'universal-cookie';
import { Google } from 'react-bootstrap-icons'
export default function SignupComponent() {
  const [lerror, setlerror] = useState("");
    const [email,setUser]=useState("");
const [pass,setPass]=useState("");
const [userName,setUserName]=useState("");
const [fname,setFname]=useState("");
const navigate=useNavigate();
const cookies=new Cookie();
    const SubmitHander=async(e)=>{
        e.preventDefault();
    try{
    await axios.post("http://localhost:4000/signin",{email,pass,fname,userName}).then(data=>{
        if(data.status===200){
            cookies.set("config",(data.data.value));
    cookies.set("token",data.data.token);
            navigate("/dashboard/main")
        }else {
           setlerror("User already exists")
        }
    }).catch(setlerror("User already exists"));
    }catch(err){
      setlerror("User already exists")
    }
    }
  return (
    <section className="vh-100">
       
  <div className="container py-5 h-100">
    <div className="row d-flex align-items-center justify-content-center h-100">
      <div className="col-sm-7 ">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
          className="img-fluid" alt="Phone image"/>
      </div>
      <div className="col-sm-5 shadow p-3 mb-5 bg-body-tertiary rounded " style={{height:"fit-content"}}>
        <form>
         
          <div className="form-outline mb-4 text-center">
          {/* <label for="form12" className='text-center'>Enter Email</label> */}
            <input type="email" id="form12" className="form-control text-center form-control-sm" value={email} onChange={(e)=>{
            setUser(e.target.value);
        }} placeholder='Email Address' />
            
          </div>

          
          
          <div className="form-outline mb-4 text-center">
            {/* <label for="form1" className='text-center'>Enter Password</label> */}
            <input type="text" id="form1" className="form-control text-center form-control-sm"placeholder='Full Name'value={fname} onChange={(e)=>{
            setFname(e.target.value);
        }}  />
            
          </div>   <div className="form-outline mb-4 text-center">
            {/* <label for="form1" className='text-center'>Enter Password</label> */}
            <input type="text" id="form1" className="form-control text-center form-control-sm" value={userName} onChange={(e)=>{
            setUserName(e.target.value);
        }} placeholder='UserName' />
            
          </div>
          <div className="form-outline mb-4 text-center">
            {/* <label for="form1" className='text-center'>Enter Password</label> */}
            <input type="password" id="form1" className="form-control text-center form-control-sm" value={pass} onChange={(e)=>{
            setPass(e.target.value);
        }} placeholder='Password' />
            
          </div>
          <div className="d-flex justify-content-around align-items-center mb-4">

            
<small className='text-center text-danger'>{lerror}</small>
</div>
          <div className="d-flex justify-content-around align-items-center mb-4">

            
            <Link  href="#!">Forgot password?</Link> 
          </div>

         
          <button type="submit" className="btn btn-primary " onClick={SubmitHander} style={{width:"100%"}}>Sign in</button>

          <div className="row  text-center my-2">
            <div className='col-5'><hr/></div>
            <div className='col-2'><p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p></div>
            <div className='col-5'> <hr/></div>
          </div>
<div className='text-center'>
          <Link  className="btn btn-primary rounded-pill " style={{backgroundColor:" #3b5998"}} href="#!"
            role="button">
            <Google size={26}  />  Continue with Google
          </Link> 
          </div>
          <div className="d-flex justify-content-around align-items-center mb-4 my-2">
           
            
            <b><Link  to="/" style={{textDecoration:"none"}}>Already have an Account?</Link> </b>
          </div>

        </form>
      </div>
    </div>
  </div>
</section>
  )
}
