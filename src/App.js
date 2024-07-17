import './App.css';
import Home from './components/home';
import About from "./components/about"
import Feature from "./components/feature"
import Contact from './components/contact';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Home />
      <About />
      <Feature />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
