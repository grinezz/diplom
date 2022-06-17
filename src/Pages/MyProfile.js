import React, { Component } from 'react'
import Header from '../Components/Header.js';
import Contacts from '../Components/Contacts.js';
import './MyProfile.css'
import Ddd from '../Components/Ddd.js';
import Doctor from '../assets/Doctor1.png';

export default class MyProfile extends Component {
  render() {
    return (
      <section id='sectiBg'>
        <Header />
          <div id='FullBody'>
            <div id='Avatar'>
              <div>
                <img src={Doctor}/>
              </div>
              <div>
                <h2>Шаронов Дмитрий Антонович</h2>
                <p>Специалист по Хирургии, Гастроэнтерологии.</p>
                <span>Дмитрий получил степень бакалавра в Российском национальном 
                исследовательском медицинском университете имени Н. И. Пирогова.</span>
              </div>
            </div>
            <div>
              <Ddd />
            </div>
          </div>
        <Contacts id='sda'/>
      </section>
    )
  }
}
