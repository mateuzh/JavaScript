import "./componentes.css";
import axios from "axios";
import { useState, useEffect } from "react";

function Individuos() {
  //Entidades e listas utilizadas na página
  const [individuo, setIndividuo] = useState(null);
  const [individuos, setIndividuos] = useState([]);

  //Funções de carregamento de dados do backend
  function getIndividuos() {
    axios.get("http://localhost:3005/individuos").then((resposta) => {
      setIndividuos(resposta.data);
    });
  }

  useEffect(() => {
    getIndividuos();
  }, []);

  //Funções para manipulação da entidade principal
  function novoIndividuo() {
    setIndividuo({
      codigo: "",
      nome: "",
    });
  }

  function alterarIndividuo(campo, valor, id){
    
    setIndividuo({
      _id: id,
      [campo]: valor,
    });
  }

  function excluirIndividuo(id){
    axios.delete("http://localhost:3005/individuos/" + id).then(() => {
      reiniciarEstadoDosObjetos();
    });
  }

  function salvarIndividuo() {
    if (individuo._id) {
      axios.put("http://localhost:3005/individuos/" + individuo._id, individuo).then(() => {
        reiniciarEstadoDosObjetos();
      });
    } else {
      axios.post("http://localhost:3005/individuos", individuo).then(() => {
        reiniciarEstadoDosObjetos();
      });
    }
  }

  function reiniciarEstadoDosObjetos() {
    setIndividuo(null);
    getIndividuos();
  }

  //Função para geração do formulário
  function getFormulario() {
    return (
      <form>
        <label>Código</label>
        <input
          type="text"
          name="codigo"
          value={individuo.codigo}
          onChange={(e) => {
            alterarIndividuo(e.target.name, e.target.value, individuo._id);
          }}
        />
        <label>Nome</label>
        <input
          type="text"
          name="nome"
          value={individuo.nome}
          onChange={(e) => {
            alterarIndividuo(e.target.name, e.target.value, individuo._id);
          }}
        />
        
        <button 
          type="button"
          onClick={() => {
            salvarIndividuo();
          }}
        >
          Salvar</button>
        <button
          type="button"
          onClick={() => {
            setIndividuo(null);
          }}
        >
          Cancelar
        </button>
      </form>
    );
  }

  //Funções para geração da tabela
  function getLinhaDaTabela(individuo) {
    return (
      <tr key={individuo._id}>
        <td>{individuo._id}</td>
        <td>{individuo.codigo}</td>
        <td>{individuo.nome}</td>
        <td>
          <button 
            type="button"
            onClick={() => {
              if (
                window.confirm(
                  "Confirmar a exclusão da área " + individuo.nome + "?"
                )
              ) {
                excluirIndividuo(individuo._id);
              }
            }}
          >
            Excluir</button>
          <button 
            type="button"
            onClick={() => {
              setIndividuo(individuo);
            }}
          >
            Editar</button>
        </td>
      </tr>
    );
  }

  function getLinhasDaTabela() {
    const linhasDaTabela = [];
    for (let i = 0; i < individuos.length; i++) {
      const individuo = individuos[i];
      linhasDaTabela[i] = getLinhaDaTabela(individuo);
    }
    return linhasDaTabela;
  }

  function getTabela() {
    return (
      <table>
        <tbody>
          <tr>
            <th>ID</th>
            <th>Código</th>
            <th>Nome</th>
            <th>Ações</th>
          </tr>
          {getLinhasDaTabela()}
        </tbody>
      </table>
    );
  }

  //Função do conteúdo principal
  function getConteudo() {
    if (individuo == null) {
      return (
        <>
          <button
            type="button"
            onClick={() => {
              novoIndividuo();
            }}
          >
            Novo indivíduo
          </button>
          {getTabela()}
        </>
      );
    } else {
      return getFormulario();
    }
  }

  return (
    <div className="cadastros">
      <div className="conteudo">{getConteudo()}</div>
    </div>
  );
}

export default Individuos;
