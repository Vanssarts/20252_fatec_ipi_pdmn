import Cartao from "./Cartao"
import Feedback from "./Feedback"
import Hippo from "./Hippo"
import Pedido from "./Pedido"

const App = () => {
  const textoOK = "Já chegou!"
  const textoNOK = "Ainda não chegou"
  const funcaoOK = () => alert("Obrigado pelo feedback")
  const funcaoNOK = () => alert("Verificaremos")
  const componenteFeedback = (
    <Feedback 
      textoOK={textoOK}
      textoNOK={textoNOK}
      funcaoOK={funcaoOK}
      funcaoNOK={funcaoNOK}/>
  )
  const pedidos = [
    {
      data: '22/08/2025',
      icone: 'fa-solid fa-hdd',
      titulo: 'SSD',
      descricao: 'SSD 512Gb'
    },
    {
      data: '21/08/2025',
      icone: 'fa-solid fa-book',
      titulo: 'Concrete Maths',
      descricao: 'Autor Donald Knuth'
    },
    {
      data: '21/08/2025',
      icone: 'fa-solid fa-hippo',
      titulo: 'Hipopótamo',
      descricao: 'Filhote de hipopótamo'
    },
    {
      data: '21/08/2025',
      icone: 'fa-solid fa-gem',
      titulo: 'Diamante',
      descricao: 'Diamante transparente'
    },
  ]
  return (
    <div className="container">
      <div className="row">
        <div className="col-12">
          <Hippo size='fa-4x'/>
          <span className="mx-1"></span>
          <Hippo 
            size='fa-3x'
            rotate='fa-flip-horizontal'/>
        </div>
      </div>
      <div className="row">
        {
          pedidos.map(pedido => (
            <div className="col-12 col-lg-6 col-xxl-3">
              <Cartao
                className="mb-2"
                cabecalho={pedido.data}>
                <Pedido              
                  icone={pedido.icone}
                  titulo={pedido.titulo}
                  descricao={pedido.descricao} />
                {componenteFeedback}
              </Cartao>
            </div>
          ))
        }
      </div>
    </div>
  )
}

export default App