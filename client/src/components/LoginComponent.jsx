import React from 'react'
import { Google } from 'react-bootstrap-icons'
import axios from 'axios'
import { Link, json } from 'react-router-dom'
import { useState ,useEffect} from 'react'
import { useNavigate } from 'react-router-dom'
import Cookie from "universal-cookie"
export default function LoginComponent() {
  const [lerror, setlerror] = useState("")
    const [user,setUser]=useState("");
    const [pass,setPass]=useState("");
    const navigate=useNavigate();
const cookies=new Cookie();
useEffect(()=>{
if(cookies.get("config")){
   cookies.remove("config");
   cookies.remove("token")
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
      setlerror("Invalid Credentials")
    }
}).catch(setlerror("Invalid Credentials"));

}catch(err){
  setlerror("Invalid Credentials")
}
}

  return (
    <section className="vh-100">
         <div className="text-center h-10" style={{ backgroundColor:"#ffffff"}}>
            {/* <h1 className='float-end'>𝕊𝕙𝕠𝕡 𝕧𝕚𝕝𝕝𝕒</h1> */}
            {/* <img  className="float-end"style={{height:"15vh"}} src='./logo.gif'/> */}
        </div> 
  <div className="container py-5 h-100">
    <div className="row d-flex align-items-center justify-content-center h-100">
      <div className="col-sm-7 ">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.svg"
          className="img-fluid" alt="Phone image"/>
      </div>
      <div className="col-sm-5 shadow p-3 mb-5 bg-body-tertiary rounded ">
        <form>
         
          <div className="form-outline mb-3 text-center">
          {/* <label for="form12" className='text-center'>Enter Email</label> */}
            <input type="email" id="form12" className="form-control text-center form-control-sm" onChange={(e)=>{
            setUser(e.target.value);
        }}placeholder='Email Address' />
            
          </div>

          
          <div className="form-outline mb-3 text-center">
            {/* <label for="form1" className='text-center'>Enter Password</label> */}
            <input type="password" id="form1" className="form-control text-center form-control-sm" onChange={(e)=>{
            setPass(e.target.value);
        }}placeholder='Password' />
            
          </div>
          <div className="d-flex justify-content-around align-items-center mb-4">

            
<small className='text-center text-danger'>{lerror}</small>
</div>
          <div className="d-flex justify-content-around align-items-center mb-4">
           
            
            <a href="#!">Forgot password?</a>
          </div>

         
          <button type="submit" className="btn btn-primary " onClick={SubmitHander} style={{width:"100%"}}>Sign in</button>

          <div className="row  text-center my-2">
            <div className='col-5'><hr/></div>
            <div className='col-2'><p className="text-center fw-bold mx-3 mb-0 text-muted">OR</p></div>
            <div className='col-5'> <hr/></div>
          </div>
<div className='text-center'>
          <a className="btn btn-primary rounded-pill " style={{backgroundColor:" #3b5998"}} href="#!"
            role="button">
            <Google size={26}  />  Continue with Google
          </a>
          </div>
          <div className="d-flex justify-content-around align-items-center mb-4 my-2">
           
            
            <b><Link to="/SignUp" style={{textDecoration:"none"}}>Dont't have an Account?</Link></b>
          </div>

        </form>
      </div>
    </div>
  </div>
</section>
  )
}
