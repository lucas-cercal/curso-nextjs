import Titulo from '../../components/Titulo'

export default function usandoTitulo() {
  return (
    <div>
     <Titulo 
      principal="Página de cadastro"
      secundario="Incluir, alterar e excluir"
     />
     <Titulo 
      principal="Página de login"
      secundario="Informe o seu e-mail e senha"
      pequeno={true}
     />
     <Titulo 
      principal="Página de login"
      secundario="Informe o seu e-mail e senha"
      pequeno
     />
    </div>
  )
}