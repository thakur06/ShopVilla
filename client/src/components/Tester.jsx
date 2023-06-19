import React, { useState, useEffect, } from 'react'
import * as Icon from "react-bootstrap-icons"
import styled from 'styled-components'
import Bmain from './Bmain'
import { Outlet, useNavigate, Link } from 'react-router-dom'
import Cookies from 'universal-cookie'
import axios from 'axios'
import "./style.css"
import {Cart,House,Laptop,Phone,Facebook,Instagram,Twitter,Google,Youtube,Github,Linkedin} from "react-bootstrap-icons"
import { AppContext } from './context'
import { Button } from 'react-bootstrap'
export default function Tester() {
    const Die = styled.div`
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        
    `
    const Act=styled.div`
    font-family: cursive;
    `
    const Spans = styled.span`
        font-family: Corinthia!important;
    `
    const Lis = styled.li`
        
        font-weight: lighter;
    `
    const Diver = styled.div`
    height: 100vh;
    overflow-y: scroll;
    ::-webkit-scrollbar {
display: none;
}
    `
    const [LoggedIn, setLoggedIn] = useState({});
    const [loader, setloader] = useState({
        isLoading: false,
        isLogin: true
    });
    const [inp, setinp] = useState("");
    const navigate = useNavigate();
    const cookie = new Cookies();
    useEffect(() => {
      if (loader.isLogin===false){
        navigate("/");
      }
        if (cookie.get("config") !== null && cookie.get("config") !== undefined) {
            setloader({
                isLoading: false,
                isLogin: true
            });

            setLoggedIn(cookie.get("config"))
        } else {
            navigate("/");
        }


    }, [loader.isLogin]);

    const gotoSearch=()=>{
      const data={text:search};
      navigate("/dashboard/Search",{state:data});
    }
    const signOut = async () => {

        await axios.get("http://localhost:4000/Logout").then(() => {
            
            navigate("/")
        }).then(() => {
            setloader({ isLogin: false });
            
        }
        ).catch(e => {
            console.log(e);
        });


    }//3js gsap

const [search, setsearch] = useState("");



    return (
        <>
            <div className="container-fluid">
                <div className="">
                    <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-white">

                        <Act className="container">
                            <Link className="navbar-brand" to="/dashboard/main"><img src='/IMP.jpg'  style={{maxHeight:"70px"}} /></Link> <div className="vr mx-2"></div>
                            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div className="collapse navbar-collapse" id="navbar">
                                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/dashboard/main"><House color='grey' size={28}/></Link>
                                    </li>
                                    <li className="nav-item">
                                        <Link className="nav-link active" aria-current="page" to="/dashboard/Orders"><Icon.ClockHistory color='grey' size={28}/></Link>
                                    </li>
                                </ul>
                                <div className="d-flex" >
                                    
                                      <Link to="/dashboard/yourCart" className='mx-2 my-2'> <Cart size={28} color='grey' className=''/></Link>
                                      <div className="vr mx-2"></div>
                                      <Link to="/dashboard/wishList" className=' my-2'> <Icon.Heart size={28} color='grey' className=''/></Link>
                                       <Link to="/dashboard/userProfile" className=' my-2' ><img src="https://github.com/mdo.png"  alt="hugenerd" width="30" height="30" className="rounded-circle mx-3" /></Link>
                                        <h5 className="mx-2 my-2">loser |</h5>
                                        <button className='btn btn-outline-dark' type='button' onClick={signOut}><Icon.BoxArrowInRight size={33} color='black' />  Signout</button>
                                 
                                </div>
                            </div>



                        </Act>

                    </nav>
                    <div id="carouselExampleCaptions" className="carousel slide ">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        </div>
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/8-col/img%282%29.jpg" className="d-block w-100" alt="..." />
                                <div className="mask" style={{backgroundColor:" rgba(0, 0, 0, 0.4)"}}></div>
      <div className="carousel-caption d-none d-sm-block mb-5">
        <h1 className="mb-4">
                <strong>AMERICAN EAGLE</strong>
              </h1>

              <p>
                <strong>Buy Quotes Merchandise and other merchandise printed T-shirt Online exclusively at The Shop Villa.</strong>
              </p>

              <p className="mb-4 d-none d-md-block">
                <strong>Remember the first time you went to a show and saw your favorite band. · This shirt is dry clean only. </strong>
              </p>

           
      </div>
                            </div>
                            <div className="carousel-item">
                                <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/8-col/img%283%29.jpg" className="d-block w-100" alt="..." />
                                <div className="mask" style={{backgroundColor:" rgba(0, 0, 0, 0.4)"}}></div>
      <div className="carousel-caption d-none d-sm-block mb-5">
        <h1 className="mb-4">
                <strong>Cowhide leather</strong>
              </h1>

              <p>
                <strong>Always carry a bag that fits your mood.</strong>
              </p>

              <p className="mb-4 d-none d-md-block">
                <strong>There’s no such thing as a boring bag. Leather is more than just a material, it’s an attitude and if you’re not at your best when you wear it, then hide it somewhere in the back of your closet.</strong>
              </p>

             
      </div>
                            </div>
                            <div className="carousel-item">
                                <img src="https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/8-col/img%285%29.jpg" className="d-block w-100" alt="..." />
                                <div className="mask" style={{backgroundColor:" rgba(0, 0, 0, 0.4)"}}></div>
      <div className="carousel-caption d-none d-sm-block mb-5">
        <h1 className="mb-4">
                <strong> Levi's Citizen M4 Jean's</strong>
              </h1>

              <p>
                <strong>No more rules, the freedom of dressing</strong>
              </p>

              <p className="mb-4 d-none d-md-block">
                <strong>Blue jeans are the most beautiful things since the gondola." "I want to die with my blue jeans on." "Tailored jackets with jeans is a great look for all ages. Dress up with a heel and pretty shirt, or just wear a smart T-shirt under the jacket.</strong>
              </p>

              
      </div>
                            </div>
                        </div>
                        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Previous</span>
                        </button>
                        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                            <span className="carousel-control-next-icon" aria-hidden="true"></span>
                            <span className="visually-hidden">Next</span>
                        </button>
                    </div>
                    <div className="container">
                        <nav className="navbar navbar-expand-lg navbar-dark mt-3 mb-5 shadow p-2" style={{ backgroundColor: "#607D8B" }}>
                            <Act className="container-fluid">

                                <Link className="navbar-brand" to="#">Categories</Link>
                                <div className="vr mx-2"></div>
                                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                                    <span className="navbar-toggler-icon"></span>
                                </button>
                                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                        <li className="nav-item text-center">
                                        <Link  to={`/dashboard/category/smartphones`} className="nav-link px-0">  <Phone className="mx-2" color='#f0e1e1' size={28}/></Link> 
                                   <small className='text-light'>Phone</small>

                                        </li>
                                        <li className="nav-item  text-center">
                                        <Link  to={`/dashboard/category/laptops`} className="nav-link px-0">  <Laptop className="mx-3" color='#f0e1e1' size={28}/></Link> 
                                        <small className='text-light'>Laptop</small>
                                        </li>
                                        <li className="nav-item text-center">
                                        <Link  to={`/dashboard/category/groceries`} className="nav-link px-0 ">  <Icon.Gift className="mx-3" color='#f0e1e1' size={28}/></Link> 
                                        <small className='text-light'>Groceries</small>
                                        </li>
                                        <li className="nav-item text-center">
                                        <Link  to={`/dashboard/category/fragrances`} className="nav-link px-0 mx-3">  <Icon.Magic className="mx-3" color='#f0e1e1' size={28} /></Link> 
                                        <small className='text-light'>Fragrances</small>
                                        </li>
                                        <li className="nav-item text-center">
                                        <Link  to={`/dashboard/category/skincare`} className="nav-link px-0 mx-3">  <Icon.Brush className="mx-1" color='#f0e1e1' size={28} /></Link> 
                                        <small className='text-light'>Skincare</small>
                                        </li>
                                        <li className="nav-item text-center">
                                        <Link  to={`/dashboard/category/home-decoration`} className="nav-link px-0 mx-3">  <Icon.HouseDown className="mx-2" color='#f0e1e1' size={28} /></Link> 
                                        <small className='text-light'>Decoration</small>
                                        </li>
                                    </ul>
                                    <div className="d-flex text-center" role="search">
                                   <Link to="/dashboard/Search">  <Icon.Search size={30}  color='white' /></Link>
                                        
                                    </div>
                                </div>


                            </Act>

                        </nav>
                    </div>

                    <Diver className="container col py-3">

                        <AppContext.Provider value={{ value: LoggedIn }} >

                            <Outlet />
                        </AppContext.Provider>

                    </Diver>
                    <footer className="text-center text-white mt-4" style={{backgroundColor:" #607D8B"}}>
  
 
    <div className="pt-4 pb-2">
      <Link className="btn btn-outline-white footer-cta mx-2" to="/dashboard/main" target="_blank" role="button">Download Shop Villa Now !
       
      </Link>
      
    </div>
  
  <hr className="text-dark"/>
  
  <div className="container">
  
    <section className="mb-3">
      
     
      <a
        className="btn-link btn-floating btn-lg text-white mx-2"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><Facebook color='white' size={26}/></a>

     
      <a
        className="btn-link btn-floating btn-lg text-white mx-2"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><Twitter color='white' size={26}/></a>

    
      <a
        className="btn-link btn-floating btn-lg text-white mx-2"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><Google color='white' size={26}/></a>

      
      <a
        className="btn-link btn-floating btn-lg text-white mx-2"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><Instagram color='white' size={26}/></a>

      
      <a
        className="btn-link btn-floating btn-lg text-white mx-2"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><Youtube color='white' size={26}/></a>
     
      <a
        className="btn-link btn-floating btn-lg text-white mx-2"
        href="#!"
        role="button"
        data-mdb-ripple-color="dark"
        ><Github color='white' size={26}/>
      </a>
    </section>
   
  </div>
  
  <div className="text-center p-3" style={{backgroundColor:"rgba(0, 0, 0, 0.2)",color:" #E0E0E0"}}>
    © 2022 Copyright:
    <a className="text-white" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div>
  
</footer>
                </div>
            </div>


          
        </>
    )
}
