import React, {useEffect,Fragment} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import 'react-bootstrap';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Skills from './components/pages/skills'
import Footer from './components/layout/Footer';


import './App.css'
import About from './components/pages/About';
import MyForm from './components/pages/myform';



const App =() => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  })

  return (
    <Fragment>
      <Navbar />
      <Home />
      <About />
      <Skills />
      <MyForm />
      <Footer />
    </Fragment>
  );
}


export default App;
