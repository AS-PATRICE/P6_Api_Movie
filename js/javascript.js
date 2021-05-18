const MOVIE_BASE_URL = 'http://localhost:8000/api/v1/titles/';


function getFetch(url) {
	return fetch(url)
	.then(response => {return response.json();})
	.catch(err => console.log("Problem with fetch:" + err));
}

function get_rad_movies_url_1(){
    let data = getFetch('http://localhost:8000/api/v1/titles/?sort_by=-imdb_score')
    data.then(value => {
      get_best_movie_info(value.results[0].url);
      get_rad_movie1_info(value.results[1].url);
      get_rad_movie2_info(value.results[2].url);
      get_rad_movie3_info(value.results[3].url);
      get_rad_movie4_info(value.results[4].url);
    }) 
}

function get_rad_movies_url_2(){
  let data = getFetch('http://localhost:8000/api/v1/titles/?page=2&sort_by=-imdb_score')
  data.then(value => {
    get_rad_movie5_info(value.results[0].url);
    get_rad_movie6_info(value.results[1].url);
    get_rad_movie7_info(value.results[2].url);
    
  }) 
}

function get_scfi_movies_url_1(){
  let data = getFetch('http://localhost:8000/api/v1/titles/?genre=Sci-Fi&sort_by=-imdb_score')
  data.then(value => {
    get_scfi_movie0_info(value.results[0].url);
    get_scfi_movie1_info(value.results[1].url);
    get_scfi_movie2_info(value.results[2].url);
    get_scfi_movie3_info(value.results[3].url);
    get_scfi_movie4_info(value.results[4].url);
    
  }) 
}

function get_scfi_movies_url_2(){
  let data = getFetch('http://localhost:8000/api/v1/titles/?genre=Sci-Fi&page=2&sort_by=-imdb_score')
  data.then(value => {
    get_scfi_movie5_info(value.results[0].url);
    get_scfi_movie6_info(value.results[1].url);
    
    
  }) 
}

function get_comedy_movies_url_1(){
  let data = getFetch('http://localhost:8000/api/v1/titles/?genre=Comedy&page=1&sort_by=-imdb_score')
  data.then(value => {
    get_comedy_movie0_info(value.results[0].url);
    get_comedy_movie1_info(value.results[1].url);
    get_comedy_movie2_info(value.results[2].url);
    get_comedy_movie3_info(value.results[3].url);
    get_comedy_movie4_info(value.results[4].url);
    
  }) 
}

function get_comedy_movies_url_2(){
  let data = getFetch('http://localhost:8000/api/v1/titles/?genre=Comedy&page=2&sort_by=-imdb_score')
  data.then(value => {
    get_comedy_movie5_info(value.results[0].url);
    get_comedy_movie6_info(value.results[1].url);
    
    
  }) 
}
// Best movie info
function get_best_movie_info(url){
    getFetch(url)
    .then((movie) => {
    document.querySelector('.best_movie_description').innerHTML = `${movie.description}`;
    document.querySelector('.best_movie_poster').innerHTML = `<img src=${movie.image_url}></img>`;
    document.querySelector('.best_movie_title').innerHTML = `${movie.title}`;
    document.querySelector('.best_movie_poster').addEventListener("click", function() {
      get_modal_movie_info(movie);
     });
    })
}
//############################  Top rad movies infos  #####################################
function get_rad_movie1_info(url){
  getFetch(url)
  .then((movie) => {
  document.getElementById('rad_movie_poster1').innerHTML = `<img src=${movie.image_url}></img>`;
  document.querySelector('#rad_movie_poster1').addEventListener("click", function() {
    get_modal_movie_info(movie);
   });
  })   
}

function get_rad_movie2_info(url){
  getFetch(url)
  .then((movie) => {
  document.getElementById('rad_movie_poster2').innerHTML = `<img src=${movie.image_url}></img>`;
  document.querySelector('#rad_movie_poster2').addEventListener("click", function() {
    get_modal_movie_info(movie);
   });
  })   
}


