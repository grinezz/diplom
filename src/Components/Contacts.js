import React, { Component } from 'react'
import './Contacts.css'
import vk from '../assets/vk.png'
import yandex from '../assets/yandex.png'

export default class Contacts extends Component {
  render() {
    return (
      <div id='radnam'>
          <h2 id='lock'>Как с нами связаться</h2>
          <div id='fullinfo'>
              <div id='Water'>
                  <h3>
                      <strong>MedСity</strong>
                  </h3>
                  <p>
                      MedCity - это воплощение уникального подхода в совремнном здравоохранении, в котором 
                      пациент находится в центре внимания, а планы и клинические бригады сотрудничают для
                      улучгения результатов в отношении здоровья.
                  </p>
              </div>
              <div id='contactss'>
                    <h3>
                        <strong>Контракты</strong>
                    </h3>
                   <div>
                        <p id='padd'>
                            +7(977) 156 17 19
                        </p>
                        <p>
                            chasthospit@mail.ru
                        </p>
                        <a href='https://clck.ru/AHLcE'>
                            <img src={yandex}/>
                        </a>
                        <a href='https://vk.com/login'>
                            <img id='vk' src={vk}/>
                        </a>
                    </div>
              </div>
              <div id='map'>
                <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A8203f0706315a9d7e6940ec3ce5efa1ebf231fdd241701822c25e9b34d85b85b&amp;source=constructor" frameborder="0"></iframe>
              </div>
          </div>
      </div>
    )
  }
}
