import React, { Component } from 'react'
import { Button } from 'primereact/button'
import { IconField } from 'primereact/iconfield';
import { InputIcon } from 'primereact/inputicon';
import { InputText } from 'primereact/inputtext';

export default class Busca extends Component {

  state = {
    termoDeBusca: ''
  }

  onTermoAlterado = (evento) => {
    //console.log(evento.target.value)
    this.setState({termoDeBusca: evento.target.value})
  }

  onFormSubmit = (evento) => {
    evento.preventDefault()  
  }

  render() {
    return (
      <form>
        <div className='flex flex-column'>
          <IconField
            className='w-full'
            iconPosition='left'/>
              <InputIcon className='pi pi-search'/>
              <InputText
                value={this.state.termoDeBusca}
                onChange={this.onTermoAlterado}
                className='w-full'
                placeholder={this.props.dica}/>
              <Button
                className='mt-3'
                label='OK'/>
        </div>
      </form>
    )
  }
}

Busca.defaultProps = {
    dica: 'Buscar...'
}