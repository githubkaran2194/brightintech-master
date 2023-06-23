import { BrowserRouter , Routes, Route } from 'react-router-dom';
import './App.css';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Footer from './component/Footer';
import Home from './Pages/Home';
import Nav from './component/Nav';
import Services from './Pages/Services';
import WebDevelopment from './Pages/WebDevelopment';
import DigitalMarketing from './Pages/DigitalMarketing';
import DevOps from './Pages/DevOps';
import AppDevelopment from './Pages/AppDevelopment';


function App() {
  return (
    <>

      <BrowserRouter>
        <Nav/>
        <Routes>
          <Route  path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />}></Route>
          <Route path="/devOps" element={<DevOps/>}/>
          <Route path='/appDevelopment' element={<AppDevelopment/>}/>
          <Route path="webdevelopment" element={<WebDevelopment/>} />
          <Route path="digitalMarketing" element={<DigitalMarketing />} />      
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer/>
      </BrowserRouter>

    </>  
  );
}

export default App;