function get_rad_movie3_info(url){
  getFetch(url)
  .then((movie) => {
    document.getElementById('rad_movie_poster3').innerHTML = `<img src=${movie.image_url}></img>`;
  document.querySelector('#rad_movie_poster3').addEventListener("click", function() {
    get_modal_movie_info(movie);
   });
  })   
}

function get_rad_movie4_info(url){
  getFetch(url)
  .then((movie) => {
    document.getElementById('rad_movie_poster4').innerHTML = `<img src=${movie.image_url}></img>`;
  document.querySelector('#rad_movie_poster4').addEventListener("click", function() {
    get_modal_movie_info(movie);
   });
  })   
}

function get_rad_movie5_info(url){
  getFetch(url)
  .then((movie) => {
  document.getElementById('rad_movie_poster5').innerHTML = `<img src=${movie.image_url}></img>`;
  document.getElementById('rad_movie_poster5').addEventListener("click", function() {
    get_modal_movie_info(movie);
   });
  })   
}

function get_rad_movie6_info(url){
  getFetch(url)
  .then((movie) => {
  document.getElementById('rad_movie_poster6').innerHTML = `<img src=${movie.image_url}></img>`;
  document.getElementById('rad_movie_poster6').addEventListener("click", function() {
    get_modal_movie_info(movie);
   });
  })   
}

function get_rad_movie7_info(url){
  getFetch(url)
  .then((movie) => {
  document.getElementById('rad_movie_poster7').innerHTML = `<img src=${movie.image_url}></img>`;
  document.querySelector('#rad_movie_poster7').addEventListener("click", function() {
    get_modal_movie_info(movie);
   });
  })   
}

//############################  get science fiction movies infos  ##################################### 

function get_scfi_movie0_info(url){
  getFetch(url)
  .then((movie) => {
  document.getElementById('sce_fict_movie_poster1').innerHTML = `<img src=${movie.image_url}></img>`;
  document.getElementById('sce_fict_movie_poster1').addEventListener("click", function() {
    get_modal_movie_info(movie);
   });
  })   
}
function get_scfi_movie1_info(url){
  getFetch(url)
  .then((movie) => {
  document.getElementById('sce_fict_movie_poster2').innerHTML = `<img src=${movie.image_url}></img>`;
  document.getElementById('sce_fict_movie_poster2').addEventListener("click", function() {
    get_modal_movie_info(movie);
   });
  })   
}
function get_scfi_movie2_info(url){
  getFetch(url)
  .then((movie) => {
  document.getElementById('sce_fict_movie_poster3').innerHTML = `<img src=${movie.image_url}></img>`;
  document.getElementById('sce_fict_movie_poster3').addEventListener("click", function() {
    get_modal_movie_info(movie);
   });
  })   
}
function get_scfi_movie3_info(url){
  getFetch(url)
  .then((movie) => {
  document.getElementById('sce_fict_movie_poster4').innerHTML = `<img src=${movie.image_url}></img>`;
  document.getElementById('sce_fict_movie_poster4').addEventListener("click", function() {
    get_modal_movie_info(movie);
   });
  })   
}
function get_scfi_movie4_info(url){
  getFetch(url)
  .then((movie) => {
  document.getElementById('sce_fict_movie_poster5').innerHTML = `<img src=${movie.image_url}></img>`;
  document.getElementById('sce_fict_movie_poster5').addEventListener("click", function() {
    get_modal_movie_info(movie);
   });
  })   
}
function get_scfi_movie5_info(url){
  getFetch(url)
  .then((movie) => {
  document.getElementById('sce_fict_movie_poster6').innerHTML = `<img src=${movie.image_url}></img>`;
  document.getElementById('sce_fict_movie_poster6').addEventListener("click", function() {
    get_modal_movie_info(movie);
   });
  })   
}
function get_scfi_movie6_info(url){
  getFetch(url)
  .then((movie) => {
  document.getElementById('sce_fict_movie_poster7').innerHTML = `<img src=${movie.image_url}></img>`;
  document.getElementById('sce_fict_movie_poster7').addEventListener("click", function() {
    get_modal_movie_info(movie);
   });
  })   
}

//############################  get comedy movies infos  ##################################### 


