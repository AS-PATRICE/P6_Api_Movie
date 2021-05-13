const MOVIE_BASE_URL = 'http://localhost:8000/api/v1/titles/';


function getFetch(url) {
	return fetch(url)
	.then(response => {return response.json();})
	.catch(err => console.log("Problem with fetch:" + err));
}

function get_best_movie_url(){
    let data = getFetch('http://localhost:8000/api/v1/titles/?sort_by=-imdb_score')
    data.then(value => {
      get_best_movie_info(value.results[0].url)
      get_modal_movie_info(value.results[0].url)

    }) 
}
// Best movie info
function get_best_movie_info(url){
    getFetch(url)
    .then((movie) => {
    document.querySelector('.best_movie_description').innerHTML = `${movie.description}`;
    document.querySelector('.best_movie_poster').innerHTML = `<img src=${movie.image_url}></img>`;
    document.querySelector('.best_movie_title').innerHTML = `${movie.title}`;
    })
}

function get_modal_movie_info(url){
  getFetch(url)
  .then((movie)=>{
  document.getElementById('movie_poster').innerHTML = `<img src=${movie.image_url}></img>`;
  document.getElementById('movie_poster').innerHTML = `<img src=${movie.image_url}></img>`;
  document.getElementById('movie_title').innerHTML = `${movie.title}`;
  document.getElementById('movie_genres').innerHTML = `${movie.genres}`;
  document.getElementById('movie_year').innerHTML = `${movie.year}`;
  document.getElementById('movie_imdb_score').innerHTML = `${movie.imdb_score}`;
  document.getElementById('movie_directors').innerHTML = `${movie.directors}`;
  document.getElementById('movie_actors').innerHTML = `${movie.actors}`;
  document.getElementById('movie_duration').innerHTML = `${movie.duration}`;
  document.getElementById('movie_countries').innerHTML = `${movie.countries}`;
  document.getElementById('movie_votes').innerHTML = `${movie.votes}`;
  document.getElementById('movie_long_description').innerHTML = `${movie.long_description}`;
  })
}


function get_top_rate_movie_info(){
    getFetch('http://localhost:8000/api/v1/titles/?sort_by=-imdb_score')

    .then((data) => {
    const movies = data.results; 
    document.getElementById('rad_movie_poster1').innerHTML = `<img src=${movies[1].image_url}></img>`;
    document.getElementById('rad_movie_poster2').innerHTML = `<img src=${movies[2].image_url}></img>`;
    document.getElementById('rad_movie_poster3').innerHTML = `<img src=${movies[3].image_url}></img>`;
    document.getElementById('rad_movie_poster4').innerHTML = `<img src=${movies[4].image_url}></img>`;
})
}
function get_top_rate_movie_info_end(){
    getFetch('http://localhost:8000/api/v1/titles/?page=2&sort_by=-imdb_score')
    .then((data) => {
    const movies = data.results;
    console.log(movies) 
    document.getElementById('rad_movie_poster5').innerHTML = `<img src=${movies[0].image_url}></img>`;
    document.getElementById('rad_movie_poster6').innerHTML = `<img src=${movies[1].image_url}></img>`;
    document.getElementById('rad_movie_poster7').innerHTML = `<img src=${movies[2].image_url}></img>`; 
})
}

function get_sce_fi_info(){
    getFetch('http://localhost:8000/api/v1/titles/?genre=Sci-Fi&sort_by=-imdb_score')
    .then((data) => {
    const movies = data.results;
    document.getElementById('sce_fict_movie_poster1').innerHTML = `<img src=${movies[0].image_url}></img>`;
    document.getElementById('sce_fict_movie_poster2').innerHTML = `<img src=${movies[1].image_url}></img>`;
    document.getElementById('sce_fict_movie_poster3').innerHTML = `<img src=${movies[2].image_url}></img>`;
    document.getElementById('sce_fict_movie_poster4').innerHTML = `<img src=${movies[3].image_url}></img>`;
    document.getElementById('sce_fict_movie_poster5').innerHTML = `<img src=${movies[4].image_url}></img>`;
})
}
function get_sce_fi_info2(){
    getFetch('http://localhost:8000/api/v1/titles/?genre=Sci-Fi&page=2&sort_by=-imdb_score')

    .then((data) => {
    const movies = data.results;
    document.getElementById('sce_fict_movie_poster6').innerHTML = `<img src=${movies[0].image_url}></img>`;
    document.getElementById('sce_fict_movie_poster7').innerHTML = `<img src=${movies[1].image_url}></img>`;
})
}

