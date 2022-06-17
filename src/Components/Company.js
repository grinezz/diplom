import React, { Component } from 'react'
import './Company.css'

export default class Company extends Component {
    constructor(props) {
        super(props);

        this.state = {
            doctors: []
        };
    }

    componentDidMount() {
        fetch("http://localhost/med/?doctors").then(r => r.json())
            .then(res => {
                this.setState({
                    doctors: res
                })
            });
    }
    render() {
        return (
            <div id='glavv'>
                <div>
                    <h3 id='Spec'>Ключевые специалисты</h3>
                </div>
                <section id='Compan'>
                    {
                        this.state.doctors.map((el, i) =>
                            <div key={i}>
                                <img
                                    src={el.photo} alt='doctor'
                                />
                                <section className='Opis'>
                                    <h3>{el.fio}</h3>
                                    <p>{el.speciality}</p>
                                    <span>
                                        {el.description}
                                    </span>
                                </section>
                            </div>)
                    }
                </section>
            </div>
        )
    }
}
