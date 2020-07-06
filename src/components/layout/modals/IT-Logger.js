import React, {useEffect} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

const Logger = () => {
    useEffect(() => {
        // Init Materialize JS
        M.AutoInit();
      });
      return (
          <div>          
                <a class="waves-effect waves-light btn modal-trigger" href="#modal1">IT Logger</a>

  
                <div id="modal1" class="modal">
                  <div class="modal-content">
                  <h4>Modal Header</h4>
                  <p>A bunch of text</p>
                  </div>
                  <div class="modal-footer">
                    <a href="#!" class="modal-close waves-effect waves-green btn-flat">Agree</a>
                  </div>
                </div>
          </div>
      )
}


export default Logger;
