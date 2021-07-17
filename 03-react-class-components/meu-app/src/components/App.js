import React, { useState, useEffect } from 'react';

export default function App(){
  const [nome, setNome] = useState(undefined)

  useEffect(
    () => {
      if(nome === undefined) {
        setNome(sessionStorage.getItem('nome') || '')
      }
      else{
        sessionStorage.setItem('nome', nome)
      }
    }, [nome]
  )

  return (
    <>
      Nome: <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
      <br />
      Olá, {nome}
    </>
  )
}

/* class App extends React.Component {
  
  render(){
    return (
      <>
        <p>
          Meu primeiro parágrafo.
        </p>
        <p>
          Meu segundo parágrafo.
        </p>
        <p>
          { new Date().toLocaleDateString('pt-BR') }
        </p>
      </>
    )
  }
}

export default App; */