import "./App.css"
import { Navegacao } from "./Navegacao"
import banner from "./assets/hashtaurante.webp"
import { ItemCardapio } from "./itemCardapio"

export function App() {
  return (
    <>
      <img className="capa" src={banner} alt="imagem do restaurante em Monaco, França, em frente ao mar" />
      <Navegacao />
      <div className="menu">
        <ItemCardapio 
          nome={}
          preco={}
          descricao={}
          imagem={}
          descricao={}
        />
      </div>
    </>
  )
}
