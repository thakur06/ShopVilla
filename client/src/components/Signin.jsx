import React from 'react'
import styled from 'styled-components'
import axios from 'axios'
import { Link } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react'
import Cookie from 'universal-cookie';
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
    text-decoration: none;

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
        console.log(data);
    }
}).catch(err=>console.log(err));
}catch(err){
    console.log(err);
}
}
  return (
    <Container>
        <Brand className=''><b>𝓘𝓷𝓼𝓽𝓪𝓰𝓻𝓪𝓶</b></Brand>
        <form  method='post'>
        <Finput className="form-control form-control-sm my-2" value={email} onChange={(e)=>{
            setUser(e.target.value);
        }} type="text" placeholder="Phone or email"/>
        <Finput className="form-control form-control-sm my-2" value={fname} onChange={(e)=>{
            setFname(e.target.value);
        }} type="text" placeholder="Fullname"/>
        

        <Finput className="form-control form-control-sm my-2" value={userName} onChange={(e)=>{
            setUserName(e.target.value);
        }} type="text" placeholder="Username"/>

        <Finput className="form-control form-control-sm my-2" value={pass} onChange={(e)=>{
            setPass(e.target.value);
        }} type="password" placeholder="Password"/>
 
        <Finput type='submit' onClick={SubmitHander} value="Sign In" className='btn btn-primary btn-sm '/>
        <Hr><Line/><Sp>OR</Sp><Line/></Hr>
        </form>
        <Gdiv>
        <Gimg src='./google.png'/>
        <Gspan>Sign In with Google</Gspan>
        </Gdiv>
        <Fspan>Forgot password ?</Fspan>
        <SignUp>Already have an account ? <b style={{color:"#1245b3"}}><Link to="/" style={{textDecoration:"none"}}>Login</Link></b></SignUp>
    </Container>
  )
}
