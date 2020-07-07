import React, {useEffect} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import logger1 from './pictures/k.PNG'
import logger2 from './pictures/k5.PNG'

const Logger = () => {
    useEffect(() => {
        // Init Materialize JS
        M.AutoInit();
      });
      return (
    <div>          
        <a class="waves-effect waves-light btn modal-trigger" href="#modal3">IT Logger</a>
        <div id="modal3" class="modal">
          <div class="modal-content">
          <h4>IT Logger sample pictures</h4>
          <img src={logger1} alt="IT logger"/> <br/>
          <img src={logger2} alt="Github Finder"/>

          </div>
          <div class="modal-footer">
            <a href="#!" class="modal-close waves-effect waves-green btn-flat">Close</a>
          </div>
        </div>
  </div>
      )
}


export default Logger;
