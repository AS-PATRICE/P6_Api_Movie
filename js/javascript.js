const url_best_movie = 'http://localhost:8000/api/v1/titles/?sort_by=-imdb_score'
const url_top_rad = 'http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&page='
const url_sci_fi = 'http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&genre=Sci-Fi&page='
const url_comedy = 'http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&genre=Comedy&page='
const url_action = 'http://localhost:8000/api/v1/titles/?sort_by=-imdb_score&genre=Action&page='


function getFetch(url) {
	return fetch(url)
	.then(response => {return response.json();})
	.catch(err => console.log("Problem with fetch:" + err));
}

// ********************  BEST MOVIE SECTION  ********************
function get_best_movie_url(url){
  let data = getFetch(url)
  data.then(value => {
   get_best_movie_info(value.results[0].url);    
    
  });
}

function get_best_movie_info(url){
  let data = getFetch(url)
  .then((movie) => {
  document.querySelector('.best_movie_description').innerHTML = `${movie.description}`;
  document.querySelector('.best_movie_poster').innerHTML = `<img src=${movie.image_url}></img>`;
  document.querySelector('.best_movie_title').innerHTML = `${movie.title}`;
  document.querySelector('.buttons').addEventListener("click", function() {
    get_modal_movie_info(movie);
   });
  })
}

// ********************  TOP RATED MOVIES SECTION  ********************
function get_rated_movie_url(url,idElement,page){
  let data = getFetch(url+page)
  data.then(value => {
    
    value.results.forEach((item, index) => {
      console.log(item.url); 
      console.log(index);
      if(page == 1 && index > 0){
        get_movie_info(item.url,idElement+ (index));
      }
      else{
        if (page == 2){
          if (index < 3) {
          get_movie_info(item.url,idElement+ (index+5));
        }
        }
 
      }

    })
    
  }) 
}

// ********************  SCE-FI, COMEDY AND ACTION  MOVIES SECTION  ********************

function get_movie_url(url,idElement,page){
  let data = getFetch(url+page)
  data.then(value => {
    
    value.results.forEach((item, index) => {
     
      if(page == 1){
        get_movie_info(item.url,idElement+ (index+1));
      }
      else{
        if (index < 2) {
          get_movie_info(item.url,idElement+ (index+1+5));
        }
      }
    
    })
    
  }) 
}


function get_movie_info(url,idElement){
  getFetch(url)
  .then((movie) => {
  document.getElementById(idElement).innerHTML = `<img src=${movie.image_url}></img>`;
  document.getElementById(idElement).addEventListener("click", function() {
    get_modal_movie_info(movie);
   });
  })   
}

get_best_movie_url(url_best_movie);
get_rated_movie_url(url_top_rad,"rad_movie_poster",1);
get_rated_movie_url(url_top_rad,"rad_movie_poster",2);
get_movie_url(url_sci_fi,"sce_fict_movie_poster",1);
get_movie_url(url_sci_fi,"sce_fict_movie_poster",2);
get_movie_url(url_comedy,"comedy_movie_poster",1);
get_movie_url(url_comedy,"comedy_movie_poster",2);
get_movie_url(url_action,"action_movie_poster",1);
get_movie_url(url_action,"action_movie_poster",2);



// ********************  MODAL SECTION  ********************
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

