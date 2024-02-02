import {enroladinhoMignon} from "./cardapio"
export function ItemCardapio(){
  return (
    <div>
      <div>
        <h2>{enroladinhoMignon.nome}</h2>
        <p>{enroladinhoMignon.preco}</p>
        <p>{enroladinhoMignon.descricao}</p>
      </div>
    </div>
  )
}