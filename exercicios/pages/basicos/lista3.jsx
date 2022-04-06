export default function listagem() {
  return criarSpan(10)
}

function criarSpan(quantidade) {
  const lista = []

  for(let x=1; x<=quantidade; x++) {
    lista[x] = <span>{x}, </span>
  }

  return lista
}