import React from "react"
import Gato from "./Gato"
import EstacaoClimatica from "./EstacaoClimatica"
import Loading from "./Loading"
class App extends React.Component{

  constructor(props){
    super(props)
    // this.state = {
    //   latitude: null,
    //   longitude: null,
    //   estacao: null,
    //   data: null,
    //   icone: null,
    //   mensagemDeErro: null    
    // }
    console.log('constructor')
  }

  state = {
    latitude: null,
    longitude: null,
    estacao: null,
    data: null,
    icone: null,
    mensagemDeErro: null
  }

  componentDidMount(){
    console.log('componentDidMount')
    this.obterLocalizacao()
  }

  componentDidUpdate(){
    console.log('componentDidUpdate')
  }

  componentWillUnmount(){
    console.log('componentWillUnmount')
  }

  icones = {
    'Primavera': 'flower',
    'Verão': 'sun',
    'Outono': 'leaf',
    'Inverno': 'snowflake'
  }
  obterEstacao = (dataAtual, latitude) => {
    //ano, mês(0 a 11), dia(1 a 31)
    const anoAtual = dataAtual.getFullYear()
    // 21/06
    const d1 = new Date(anoAtual, 5, 21)
    //24/09
    const d2 = new Date(anoAtual, 8, 24)
    //22/12
    const d3 = new Date(anoAtual, 11, 22)
    //21/03
    const estaNoSul = latitude < 0
    if (dataAtual >= d1 && dataAtual < d2)
      return estaNoSul ? "Inverno" : "Verão"
    //fazer mais dois ifs
    //e terminar com um ternario sem if
    if(dataAtual >= d2 && dataAtual < d3)
      return estaNoSul ? "Primavera" : "Outono"
    if(dataAtual >= d3 || dataAtual < d1)
      return estaNoSul ? "Verão" : "Inverno"
    return estaNoSul ? "Outono" : "Primavera"

  }

  obterLocalizacao = () => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        const dataAtual = new Date()
        const estacao = this.obterEstacao(dataAtual, position.coords.latitude)
        const icone = this.icones[estacao]
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          estacao: estacao,
          data: dataAtual.toLocaleString(),
          icone: icone  
        })
      },
      (erro) => {
        console.log(erro)
        this.setState({mensagemDeErro: 'Tente novamente mais tarde'})
      }
    )  
  }

  render(){
    console.log('render')
    return(
      <div className="container mt-2">
        <div className="row">
          <div className="col-12">
            <Gato tamanho="3"/>
            <Gato tamanho="3" direcao="horizontal" />
          </div>
        </div>
        {/* .card>.card-body */}
        <div className="row">
          <div className="col-12">
            {
              (!this.state.latitude && !this.state.mensagemDeErro) ?
                <Loading texto='Por favor, libere o acesso à sua localização.'/>
              :
              this.state.mensagemDeErro ?
              // p.border.rounded.p-2.fs-1.text-center
              <p className="border rounded p-2 fs-1 text-center">
                É preciso dar permissão de acesso à localização. Atualize a página e tente de novo, ajustando a configuração no seu navegador.
              </p>
              :
              <EstacaoClimatica
                latitude={this.state.latitude}
                longitude={this.state.longitude}
                estacao={this.state.estacao}
                icone={this.state.icone}
                obterLocalizacao={this.obterLocalizacao} />
            }
          </div>
        </div>
      </div>
    )
  }
}

export default App