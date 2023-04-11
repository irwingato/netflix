
const API_KEY = "5eb3da233d676a59a9f8ed314c9075b5"
const API_DNS = "https://api.themoviedb.org/3"

export const categories = [
    {
        name: "trending",
        title: "Em Alta",
        path: "/trending/all/week?api_key="+API_KEY+"&language=pt-BR"
    },
    {
        name: "netflixOriginals",
        title: "Originais Netflix",
        path: "/discover/tv?api_key="+API_KEY+"&with_networks=213"
    },
    {
        name: "topRated",
        title: "Populares",
        path: "/movie/top_rated?api_key="+API_KEY+"&language=pt-BR"
    },
    {
        name: "comedy",
        title: "Comédias",
        path: "/discover/tv?api_key="+API_KEY+"&with_genres=35"
    },  
    {
        name: "romances",
        title: "Romances",
        path: "/discover/tv?api_key="+API_KEY+"&with_genres=10749"
    },                
    {
        name: "documentaries",
        title: "Documentários",
        path: "/discover/tv/api_key="+API_KEY+"&with_genres=99"
    }
]

export const getMovies = async (path) => {
    try{
        let url = API_DNS + path

        const response = fetch(url)

        return (await response).json()

    }catch (error) {
        console.log("error getMovies: ", error)
    }
    
}