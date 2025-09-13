import React, { Component } from 'react'

export class Loading extends Component {
  render() {
    return (
      // .d-flex.justify-content-center.align-items-center.border.rounded.p-3
      <div className="d-flex justify-content-center align-items-center border rounded p-3">
        <div 
          className='spinner-border text-primary'
          style={{width: '4rem', height: '4rem'}}
          role='status'>
            {/* span.visually-hidden{Carregando...} */}
            <span className="visually-hidden">
              Carregando...
            </span>
        </div>
      </div>

    )
  }
}

export default Loading