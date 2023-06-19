import React, { useEffect } from 'react'
import styled from 'styled-components'

import axios from 'axios'
import { Link, json } from 'react-router-dom'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Cookie from "universal-cookie"
const Container =styled.div`
display: flex;
justify-content: center;
align-items: center;
margin: auto;
width: 40vh;
flex-direction: column;
margin-top: 10%;
@media screen and (min-width:800px) {
border: 1px solid #d6cfcf;
padding: 10px;
}
`
const SignUp=styled.span`
    font-size: 16px;
    padding: 10px;

`
const Brand=styled.span`
  padding: 20px;
font-family: Verdana, Geneva, Tahoma, sans-serif;
font-size:30px;

`
const Finput=styled.input`
width: 30vh;
justify-content: center;
align-items: center;

`
const Hr=styled.div`
margin-top:10px;
    display:flex;
    flex-direction: row;

`
const Sp=styled.span`
width: 8vh;
text-align: center;
`
const Line=styled.hr`
    
width: 11vh;
`
const Fspan=styled.small`
    text-align: center;
    padding: 10px;
    color: #2b1994;
`
const Gdiv=styled.div`
    display :flex;
    flex-direction: row;
    
    padding: 7px;
   align-items: center;
   text-align: center;
   justify-content:center;
    width:30vh;
    box-shadow: inset 0 -3em 3em rgba(0, 0, 0, 0.1), 0 0 0 2px rgb(255, 255, 255),
    0.3em 0.3em 1em rgba(0, 0, 0, 0.3);
`
const Gimg=styled.img`
    height: 26px;
    width:26px
`
const Gspan=styled.span`
    color: #0465d3;
    font-size: 16px;
    padding-left:7px;
`
export default function Login() {
const [user,setUser]=useState("");
const [pass,setPass]=useState("");
const navigate=useNavigate();
const cookies=new Cookie();
useEffect(()=>{
if(cookies.get("config")){
    navigate("/dashboard/main");
}
},[])
const SubmitHander=async(e)=>{
    e.preventDefault();
try{
await axios.post("http://localhost:4000/userLogin",{user,pass}).then(data=>{
    if(data.status===200){
        
        /* let config= */
        cookies.set("config",(data.data.value));
cookies.set("token",data.data.token);
        navigate("/dashboard/main")
    }else {
        console.log(data);
    }
}).catch(err=>console.log(err));;
}catch(err){
    console.log(err);
}
}
  return (
    <Container>
        <Brand className=''><b>𝓘𝓷𝓼𝓽𝓪𝓰𝓻𝓪𝓶</b></Brand>
        <form  method='post'>
        <Finput className="form-control form-control-sm my-2" onChange={(e)=>{
            setUser(e.target.value);
        }} type="text" placeholder="Phone or email"/>
        <Finput className="form-control form-control-sm my-2" onChange={(e)=>{
            setPass(e.target.value);
        }} type="password" placeholder="Password"/>
 
        <Finput type='submit' onClick={SubmitHander} value="Login" className='btn btn-primary btn-sm '/>
        <Hr><Line/><Sp>OR</Sp><Line/></Hr>
        </form>
        <Gdiv>
        <Gimg src='./google.png'/>
        <Gspan>Login with Google</Gspan>
        </Gdiv>
        <Fspan>Forgot password ?</Fspan>
        <SignUp>Don't have an account ? <b style={{color:"#1245b3"}}><Link to="/signup" style={{textDecoration:"none"}}>Sign Up</Link></b></SignUp>
    </Container>
  )
}
