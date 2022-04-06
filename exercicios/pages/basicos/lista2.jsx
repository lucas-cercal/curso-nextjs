export default function listagem() {
  let contagem = 1
  const listaSimplesV2 = (
    <div>
      <span>{contagem * 1}, </span>
      <span>{contagem * 2}, </span>
      <span>{contagem * 3}, </span>
      <span>{contagem * 4}, </span>
      <span>{contagem * 5}, </span>
      <span>{contagem * 6}, </span>
      <span>{contagem * 7}, </span>
      <span>{contagem * 8}, </span>
      <span>{contagem * 9}, </span>
      <span>{contagem * 10} </span>
    </div>
  )
  return listaSimplesV2
}