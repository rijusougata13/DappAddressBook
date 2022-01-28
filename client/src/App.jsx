import { useState } from 'react'
import {
	BrowserRouter ,
	Route,
  Routes,
} from "react-router-dom";
import './App.css'
import Footer from './components/Footer';
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Register from './pages/Register';
import UserGuide from './pages/userGuide';

function App() {
  console.log=()=>{};
  return (
    < >
     
      <BrowserRouter>
      <Navbar/>
      <Routes>
   		<Route path="/" element={<Home />} />
      <Route path="register" element={<Register/>}>
  		</Route>
      <Route path="userguide" element={<UserGuide/>}/>
  
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
