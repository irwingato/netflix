import axios from "axios";

const API_DNS = "http://localhost:8080/Aplicacao_web_com_padroes_de_projeto";

export const categories = [
    {
        name: "trending",
        title: "Em Alta",
        path: "/trending/all/week",
        isLarge: true,
    },
    {
        name: "netflixOriginals",
        title: "Originais Netflix",
        path: "/discover/netflixOriginals",
        isLarge: false,
    },
    {
        name: "topRated",
        title: "Populares",
        path: "/movie/top_rated",
        isLarge: false,
    },
    {
        name: "comedy",
        title: "Comédias",
        path: "/discover/comedy",
        isLarge: false,
    },  
    {
        name: "romances",
        title: "Romances",
        path: "/discover/romances",
        isLarge: false,
    },                
    {
        name: "documentaries",
        title: "Documentários",
        path: "/discover/documentaries",
        isLarge: false,
    }
];

export const getMovies = async (path) => {
  try {
    const sessionID = sessionStorage.getItem("sessionID");
    const url = `${API_DNS}${path}?sessionID=${encodeURIComponent(sessionID)}`;
    console.log(url);

    const response = await axios.get(url, { withCredentials: true });

    return response.data;
  } catch (error) {
    console.log("error getMovies:", error);
    throw error;
  }
};