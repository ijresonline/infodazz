
import './App.css';
import About from './Components/About';
import Home from './Components/Home';
import { Route, Routes } from "react-router-dom";
import Video from './Components/Video';
import Contact from './Components/Contact';
import Design from './Components/Design';
import Event from './Components/Event';
import Brand from './Components/Brand';
import Seo from './Components/Seo';
function App() {
  return<>
        <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/brand-building" element={<Brand/>} />
        <Route path='/sem-smm-seo' element={<Seo/>}/>
        <Route path="/event" element={<Event/>} />
        <Route path="/creative-design" element={<Design/>} />
        <Route path="/video-production" element={<Video/>} />
        <Route path="/contact-us" element={<Contact/>} />
        </Routes>

  </>
}

export default App;
