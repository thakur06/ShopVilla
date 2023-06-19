import React, { useState , useEffect, } from 'react'
import * as Icon from "react-bootstrap-icons"
import styled from 'styled-components'
import Bmain from './Bmain'
import { Outlet, useNavigate ,Link} from 'react-router-dom'
import Cookies from 'universal-cookie'
import axios from 'axios'
import { AppContext } from './context'
export default function Tester() {
    const Die=styled.div`
    font-family:'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        /* @media (max-width: 576px) {
            visibility: hidden;
            width: 0px;
        } */
    `
    const Spans=styled.span`
        font-family: Corinthia!important;
    `
    const Lis=styled.li`
        
        font-weight: lighter;
    `
    const Diver=styled.div`
    height: 100vh;
    overflow-y: scroll;
    ::-webkit-scrollbar {
display: none;
}
    `
    const [LoggedIn, setLoggedIn] = useState({});
     const [loader, setloader] = useState({
        isLoading:false,
        isLogin:true
      });
     const [inp, setinp] = useState("");
     const navigate= useNavigate();
      const cookie=new Cookies();
      useEffect(() => {
        if (cookie.get("config")!==null && cookie.get("config")!==undefined){
      setloader({
        isLoading:false,
    isLogin:true
      });
      
setLoggedIn(cookie.get("config"))    }else{
      navigate("/");
    }
      
        
      }, [loader.isLogin]);

      const signOut=async()=>{
      
    console.log("testing signout")
await axios.get("http://localhost:4000/Logout").then(()=>{cookie.remove("config");
navigate("/")}).then(()=>{setloader({isLogin:false});
cookie.remove("token");}
).catch(e=>{
    console.log(e);
});


      }//3js gsap


      
  return (
   <>
<div className="container-fluid">
    <div className="row flex-nowrap">
        <Die className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-light">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-dark min-vh-100">
                <Link  to="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-dark text-decoration-none">
                    <Spans className="fs-5 d-none d-sm-inline">Instagram</Spans>
                </Link> 
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <Lis className="nav-item">
                        <Link  to="/dashboard/main" className="nav-link align-middle px-0">
                            <Icon.House color='black' size={30}/> <span className="ms-1 d-none d-sm-inline text-dark">Home</span>
                        </Link> 
                    </Lis>
                    <Lis>
                    <Link  to="/dashboard/Search" className="nav-link px-0 align-middle">
                        <Icon.Search color='black' size={30}/> <span className="ms-1 d-none d-sm-inline text-dark">Search</span></Link> 
                        {/* <ul className="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                            <li className="w-100">
                                <Link  to="/" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 1 </Link> 
                            </li>
                            <li>
                                <Link  to="/" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 2 </Link> 
                            </li>
                        </ul> */}
                    </Lis>
              
                
                    <Lis>
                        <Link  to="#submenu3" data-bs-toggle="collapse" className="nav-link px-0 align-middle text-dark">
                        <Icon.Tags color='black' size={30}/> <span className="ms-1 d-none d-sm-inline">Shop by category</span> </Link> 
                        <hr/>
                            <ul className="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                            <li className="w-100">
                             <Link  to={`/dashboard/category/smartphones`} className="nav-link px-0"> <span className="d-none d-sm-inline">SmartPhones</span> <Icon.Phone className="float-end" color='black' size={20}/></Link> 
                            </li>
                            <li>
                             <Link  to="/dashboard/category/laptops" className="nav-link px-0"> <span className="d-none d-sm-inline">Laptops</span> <Icon.Laptop className="float-end"color='black' size={20}/></Link> 
                            </li>
                            <li>
                           <Link  to="/dashboard/category/groceries" className="nav-link px-0"> <span className="d-none d-sm-inline">Groceries</span> <Icon.Gift className="float-end"color='black' size={20}/></Link> 
                            </li>
                            <li>
                            <Link  to="/dashboard/category/fragrances" className="nav-link px-0"> <span className="d-none d-sm-inline">Fragrances</span> <Icon.Magic className="float-end" color='black' size={20}/></Link> 
                            </li>
                            <li>
                             <Link  to="/dashboard/category/skincare" className="nav-link px-0"> <span className="d-none d-sm-inline">Skincare</span><Icon.Brush className="float-end" color='black' size={20}/></Link> 
                            </li>
                            <li>
                               <Link  to="/dashboard/category/home-decoration" className="nav-link px-0"> <span className="d-none d-sm-inline">Home-decoration</span><Icon.HouseDown className="float-end" color='black' size={20}/></Link> 
                            </li>
                            <hr/>
                        </ul>
                    </Lis>
                    <Lis>
                        <Link  to="/dashboard/wishList" className="nav-link px-0 align-middle">
                        <Icon.Heart color='black' size={30}/> <span className="ms-1 d-none d-sm-inline text-dark">WishList</span> </Link> 
                    </Lis>
                    <Lis>
                        <Link  to="/dashboard/yourCart" className="nav-link px-0 align-middle ">
                        <Icon.Cart4 color='#000000' size={30}/> <span className="ms-1 d-none d-sm-inline text-dark">Cart</span> </Link> 
                    </Lis>
                </ul>
                <hr/>
                <div className="dropdown pb-4">
                    <Link  to="/" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" className="rounded-circle"/>
                        <span className="d-none d-sm-inline mx-1">loser</span>
                    </Link> 
                    <ul className="dropdown-menu dropdown-menu-light text-small shadow">
                      
                        
                        <li><Link  className="dropdown-item" to="/dashboard/userProfile">Profile</Link> </li>
                        <li>
                            <hr className="dropdown-divider"/>
                        </li>
                        <li><Link  className="dropdown-item " onClick={()=>signOut()}>Sign out</Link> </li>
                    </ul>
                </div>
            </div>
        </Die>
        <Diver className="col py-3">
           
            <AppContext.Provider value={{value:LoggedIn}} >
              
<Outlet />
            </AppContext.Provider>
           
        </Diver>
    </div>
</div>


{/* <div className="container-fluid">
    <div className="row">
        <div className="col-sm-auto bg-light sticky-top">
            <div className="d-flex flex-sm-column flex-row flex-nowrap bg-light align-items-center sticky-top">
                <Link  to="/" className="d-block p-3 link-dark text-decoration-none" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Icon-only">
                    <i className="bi-bootstrap fs-1"></i>
                </Link> 
                <ul className="nav nav-pills nav-flush flex-sm-column flex-row flex-nowrap mb-auto mx-auto text-center align-items-center">
                    <li className="nav-item">
                        <Link  to="/" className="nav-link py-3 px-2" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Home">
                            <i className="bi-house fs-1"></i>
                        </Link> 
                    </li>
                    <li>
                        <Link  to="/" className="nav-link py-3 px-2" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Dashboard">
                            <i className="bi-speedometer2 fs-1"></i>
                        </Link> 
                    </li>
                    <li>
                        <Link  to="/" className="nav-link py-3 px-2" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Orders">
                            <i className="bi-table fs-1"></i>
                        </Link> 
                    </li>
                    <li>
                        <Link  to="/" className="nav-link py-3 px-2" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Products">
                            <i className="bi-heart fs-1"></i>
                        </Link> 
                    </li>
                    <li>
                        <Link  to="/" className="nav-link py-3 px-2" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Customers">
                            <i className="bi-people fs-1"></i>
                        </Link> 
                    </li>
                </ul>
                <div className="dropdown">
                    <Link  to="/" className="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle" id="dropdownUser3" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="bi-person-circle h2"></i>
                    </Link> 
                    <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser3">
                        <li><Link  className="dropdown-item" to="/">New project...</Link> </li>
                        <li><Link  className="dropdown-item" to="/">Settings</Link> </li>
                        <li><Link  className="dropdown-item" to="/">Profile</Link> </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="col-sm p-3 min-vh-100">
           
        </div>
    </div>
</div>
Example 2 - Demo

If you don't need the sticky footer, here's a slight variation that doesn't reguire extra CSS

Sidebar Example 3
Sidebar with Bootstrap icons

The next example is similar to the prior as it changes to horizontal orientation on mobile. This full height example has big beautiful icons from Bootstrap icons. This example also use sticky position to make the sidebar appear fixed as the page is scrolled.

Alt Text

HTML Markup
<div className="container-fluid">
    <div className="row">
        <div className="col-sm-auto bg-light sticky-top">
            <div className="d-flex flex-sm-column flex-row flex-nowrap bg-light align-items-center sticky-top">
                <Link  to="/" className="d-block p-3 link-dark text-decoration-none" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Icon-only">
                    <i className="bi-bootstrap fs-1"></i>
                </Link> 
                <ul className="nav nav-pills nav-flush flex-sm-column flex-row flex-nowrap mb-auto mx-auto text-center align-items-center">
                    <li className="nav-item">
                        <Link  to="/" className="nav-link py-3 px-2" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Home">
                            <i className="bi-house fs-1"></i>
                        </Link> 
                    </li>
                    <li>
                        <Link  to="/" className="nav-link py-3 px-2" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Dashboard">
                            <i className="bi-speedometer2 fs-1"></i>
                        </Link> 
                    </li>
                    <li>
                        <Link  to="/" className="nav-link py-3 px-2" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Orders">
                            <i className="bi-table fs-1"></i>
                        </Link> 
                    </li>
                    <li>
                        <Link  to="/" className="nav-link py-3 px-2" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Products">
                            <i className="bi-heart fs-1"></i>
                        </Link> 
                    </li>
                    <li>
                        <Link  to="/" className="nav-link py-3 px-2" title="" data-bs-toggle="tooltip" data-bs-placement="right" data-bs-original-title="Customers">
                            <i className="bi-people fs-1"></i>
                        </Link> 
                    </li>
                </ul>
                <div className="dropdown">
                    <Link  to="/" className="d-flex align-items-center justify-content-center p-3 link-dark text-decoration-none dropdown-toggle" id="dropdownUser3" data-bs-toggle="dropdown" aria-expanded="false">
                        <i className="bi-person-circle h2"></i>
                    </Link> 
                    <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdownUser3">
                        <li><Link  className="dropdown-item" to="/">New project...</Link> </li>
                        <li><Link  className="dropdown-item" to="/">Settings</Link> </li>
                        <li><Link  className="dropdown-item" to="/">Profile</Link> </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="col-sm p-3 min-vh-100">
            
        </div>
    </div>
</div>

<div className="offcanvas offcanvas-start w-25" tabIndex="-1" id="offcanvas" data-bs-keyboard="false" data-bs-backdrop="false">
    <div className="offcanvas-header">
        <h6 className="offcanvas-title d-none d-sm-block" id="offcanvas">Menu</h6>
        <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
    </div>
    <div className="offcanvas-body px-0">
        <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-start" id="menu">
            <li className="nav-item">
                <Link  to="/" className="nav-link text-truncate">
                    <i className="fs-5 bi-house"></i><span className="ms-1 d-none d-sm-inline">Home</span>
                </Link> 
            </li>
            <li>
                <Link  to="#submenu1" data-bs-toggle="collapse" className="nav-link text-truncate">
                    <i className="fs-5 bi-speedometer2"></i><span className="ms-1 d-none d-sm-inline">Dashboard</span> </Link> 
            </li>
            <li>
                <Link  to="/" className="nav-link text-truncate">
                    <i className="fs-5 bi-table"></i><span className="ms-1 d-none d-sm-inline">Orders</span></Link> 
            </li>
            <li className="dropdown">
                <Link  to="/" className="nav-link dropdown-toggle  text-truncate" id="dropdown" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="fs-5 bi-bootstrap"></i><span className="ms-1 d-none d-sm-inline">Bootstrap</span>
                </Link> 
                <ul className="dropdown-menu text-small shadow" aria-labelledby="dropdown">
                    <li><Link  className="dropdown-item" to="/">New project...</Link> </li>
                    <li><Link  className="dropdown-item" to="/">Settings</Link> </li>
                    <li><Link  className="dropdown-item" to="/">Profile</Link> </li>
                    <li>
                        <hr className="dropdown-divider"/>
                    </li>
                    <li><Link  className="dropdown-item" to="/">Sign out</Link> </li>
                </ul>
            </li>
            <li>
                <Link  to="/" className="nav-link text-truncate">
                    <i className="fs-5 bi-grid"></i><span className="ms-1 d-none d-sm-inline">Products</span></Link> 
            </li>
            <li>
                <Link  to="/" className="nav-link text-truncate">
                    <i className="fs-5 bi-people"></i><span className="ms-1 d-none d-sm-inline">Customers</span> </Link> 
            </li>
        </ul>
    </div>
</div>
<div className="container-fluid">
    <div className="row">
        <div className="col min-vh-100 py-3">
          
            <button className="btn float-end" data-bs-toggle="offcanvas" data-bs-target="#offcanvas" role="button">
                <i className="bi bi-arrow-right-square-fill fs-3" data-bs-toggle="offcanvas" data-bs-target="#offcanvas"></i>
            </button>
            Content..
        </div>
    </div>
</div>

<div className="container-fluid">
    <div className="row flex-nowrap">
        <div className="col-auto px-0">
            <div id="sidebar" className="collapse collapse-horizontal show border-end">
                <div id="sidebar-nav" className="list-group border-0 rounded-0 text-sm-start min-vh-100">
                    <Link  to="/" className="list-group-item border-end-0 d-inline-block text-truncate" data-bs-parent="#sidebar"><span>Item</span> </Link> 
                    (more nav items) ... 
                </div>
            </div>
        </div>
        <main className="col ps-md-2 pt-2">
            <Link  to="/" data-bs-target="#sidebar" data-bs-toggle="collapse" className="border rounded-3 p-1 text-decoration-none"><i className="bi bi-list bi-lg py-2 p-1"></i> Menu</Link> 
            <div className="row">
                <div className="col-12">
                    Content area...
                </div>
            </div>
        </main>
    </div>
</div>




<div className="container-fluid">
    <div className="row flex-nowrap">
        <div className="col-auto col-md-3 col-xl-2 px-sm-2 px-0 bg-dark">
            <div className="d-flex flex-column align-items-center align-items-sm-start px-3 pt-2 text-white min-vh-100">
                <Link  to="/" className="d-flex align-items-center pb-3 mb-md-0 me-md-auto text-white text-decoration-none">
                    <span className="fs-5 d-none d-sm-inline">Menu</span>
                </Link> 
                <ul className="nav nav-pills flex-column mb-sm-auto mb-0 align-items-center align-items-sm-start" id="menu">
                    <li className="nav-item">
                        <Link  to="/" className="nav-link align-middle px-0">
                            <i className="fs-4 bi-house"></i> <span className="ms-1 d-none d-sm-inline">Home</span>
                        </Link> 
                    </li>
                    <li>
                        <Link  to="#submenu1" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-speedometer2"></i> <span className="ms-1 d-none d-sm-inline">Dashboard</span> </Link> 
                        <ul className="collapse show nav flex-column ms-1" id="submenu1" data-bs-parent="#menu">
                            <li className="w-100">
                                <Link  to="/" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 1 </Link> 
                            </li>
                            <li>
                                <Link  to="/" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 2 </Link> 
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link  to="/" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-table"></i> <span className="ms-1 d-none d-sm-inline">Orders</span></Link> 
                    </li>
                    <li>
                        <Link  to="#submenu2" data-bs-toggle="collapse" className="nav-link px-0 align-middle ">
                            <i className="fs-4 bi-bootstrap"></i> <span className="ms-1 d-none d-sm-inline">Bootstrap</span></Link> 
                        <ul className="collapse nav flex-column ms-1" id="submenu2" data-bs-parent="#menu">
                            <li className="w-100">
                                <Link  to="/" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 1</Link> 
                            </li>
                            <li>
                                <Link  to="/" className="nav-link px-0"> <span className="d-none d-sm-inline">Item</span> 2</Link> 
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link  to="#submenu3" data-bs-toggle="collapse" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-grid"></i> <span className="ms-1 d-none d-sm-inline">Products</span> </Link> 
                            <ul className="collapse nav flex-column ms-1" id="submenu3" data-bs-parent="#menu">
                            <li className="w-100">
                                <Link  to="/" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 1</Link> 
                            </li>
                            <li>
                                <Link  to="/" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 2</Link> 
                            </li>
                            <li>
                                <Link  to="/" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 3</Link> 
                            </li>
                            <li>
                                <Link  to="/" className="nav-link px-0"> <span className="d-none d-sm-inline">Product</span> 4</Link> 
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link  to="/" className="nav-link px-0 align-middle">
                            <i className="fs-4 bi-people"></i> <span className="ms-1 d-none d-sm-inline">Customers</span> </Link> 
                    </li>
                </ul>
                <hr/>
                <div className="dropdown pb-4">
                    <Link  to="/" className="d-flex align-items-center text-white text-decoration-none dropdown-toggle" id="dropdownUser1" data-bs-toggle="dropdown" aria-expanded="false">
                        <img src="https://github.com/mdo.png" alt="hugenerd" width="30" height="30" className="rounded-circle"/>
                        <span className="d-none d-sm-inline mx-1">loser</span>
                    </Link> 
                    <ul className="dropdown-menu dropdown-menu-dark text-small shadow">
                        <li><Link  className="dropdown-item" to="/">New project...</Link> </li>
                        <li><Link  className="dropdown-item" to="/">Settings</Link> </li>
                        <li><Link  className="dropdown-item" to="/">Profile</Link> </li>
                        <li>
                            <hr className="dropdown-divider"/>
                        </li>
                        <li><Link  className="dropdown-item" to="/">Sign out</Link> </li>
                    </ul>
                </div>
            </div>
        </div>
        <div className="col py-3">
            Content area...
        </div>
    </div>
</div> */}

</>
  )
}
