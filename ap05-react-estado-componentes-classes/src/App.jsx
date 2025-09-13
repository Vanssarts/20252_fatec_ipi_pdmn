import React from "react";
import Gato from "./Gato";
import { EstacaoClimatica } from "./EstacaoClimatica";
import Loading from "./Loading";
class App extends React.Component {

  constructor(props) {
    super(props);
    //this.state = {
    //  latitude: null,
    //  longitude: null,
    //  estacao: null,
    //  data: null,
    //  icone: null,
    //  mensagemDeErro: null
    // };
    console.log("construtor");
  }

  state = {
    latitude: null,
    longitude: null,
    estacao: null,
    data: null,
    icone: null,
    mensagemDeErro: null
  }

  componentDidMount() {
    console.log("componentDidMount");
    //this.obterLocalizacao();
  }
  
  componentDidUpdate() {
    console.log("componentDidUpdate");
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
  }

  icone = {
    "Verão": "umbrella-beach",
    "Outono": "tree",
    "Inverno": "snowflake",
    "Primavera": "seedling"
  }

  obterEstacao = (dataAtual, latitude) => {

    const anoAtual = dataAtual.getFullYear();
    const d1 = new Date(anoAtual, 5, 21);
    const d2 = new Date(anoAtual, 8, 24);
    const d3 = new Date(anoAtual, 11, 22);
    const d4 = new Date(anoAtual, 2, 21);

    const estaNoSul = latitude < 0 ? true : false;

    if (dataAtual >= d1 && dataAtual < d2) {
      return estaNoSul ? "Inverno" : "Verão";
    }

    if (dataAtual >= d2 && dataAtual < d3) {
      return estaNoSul ? "Primavera" : "Outono";
    }

    if (dataAtual >= d3 && dataAtual < d4) {
      return estaNoSul ? "Verão" : "Inverno";
    }

    return estaNoSul ? "Outono" : "Primavera";
  }

  obterLocalizacao = () => {
    window.navigator.geolocation.getCurrentPosition(
      (position) => {
        const dataAtual = new Date();
        const estacao = this.obterEstacao(dataAtual, position.coords.latitude);
        const icone = this.icone[estacao];
        this.setState({
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
          estacao: estacao,
          data: dataAtual.toLocaleDateString(),
          icone: icone
        })
      },
      () => {
        this.setState({mensagemDeErro: 'Tente novamente mais tarde.'})
      }
    )
  }

  render() {
    console.log("render");
    return (
      <div className="container mt-2">
        <div className="row">
          <div className="col-12">
            <Gato tamanho="2"/>
            <Gato tamanho="2" direcao="horizontal"/>
          </div>
        </div>
        {}
        <div className="row">
          <div className="col-12">
            {
              (!this.state.latitude && !this.state.mensagemDeErro) ?
               <Loading />
              :
              this.state.mensagemDeErro ?
              <p className="border rounded p-2 fs-1 text-center">
                É preciso dar permissão para obter a localização. 
                Atualize a página e tente de novo, ajustando
                a configuração do seu navegador.
              </p> :
            <EstacaoClimatica 
              latitude={this.state.latitude}
              longitude={this.state.longitude}
              estacao={this.state.estacao}
              icone={this.state.icone}
              obterLocalizacao={this.obterLocalizacao}
            />
            }
          </div>
        </div>
      </div>
    );
  }
}
export default App;