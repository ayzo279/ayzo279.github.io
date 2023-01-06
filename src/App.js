import './App.css';
import { NavBar } from './components/Navbar';
import { About } from './components/About';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Projects } from './components/Projects';

function App() {
    return (
        <div className="App">
            <NavBar/>
            <About/>
            <Projects/>
        </div>
    );
}

export default App;