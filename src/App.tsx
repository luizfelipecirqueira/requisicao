import { useState } from 'react';
import './Filme.css';
import { Filme } from './types/Filme';

const Requisicao = () => {

  const [filmes, setFilmes] = useState<Filme[]>([]);
  const [loading, setLoading] = useState(false);


  /* Carregar filmes sem precisar clicar no botão
  useEffect(() =>{
    handleCarregarFilmes();
  }, [])*/

  const handleCarregarFilmes = async () => {
    try{
      setLoading(true);
      let response = await fetch('https://api.b7web.com.br/cinema/');
      let json = await response.json();
      setLoading(false);
      setFilmes(json);
    }
    catch(e){
      setLoading(false);
      alert('Erro! Tente novamente mais tarde!');
      console.error(e);
    }
  }
  
  /*fetch('https://api.b7web.com.br/cinema/').then((response) => {
      return response.json();
    })
      .then((json) => {
        setFilmes(json);
      }).catch((e) => {
        setLoading(false);
        setFilmes([]);
        alert('Erro! Tente novamente mais tarde!');
        console.error(e);
      })
  }*/

  return (

    <div>
      <br />
      <button onClick={handleCarregarFilmes}>Carregar Filmes</button>

      <br />

      {loading &&
        <div>Carregando...</div>
      }

      {!loading &&
        <div>

        <p>Total de Filmes: {filmes.length}</p>

        <div className="filmes">
          {filmes.map((item, index) => (
            <div key={index}>
              <img src={item.avatar} />
              <p>{item.titulo}</p>
            </div>
          ))}
        </div>
      </div>
      }
    </div>

  );
}

export default Requisicao;