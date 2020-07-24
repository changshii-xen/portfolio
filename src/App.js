import React, {useEffect,Fragment} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import 'react-bootstrap';
import Navbar from './components/layout/Navbar';
import Navbar1 from './components/layout/Navbar1';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/pages/Home';
import Skills from './components/pages/skills'
import Footer from './components/layout/Footer';

import Home1 from './components/pages1/Home1';
import About1 from './components/pages1/About1';
import Skills1 from './components/pages1/Skills1';
import MyForm1 from './components/pages1/Myform1';


import './App.css'
import About from './components/pages/About';
import MyForm from './components/pages/myform';



const App =() => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  })

  return (
    <Router>
    <Fragment>
      <Navbar1 />
      <div >
      <Switch>
        <Route exact path='/' component={Home1}/>
        <Route exact path='/about' component={About1}/>
        <Route exact path='/skills' component={Skills1}/>
        <Route exact path='/contactme' component={MyForm1}/>
      </Switch>
      </div>
      <Footer />
    </Fragment>
    </Router>
  );
}


export default App;
