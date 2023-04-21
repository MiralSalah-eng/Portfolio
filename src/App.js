import './App.css';
import NabvBar from './components/NabvBar';
import SocialIcons from './components/SocialIcons';
import Home from './components/Home';
import About from './components/About';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Projects from './components/Projects';
import Modal from 'react-modal';


Modal.setAppElement('#root')
function App() {
  return (
    <div className="App">
      <NabvBar/>    
      <Home />
      <About/>
      <Skills/>
      <Projects/>
      <Contact/>
      <SocialIcons/>

      
    </div>
  );
}

export default App;
