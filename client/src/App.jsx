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

function App() {

  return (
    < >
     
      <BrowserRouter>
      <Navbar/>
      <Routes>
   		<Route path="/" element={<Home />} />
       <Route path="register" element={<Register/>}>
  		</Route>
      </Routes>
      <Footer/>
      </BrowserRouter>
    </>
  )
}

export default App
