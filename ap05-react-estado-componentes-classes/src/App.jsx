import React from "react";
import Gato from "./Gato";
class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      latitude: null,
      longitude: null,
      estacao: null,
      data: null,
      icone: null,
      mensagemDeErro: null
    };
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
    return (
      <div className="container mt-2">
        <div className="row">
          <div className="col-12">
            <Gato tamanho="2"/>
            <Gato tamanho="2" direcao="horizontal"/>
          </div>
        </div>
        {}
        <div className="card">
          <div className="card-body">
          {}
            <div className="d-flex align-items-center border rounded mb-2" style={{height: "6rem"}}>
              <i className={`fa-solid fa-4x fa-${this.state.icone}`}></i>
              <p className="w-75 text-center ms-3 fs-1">{this.state.estacao}</p>
            </div>
            <div>
              <p className="text-center">
              {
                this.state.latitude ?
                `Coordenadas: ${this.state.latitude}, ${this.state.longitude} - Data: ${this.state.data}` :
                this.state.mensagemDeErro ? this.state.mensagemDeErro :
                `Clique no botão para obter sua estação climática.`
              }
              </p>
            </div>
            <button onClick={this.obterLocalizacao} className="btn btn-outline-primary w-100 mt-2">
              Qual é a minha estação?
            </button>
          </div>
        </div>
      </div>
    );
  }
}
export default App;