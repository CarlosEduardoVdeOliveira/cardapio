/* eslint-disable react/jsx-key */
import "./App.css"
import { Navegacao } from "./Navegacao"
import banner from "./assets/hashtaurante.webp"
import { ItemCardapio } from "./itemCardapio"
import {bebidas, pratosPrincipais, sobremesas} from './cardapio'

export function App() {
  return (
    <>
      <img className="capa" src={banner} alt="imagem do restaurante em Monaco, França, em frente ao mar" />
      <Navegacao />
      <div className="menu">
        {
         pratosPrincipais.map(prato =>(
          <ItemCardapio 
          nome={prato.nome}
          preco={prato.preco}
          descricao={prato.descricao}
          imagem={prato.imagem}
        />
         ))
        }
      </div>
    </>
  )
}
