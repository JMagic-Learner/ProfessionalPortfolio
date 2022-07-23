import logo from './logo.svg';


import Navigation from './components/Navigation'
import Introduction from './components/Introduction'
import About from './components/About';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Footer from './components/Footer';
import './App.css';
import ColorsTimeline from './components/Timeline';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      
      <Navigation/>
        <Introduction/>
        <About/>
        <Services/>
        <Projects/>
        <ColorsTimeline/>
        <Contact/>
        <Footer/>
        {/* <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
       
      </header>
    </div>
  );
}

export default App;
