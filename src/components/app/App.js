import React from "react";
import { BrowserRouter as Router, Route, Routes, Redirect } from "react-router-dom";

import Header from "../header/Header";
import Home from '../pages/home/Home'
import About from "../pages/about/About";
import Services from "../pages/services/Services";
import MyWorks from "../pages/myWorks/MyWorks";
import Testimonial from "../pages/testimonial/Testimonial";
import Contact from "../pages/contact/Contact";
import Footer from "../footer/Footer";

const App = () => {
    return(
        <Router>
            <div className="header">
                <Header/>
            </div>
            <main>
                <Routes>
                    <Route path='/' element={<Home/>}/>
                    <Route path='/about' element={<About/>}/>
                    <Route path='/services' element={<Services/>}/>
                    <Route path='/myWorks' element={<MyWorks/>}/>
                    <Route path='/testimonial' element={<Testimonial/>}/>
                    <Route path='/contact' element={<Contact/>}/>
                    <Route path='*' element={<Home/>}/>
                </Routes>
            </main>
            <div>
                <Footer/>
            </div>
        </Router>
    )
}

export default App;