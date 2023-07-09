import './App.css';
import Row from "./components/Row"
import Banner from "./components/Banner"
import Nav from "./components/Nav"
import axios from 'axios'
import { categories, getMovies } from './api';
import { useState, useEffect } from 'react';

//Novo branch

function App() {
  const [loggedIn, setLoggedIn] = useState(false);
  const [movies, setMovies] = useState([]);
  const [age, setAge] = useState('');

  // Função para fazer login
  const login = async (email, password, age) => {

    try {
      const response = await axios.post("http://localhost:8080/Aplicacao_web_com_padroes_de_projeto/LoginServlet", {
        email: email,
        senha: password,
        idade: age
      });

      const sessionID = response?.data?.sessionID;

      if (sessionID) {
        // Login bem-sucedido, define o estado como logado
        setLoggedIn(true);
        sessionStorage.setItem("sessionID", sessionID);
      } else {
        // Falha no login, exibe mensagem de erro ou realiza alguma ação apropriada
        console.log("Falha no login");
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Função para obter filmes
  const fetchMovies = async () => {
    try {
      const sessionID = sessionStorage.getItem("sessionID");
      if (!sessionID) {
        console.log("Não está logado");
        return;
      }

      const response = await axios.post("http://localhost:8080/controle/test", {
        sessionID: sessionID
      });

      const moviesData = response?.data?.movies;

      if (moviesData) {
        // Filmes obtidos com sucesso, define o estado dos filmes
        setMovies(moviesData);
      } else {
        // Falha ao obter filmes, exibe mensagem de erro ou realiza alguma ação apropriada
        console.log("Falha ao obter filmes");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  }


  useEffect(() => {
    // Verifica se há uma sessão de login
    const sessionID = sessionStorage.getItem("sessionID");
    if (sessionID) {
      setLoggedIn(true);
    }
  }, []);

  useEffect(() => {
    // Se estiver logado, busca os filmes
    if (loggedIn) {
      fetchMovies();
    }
  }, [loggedIn]);

  return (
    <div className="App">
      <Nav></Nav>
      <Banner></Banner>

      {loggedIn ? (
        categories.map((category) => (
          <Row
            key={category.name}
            title={category.title}
            path={category.path}
            isLarge={category.isLarge}
          />
        ))
      ) : (
        <div>
          <label style={{ color: 'white' }}>Email:</label> <input type="text" name="email" id="email" style={{ backgroundColor: 'lightgray', color: 'black' }} />
          <label style={{ color: 'white' }}>Senha:</label> <input type="password" name="password" id="password" style={{ backgroundColor: 'lightgray', color: 'black' }} />
          <label style={{ color: 'white' }}>Idade:</label> <input type="text" name="age" id="age" style={{ backgroundColor: 'lightgray', color: 'black' }} onChange={handleAgeChange} />

          <button
            onClick={() => {
              const email = document.getElementById("email").value;
              const password = document.getElementById("password").value;
              const idadeElement = document.getElementById("age"); // Obtém o elemento com o ID "age"
              const idade = idadeElement ? idadeElement.value : ''; // Verifica se o elemento existe antes de acessar sua propriedade value
              login(email, password, idade);
            }}
          >
            Logar
          </button>
        </div>
      )}
    </div>
  );
}

export default App;
