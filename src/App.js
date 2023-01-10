import './App.css';
import { NavBar } from './components/Navbar';
import { About } from './components/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Projects } from './components/Projects';
import React, { useEffect } from "react";

function App() {
    useEffect(() => {
        document.title = "Andy Zhuo"
      }, []);
    return (
        <div className="App">
            <NavBar/>
            <About/>
            <Projects/>
        </div>
    );
}

export default App;