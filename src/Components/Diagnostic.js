import React, { Component } from 'react'
import './Diagnostic.css'
import Analize from '../assets/Analize.png'
import Galka from '../assets/Galka.png'
import MRT from '../assets/MRT.png'
import Yzi from '../assets/Yzi.png'
import Rentg from '../assets/Rentg.png'

export default class Diagnostic extends Component {
  render() {
    return (
        <section id='GlavBlock'>
            <div id='Zagl'>
                <h3>Диагностика</h3>
            </div>
            <div id='ForDiag'>
                <div id='FirstAna'>
                    <div>
                        <img className='GlavImage' src={Analize}/>
                    </div>
                    <div>
                        <h3>
                            Анализы
                        </h3>
                        <div className='DivBlocks'>
                            <img className='Opisan' src={Galka}/>
                            <p>Биохимические исследования крови</p>
                        </div>
                        <div className='DivBlocks'>
                            <img className='Opisan' src={Galka}/>
                            <p>Комплексный анализ крови</p>
                        </div>
                        <div className='DivBlocks'>
                            <img className='Opisan' src={Galka}/>
                            <p>Биохимический анализ мочи</p>
                        </div>
                        <div className='DivBlocks'>
                            <img className='Opisan' src={Galka}/>
                            <p>Анализ на анитела</p>
                        </div>
                    </div>
                </div>
                <div id='FirstAna'>
                    <div>
                        <img className='GlavImage' src={MRT}/>
                    </div>
                    <div>
                        <h3>
                            МРТ
                        </h3>
                        <div className='DivBlocks'>
                            <img className='Opisan' src={Galka}/>
                            <p>МРТ головного мозга, гипофиза, ангиография сосудов головного мозга</p>
                        </div>
                        <div className='DivBlocks'>
                            <img className='Opisan' src={Galka}/>
                            <p>МРТ мягких тканей шеи, ангиография сосудов шеи</p>
                        </div>
                        <div className='DivBlocks'>
                            <img className='Opisan' src={Galka}/>
                            <p>МРТ шейного, грудного, пояснично-крестцового отделов позвоночника</p>
                        </div>
                        <div className='DivBlocks'>
                            <img className='Opisan' src={Galka}/>
                            <p>МРТ малого таза, брюшной полости и забрюшинного пространства</p>
                        </div>
                    </div>
                </div>
                <div id='FirstAna'>
                    <div>
                        <img className='GlavImage' src={Yzi}/>
                    </div>
                    <div>
                        <h3>
                            Узи
                        </h3>
                        <div className='DivBlocks'>
                            <img className='Opisan' src={Galka}/>
                            <p>УЗИ брюшной полости</p>
                        </div>
                        <div className='DivBlocks'>
                            <img className='Opisan' src={Galka}/>
                            <p>УЗИ сердца и сосудов</p>
                        </div>
                        <div className='DivBlocks'>
                            <img className='Opisan' src={Galka}/>
                            <p>УЗИ суставов</p>
                        </div>
                        <div className='DivBlocks'>
                            <img className='Opisan' src={Galka}/>
                            <p>УЗИ молочных желёз</p>
                        </div>
                        <div className='DivBlocks'>
                            <img className='Opisan' src={Galka}/>
                            <p>УЗИ лимфатических узлов</p>
                        </div>
                    </div>
                </div>
                <div id='FirstAna'>
                    <div>
                        <img className='GlavImage' src={Rentg}/>
                    </div>
                    <div>
                        <h3>
                            Рентгенография
                        </h3>
                        <div className='DivBlocks'>
                            <img className='Opisan' src={Galka}/>
                            <p>Рентгенография костей и суставов</p>
                        </div>
                        <div className='DivBlocks'>
                            <img className='Opisan' src={Galka}/>
                            <p>Рентгенография черепа</p>
                        </div>
                        <div className='DivBlocks'>
                            <img className='Opisan' src={Galka}/>
                            <p>Рентген позвоночника</p>
                        </div>
                        <div className='DivBlocks'>
                            <img className='Opisan' src={Galka}/>
                            <p>Рентгенография грудной клетки</p>
                        </div>
                        <div className='DivBlocks'>
                            <img className='Opisan' src={Galka}/>
                            <p>Рентген околоносовых пазух</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
  }
}
