import React, { Component } from 'react'
import Busca from './components/Busca.jsx'

export default class App extends Component {
  render() {
    return (
      <div className='grid w-9 m-auto border-1 border-400'>
        <div className='col-12'>
          <h1>Exibir uma lista de...</h1>
        </div>
        <div className='col-12'>
          <Busca dica="Procurar..."/>
        </div>
      </div>
    )
  }
}