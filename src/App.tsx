import { useState } from 'react';

const Requisicao = () => {

  const [filmes, setFilmes] = useState([]);

  const handleCarregarFilmes = () => {

    fetch('https://api.b7web.com.br/cinema/').then((response) => {
      return response.json();
    })
    .then((json) =>{
      setFilmes(json);
    })

  }

  return (

    <div>
      <br />
      <button onClick={handleCarregarFilmes}>Carregar Filmes</button>

      <br />

      <div>

        <p>Total de Filmes: {filmes.length}</p>

      </div>
    </div>

  );
}

export default Requisicao;