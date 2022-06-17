import React, { Component } from 'react'
import './First.css';
import img from '../assets/durka.png'

export default class First extends Component {
  render() {
    return (
        <div id='filt'>
          <div id='back'> 
            <h1>
              <span>MedCity</span>
              <p>Целостный и индивидуальный подход <br/>к лечению пациентов  </p>
            </h1>
          </div>
        </div>
    )
  }
}
