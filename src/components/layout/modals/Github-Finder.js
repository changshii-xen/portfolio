import React, {useEffect} from 'react'
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import find from './pictures/finder1.PNG';


const Finder = () => {
    useEffect(() => {
        // Init Materialize JS
        M.AutoInit();
      });
      return (
          <div>          
                <a class="waves-effect waves-light btn modal-trigger" href="#modal1">Github Finder</a>
                <div id="modal1" class="modal">
                  <div class="modal-content">
                  <h4>GitHub Finder Sample picture</h4>
                  <img src={find} alt="Github Finder"/>
                  </div>
                  <div class="modal-footer">
                    <a href="#!" class="modal-close waves-effect waves-green btn-flat">Close</a>
                  </div>
                </div>
          </div>
      )
}

export default Finder;

