import './App.css';
import { NavBar } from './components/Navbar';
import { About } from './components/About';
import { Contact } from './components/Contact';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Projects } from './components/Projects';
import React, { useEffect, useState } from "react";

import bulb from './assets/img/lightbulb2.png';
import lswitch from './assets/img/lightswitch.png';
import bulb2 from './assets/img/lightbulb-2.png';
import lswitch2 from './assets/img/lightswitch2.png';

function App() {
    const [isActive, setActive] = useState(false);
    const [isSwitch, setSwitch] = useState(false);

    const changeColor = () => {
        setSwitch(!isSwitch);
        setTimeout(() => {
            setActive(!isActive);
        }, 500)
    };  

    useEffect(() => {
        document.title = "Andy Zhuo"
      }, []);

    return (
        <div className={isActive ? 'darkMode': 'lightMode'}>
            <button className="switch" onClick={changeColor}> 
            <img alt={bulb} src={bulb} className="bulb"/>
            <img alt={lswitch} src={lswitch} className={isSwitch ? 'switchon' : 'switchoff'}/>
            <img alt={bulb2} src={bulb2} className="bulb2 glow"/>
            <img alt={lswitch2} src={lswitch2} className={isSwitch ? 'switchon2' : 'switchoff2'}/>
            </button>
            <NavBar />
            <About/>
            <Projects/>
            <Contact/>
        </div>
    );
}

export default App;