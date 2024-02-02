export function Navegacao() {
  return (
    <div>
      <input type="radio" name="opcao-pagina" id="pagina-0" defaultChecked />
      <label htmlFor="">Pratos Principais</label>
      <input type="radio" name="opcao-pagina" id="pagina-1" />
      <label htmlFor="">Sobremesas</label>
      <input type="radio" name="opcao-pagina" id="pagina-2" />
      <label htmlFor="">Bebidas</label>
    </div>
  )
}