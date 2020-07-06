import React, {Fragment} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import Navbar from './components/layout/Navbar';
import Home from './components/pages/Home';
import Skills from './components/pages/skills'
import Footer from './components/layout/Footer';


import './App.css'
import About from './components/pages/About';
import MyForm from './components/pages/myform';



const App =() => {
  return (
    <Fragment>
      <Navbar />
      <Home />
      <br/>
      <About />
      <br/>
      <Skills />
      <br/>
      <MyForm />
      <Footer />
    </Fragment>
  );
}


export default App;