function get_comedy_info(){
    getFetch('http://localhost:8000/api/v1/titles/?genre=Comedy&sort_by=-imdb_score')
    .then((data) => {
    const movies = data.results;
    
    document.getElementById('comedy_movie_poster1').innerHTML = `<img src=${movies[0].image_url}></img>`;
    document.getElementById('comedy_movie_poster2').innerHTML = `<img src=${movies[1].image_url}></img>`;
    document.getElementById('comedy_movie_poster3').innerHTML = `<img src=${movies[2].image_url}></img>`;
    document.getElementById('comedy_movie_poster4').innerHTML = `<img src=${movies[3].image_url}></img>`;
    document.getElementById('comedy_movie_poster5').innerHTML = `<img src=${movies[4].image_url}></img>`;
    // document.getElementById('comedy_movie_poster6').innerHTML = `<img src=${movies[4].image_url}></img>`;
    // document.getElementById('comedy_movie_poster7').innerHTML = `<img src=${movies[4].image_url}></img>`;
})
}

function get_comedy_info2(){
    getFetch('http://localhost:8000/api/v1/titles/?genre=Comedy&sort_by=-imdb_score')
    .then((data) => {
    const movies = data.results;
    document.getElementById('comedy_movie_poster6').innerHTML = `<img src=${movies[0].image_url}></img>`;
    document.getElementById('comedy_movie_poster7').innerHTML = `<img src=${movies[1].image_url}></img>`;

})
}

function get_action_info(){
    getFetch('http://localhost:8000/api/v1/titles/?genre=Action&sort_by=-imdb_score')
    .then((data) => {
    const movies = data.results;
    document.getElementById('action_movie_poster1').innerHTML = `<img src=${movies[0].image_url}></img>`;
    document.getElementById('action_movie_poster2').innerHTML = `<img src=${movies[1].image_url}></img>`;
    document.getElementById('action_movie_poster3').innerHTML = `<img src=${movies[2].image_url}></img>`;
    document.getElementById('action_movie_poster4').innerHTML = `<img src=${movies[3].image_url}></img>`;
    document.getElementById('action_movie_poster5').innerHTML = `<img src=${movies[4].image_url}></img>`;
    // document.getElementById('comedy_movie_poster6').innerHTML = `<img src=${movies[4].image_url}></img>`;
    // document.getElementById('comedy_movie_poster7').innerHTML = `<img src=${movies[4].image_url}></img>`;
})
}
function get_action_info2(){
    getFetch('http://localhost:8000/api/v1/titles/?genre=Action&sort_by=-imdb_score')
    .then((data) => {
    const movies = data.results;
    document.getElementById('action_movie_poster6').innerHTML = `<img src=${movies[0].image_url}></img>`;
    document.getElementById('action_movie_poster7').innerHTML = `<img src=${movies[1].image_url}></img>`;
})
}
// Best movies informations
// get_best_movie_info();
get_best_movie_url()
// Top rate movies informations
get_top_rate_movie_info();
get_top_rate_movie_info_end();
// Top rate movies informations
get_sce_fi_info();
get_sce_fi_info2()
// Top rate movies informations
get_comedy_info();
get_comedy_info2();
// Top rate movies informations
get_action_info();
get_action_info2();


// ################################################   JS Modal section  ######################################################################

// Get DOM Elements
const modal = document.querySelector('#my_modal');
const modalOpen = document.querySelector('.best_movie_poster');
const closeBtn = document.querySelector('.close');

// Events
modalOpen.addEventListener('click', openModal);
closeBtn.addEventListener('click', closeModal);
window.addEventListener('click', outsideClick);

// Open
function openModal() {
  modal.style.display = 'block';
}

// Close
function closeModal() {
  modal.style.display = 'none';
}

// Close If Outside Click
function outsideClick(e) {
  if (e.target == modal) {
    modal.style.display = 'none';
  }
}
