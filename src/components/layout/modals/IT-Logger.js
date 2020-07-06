/* eslint-disable no-undef */
import React from 'react';
import M from 'materialize-css/dist/js/materialize.min.js';

const Logger = () => {
    return (
        <div>
            <div className="action-btn">
            <a className="waves-effect waves-light btn modal-trigger" href="#modal1">Modal</a>
            </div>
            
            <div id="modal1" className="modal" style={modalStyle}>
                <div className="modal-content">
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

const modalStyle ={
    width: 75,
    height: 75
}


export default Logger;
