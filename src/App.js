import React from "react";
import Title from "./comps/Title";
import UploadForm from "./comps/UploadForm";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./comps/Navbar";
import Home from "./pages/Home";
import Explore from "./pages/Explore";
import About from "./pages/About";
import Inspo from "./pages/Inspo";
import Footer from "./comps/Footer";
// import { ChakraProvider } from '@chakra-ui/react'




const App = () => {
  return (

    
    <BrowserRouter>
    <div className='container'>
    <Navbar/>

      <Routes>

      
        <Route path='/' element={<Home/>}/>
        <Route path="/Explore" element ={<Explore/>}/>
        <Route path="/Inspo" element={<Inspo/>}/>
        <Route path="/About" element={<About/>}/>

        {/* <Title/> */}
     
      </Routes>
    </div>
    <Footer/>
    </BrowserRouter>
    
  );
};

export default App;
