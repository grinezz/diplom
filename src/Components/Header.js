import React, { Component } from 'react';
import './Header.css';
import med from '../assets/med.jpg'
import User from '../assets/user.png'
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";
export default class header extends Component {
  render() {
    return (
      <header id='bg'>
        <div id='head'>
          <div id='nav'>
            <ul>
              <img
                onClick={() => window.scrollTo(0, document.querySelector('#bg').offsetTop - 0)}
                src={med}
              />
              <Link to='/' onClick={() => window.scrollTo(0, document.querySelector('#bg').offsetTop - 0)}>
                Главная
              </Link>
              <Link to='/' onClick={() => window.scrollTo(0, document.querySelector('#glav').offsetTop - 140)}>
                Направления
              </Link>
              <Link to='/' onClick={() => window.scrollTo(0, document.querySelector('#glavv').offsetTop - 140)}>
                Специалисты
              </Link>
              <Link to='/' onClick={() => window.scrollTo(0, document.querySelector('#GlavBlock').offsetTop - 100)}>
                Диагностика
              </Link>
              <Link to='/' className='cont' onClick={() => window.scrollTo(0, document.querySelector('#radnam').offsetTop)}>
                Контакты
              </Link>
              <Link id='Liiiink' to="/Profile">
                <button id='user'>
                  <img
                    src={User}
                  />
                  <p>Вход</p>
                </button>
              </Link>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}
