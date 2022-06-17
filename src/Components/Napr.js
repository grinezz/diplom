import React, { Component } from 'react'
import './Napr.css'

export default class
  extends Component {
  constructor(props) {
    super(props);

    this.state = {
      specialities: []
    };
  }

  componentDidMount() {
    fetch("http://localhost/med/?specialities").then(r => r.json())
      .then(res => {
        this.setState({
          specialities: res
        })
      });
  }
  render() {
    return (
      <div id='glav'>
        <div>
          <h3 id='Napr'>Наши направления</h3>
        </div>
        <section id='Maindiv'>
          {
            this.state.specialities.map((el, i) =>
              <div key={i}>
                <h3>{el.name}</h3>
                <a href='#radnam'>Подробнее></a>
                <img src={el.icon} />
              </div>)
          }
        </section>
      </div>
    )
  }
}

