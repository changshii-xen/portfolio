import React, {useEffect} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';

const Keeper = () => {
    useEffect(() => {
        // Init Materialize JS
        M.AutoInit();
      });
      return (
          <div>          
                <a class="waves-effect waves-light btn modal-trigger" href="#modal1">Contact Keeper</a>

  
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

export default Keeper;


