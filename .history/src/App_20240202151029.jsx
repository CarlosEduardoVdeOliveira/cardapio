/* eslint-disable react/jsx-key */
import "./App.css"
import { Navegacao } from "./Navegacao"
import banner from "./assets/hashtaurante.webp"
import { ItemCardapio } from "./itemCardapio"
import { pratosPrincipais, bebidas, sobremesas } from './cardapio'

export function App() {
  const paginas = [pratosPrincipais, bebidas, sobremesas]
  const paginaMenu = 0
  return (
    <>
      <img className="capa" src={banner} alt="imagem do restaurante em Monaco, França, em frente ao mar" />
      <Navegacao />
      <div className="menu">
        {
          paginas[paginaMenu].map(item =>(
            <ItemCardapio 
              nome={item.nome}
              preco={item.preco}
              descricao={item.descricao}
              imagem={item.imagem}
            />
          ))
        }
      </div>
    </>
  )
}
