//const
const MOVIE_BASE_URL = 'http://localhost:8000/api/v1/titles/';


let bestMovieContainer = document.getElementById('#best-Movie-Container');
let urlBestMovie = 'http://127.0.0.1:8000/api/v1/titles/9008642';



// gestion de l'espace d'affichage des infos sur le films le plus noté
function movieContainer(movies){
    movieElement = document.createElement('div');
    movieElement.setAttribute('class', 'movie');
    //
    const bestMovieTemplate = `
        <section class="section">
        ${movies.map((movie)=>{
            return `
                <img src= ${movie.image_url}data-movie-id=${movie.id}/>
            `;
        })}
        </section>
    `;
    movieElement.innerHTML = bestMovieTemplate;
    return movieElement;
};


fetch(urlBestMovie)
    .then((resp) => resp.json())// promise avec json
    .then((data) => {// recupération des data
        const movies = data.results;
        const bestMovieBlock = movieContainer(movies);
        bestMovieContainer.appendChild(bestMovieBlock);
        console.log('data: ', data);
    })
    .catch((error)=>{// gestion des erreurs
       console.log('error: ', error);
    });
console.log('value: ', value);

