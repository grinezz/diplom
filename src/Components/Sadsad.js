import React, { Component } from 'react'
import './Sadsad.css';

export default class sadsad extends Component {
  render() {
    return (
      <div className='backgrf'>
      <div id='gridfortable'>
        <div id='Form'>
          <div id='Ank'>
            <div>
              <h2>Записаться на приём</h2>
              <p>Пожалуйста, не стесняйтесь обращатья к нашему дружелюбному персоналу 
                стойки регистрации с любым общим или медицинский запрос. 
                Наши врачи примут или ответят на любые срочные вызовы.</p>
            </div>
            <div>
            <select id='selectDoc'>
                <option>
                  Выберите направление
                </option>
                <option>
                  Дерматология
                </option>
                <option>
                  Гинекология
                </option>
                <option>
                  Диетология
                </option>
                <option>
                  Гематология
                </option>
                <option>
                  Имуннология
                </option>
                <option>
                  Гастроэнтерология
                </option>
                <option>
                  Аллергология
                </option>
                <option>
                  Детская хирургия
                </option>
                <option>
                  Неврология
                </option>
                <option>
                  Офтамология
                </option>
                <option>
                  Эндоскопия
                </option>
                <option>
                  Нейрохирургия
                </option>
              </select>
              <select id='selectDoc' placeholder='Выберите специалиста'>
                <option>
                  Выберите специалиста
                </option>
                <option>
                  Шаронов Дмитрий Антонович
                </option>
                <option>
                  Епихин Николай Олегович
                </option>
                <option>
                  Клюева Анна Дмитриевна
                </option>
                <option>
                  Ильин Роман Петрович
                </option>
                <option>
                  Комиссаров Илья Антонович
                </option>
                <option>
                  Субботина Хильда Георгьевна
                </option>
                <option>
                  Филатов Вадим Еремеевич
                </option>
              </select>
              <div>
                <input placeholder='ФИО'> 

                </input>
                <input placeholder='Контактная почта'>

                </input>
              </div>
              <div>
                <input type='text' data-format="+7 (ddd) ddd-dd-dd" placeholder='Телефон'>
                  
                </input>
                <input id='date' type='date'>
                  
                </input>
                <input type='time' id='time'>

                </input>
              </div>
              <button id='Appointment'>
                <strong>Назначить встречу</strong>
              </button>
            </div>
            </div>    
        </div>
        <div id='SecondGrid'>
              <h2>
                <strong>Помощь пациентам со всего мира!</strong>
              </h2>
              <p id='Nash'>
                Наш персонал стремится сделать каждое взаимодействие с пациентами 
                ясным, краткии и привлекательным. Наша клиника оснащена современным оборудованием, 
                которое отвечает самым высоким профессиональным требованиям. 
              </p>
              <div>
                <p id='Nash2'>
                Многопрофильный медицинский центр расположенный в Москве, работа в котором выстроена по современным европейским стандартам. 
                Наша цель — сделать медицинские услуги экспертного класса доступными для каждого пациента.
                </p>
              </div>
            </div>
      </div>
      </div>
    )
  }
}
