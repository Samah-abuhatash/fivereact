import React from 'react'
import { Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/footer/Footer';
import Home from './pages/home/Home';
import Create from './pages/creat/Create';
import Details from './pages/details/Details';
import Edit from './pages/edit/Edit';
/*"لما المستخدم يروح للرابط /home، اعرض له مكون اسمه <Home />". */

function App() {
  return (
    <>
     <Navbar/>
   <Routes>
    <Route path="/" element={<Home/>}>  </Route> 
    <Route path="/home" element={<Home/>}>  </Route> 
    <Route path="/creat" element={<Create/>}>  </Route> 
    <Route path="/details/:userid" element={<Details/>}>  </Route> 
    <Route path="/edit/:userid" element={<Edit/>}>  </Route> 

   </Routes>
   <Footer/>
    </>
 
  )
}

export default App;