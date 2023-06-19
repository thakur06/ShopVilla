import React from 'react'
import Signin from "./Signin"
import { Route , Routes } from 'react-router-dom'
import Login from './Login'
import SignupCmponent from "./SignupComponent"
import Tester from './Tester'
import Bcards from './Bcards'
import Bmain from './Bmain'
import YourCart from './YourCart'
import CartList from './CartList'
import WishList from './WishList'
import Profile from './Profile'
import Category from './Category'
import SeacrhBox from './SeacrhBox'
import LoginComponent from './LoginComponent'
import Rfc from './Rfc'
import PageNotFound from './PageNotFound'
import Orders from './Orders'

export default function MyRoute() {
  return (
    <Routes>
      <Route path='/' element={<LoginComponent/>} key={"Main"}/>
      <Route path='/SignUp' element={<SignupCmponent/>} key={"Signin"}/>
<Route path='/dashboard' element={<Tester/>} key={"login"}>


<Route path='/dashboard/main' element={<Bmain/>} key={"BMain"}/>
<Route path='/dashboard/product/:pid' element={<Bcards/>} key={"Bcard"}/>
<Route path='/dashboard/yourCart' element={<CartList/>} key={"Cart"}/>
<Route path='/dashboard/wishList' element={<WishList/>} key={"wishList"}/>
<Route path='/dashboard/userProfile' element={<Profile/>} key={"profile"}/>
<Route path='/dashboard/category/:value' element={<Category/>} key={"category"}/>
<Route path='/dashboard/Search' element={<SeacrhBox/>} key={"Search"}/>
<Route path='/dashboard/Orders' element={<Orders/>} key={"Orders"}/>
</Route>
<Route path='*' element={<PageNotFound/>} key={"PnF"}/>
    </Routes>
  )
}
