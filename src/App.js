import React, { useState, useEffect } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Hero from './component/Hero/Hero';
import SectionOne from "./component/SectionOne/SectionOne";
import SectionTwo from "./component/SectionTwo/SectionTwo";
import SectionThree from "./component/SectionThree/SectionThree";
import Testimonial from "./component/Testimonial/Testimonial";
import NavbarComponent from "./navbar";

function App() {
    const [load, updateLoad] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            updateLoad(false);
        }, 1200);

        return () => clearTimeout(timer);
    }, []);

    return (
        <Router>
            <NavbarComponent />
            <div className="App" id={load ? "no-scroll" : "scroll"}>
                <Routes>
                    <Route path="/" element={
                        <>
                            <Hero />
                            <SectionOne />
                            <SectionTwo />
                            <SectionThree />
                            <Testimonial />
                        </>
                    } />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