function get_comedy_movie0_info(url){
  getFetch(url)
  .then((movie) => {
  document.getElementById('comedy_movie_poster1').innerHTML = `<img src=${movie.image_url}></img>`;
  document.getElementById('comedy_movie_poster1').addEventListener("click", function() {
    get_modal_movie_info(movie);
   });
  })   
}
function get_comedy_movie1_info(url){
  getFetch(url)
  .then((movie) => {
  document.getElementById('comedy_movie_poster2').innerHTML = `<img src=${movie.image_url}></img>`;
  document.getElementById('comedy_movie_poster2').addEventListener("click", function() {
    get_modal_movie_info(movie);
   });
  })   
}
function get_comedy_movie2_info(url){
  getFetch(url)
  .then((movie) => {
  document.getElementById('comedy_movie_poster3').innerHTML = `<img src=${movie.image_url}></img>`;
  document.getElementById('comedy_movie_poster3').addEventListener("click", function() {
    get_modal_movie_info(movie);
   });
  })   
}
function get_comedy_movie3_info(url){
  getFetch(url)
  .then((movie) => {
  document.getElementById('comedy_movie_poster4').innerHTML = `<img src=${movie.image_url}></img>`;
  document.getElementById('comedy_movie_poster4').addEventListener("click", function() {
    get_modal_movie_info(movie);
   });
  })   
}
function get_comedy_movie4_info(url){
  getFetch(url)
  .then((movie) => {
  document.getElementById('comedy_movie_poster5').innerHTML = `<img src=${movie.image_url}></img>`;
  document.getElementById('comedy_movie_poster5').addEventListener("click", function() {
    get_modal_movie_info(movie);
   });
  })   
}
function get_comedy_movie5_info(url){
  getFetch(url)
  .then((movie) => {
  document.getElementById('comedy_movie_poster6').innerHTML = `<img src=${movie.image_url}></img>`;
  document.getElementById('comedy_movie_poster6').addEventListener("click", function() {
    get_modal_movie_info(movie);
   });
  })   
}
function get_comedy_movie6_info(url){
  getFetch(url)
  .then((movie) => {
  document.getElementById('comedy_movie_poster7').innerHTML = `<img src=${movie.image_url}></img>`;
  document.getElementById('comedy_movie_poster7').addEventListener("click", function() {
    get_modal_movie_info(movie);
   });
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
    
    document.getElementById('action_movie_poster1').addEventListener("click", function() {
      get_modal_movie_info(movies[0]);
    });
    document.getElementById('action_movie_poster2').addEventListener("click", function() {
      get_modal_movie_info(movies[1]);
    });
    document.getElementById('action_movie_poster3').addEventListener("click", function() {
      get_modal_movie_info(movies[2]);
    });
    document.getElementById('action_movie_poster4').addEventListener("click", function() {
      get_modal_movie_info(movies[3]);
    });
    document.getElementById('action_movie_poster5').addEventListener("click", function() {
      get_modal_movie_info(movies[4]);
    });
})
}
function get_action_info2(){
    getFetch('http://localhost:8000/api/v1/titles/?genre=Action&page=2&sort_by=-imdb_score')
    .then((data) => {
    const movies = data.results;
    document.getElementById('action_movie_poster6').innerHTML = `<img src=${movies[0].image_url}></img>`;
    document.getElementById('action_movie_poster7').innerHTML = `<img src=${movies[1].image_url}></img>`;

    document.getElementById('action_movie_poster6').addEventListener("click", function() {
      get_modal_movie_info(movies[0]);
    });
    document.getElementById('action_movie_poster7').addEventListener("click", function() {
      get_modal_movie_info(movies[1]);
    });
})
}

// Top rate movies informations
get_rad_movies_url_1();
get_rad_movies_url_2();

// Top rate movies informations
get_scfi_movies_url_1();
get_scfi_movies_url_2();

// Top rate movies informations
get_comedy_movies_url_1();
get_comedy_movies_url_2();

// Top rate movies informations
get_action_info();
get_action_info2();


// ################################################   JS Modal section  ######################################################################

// Get DOM Elements
const modal = document.querySelector('#my_modal');

const closeBtn = document.querySelector('.close');

// Events
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

function get_modal_movie_info(movie){
  
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
  
  openModal();
}

