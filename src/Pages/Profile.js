import React, { Component } from 'react'
import './Profile.css'
import Header from '../Components/Header.js';
import Contacts from '../Components/Contacts.js';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

export default class Profile extends Component {
  render() {
    return (
        <section id='sectiBg'>
            <Header />
            <div id='FormIn'>
                <div>
                    <h3>Вход в личный кабинет</h3>
                </div>
                <div id='InProfile'>
                    <p id='Login'>Логин</p>
                    <input placeholder='Введите логин'></input>
                    <div>
                      <p id='Password'>Пароль</p>
                      <input placeholder='Введите пароль'></input>
                    </div>
                    <Link  to="/MyProfile">
                      <button>
                        Вход
                      </button>
                    </Link>
                </div>
            </div>
            <div id='footer'>
              <Contacts />
            </div>
        </section>
        
    )
  }
}