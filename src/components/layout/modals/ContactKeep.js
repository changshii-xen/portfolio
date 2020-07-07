import React, {useEffect} from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import Keep from './pictures/keep4.PNG';
import Keep2 from './pictures/keep3.PNG'

const Keeper = () => {
    useEffect(() => {
        // Init Materialize JS
        M.AutoInit();
      });
      return (
          <div>          
                <a class="waves-effect waves-light btn modal-trigger" href="#modal2">Contact Keeper</a>

  
                <div id="modal2" class="modal">
                  <div class="modal-content">
                  <h4>Modal Header</h4>
                  <img src={Keep} alt="Contact"/>
                  <img src={Keep2} alt="Keeper"/>
                  </div>
                  <div class="modal-footer">
                    <a href="#!" class="modal-close waves-effect waves-green btn-flat">Close</a>
                  </div>
                </div>
          </div>
      )
}

export default Keeper;


