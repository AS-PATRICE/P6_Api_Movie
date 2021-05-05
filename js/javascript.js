const MOVIE_BASE_URL = 'http://localhost:8000/api/v1/titles/';


function getFetch(url) {
	return fetch(url)
	.then(response => {return response.json();})
	.catch(err => console.log("Problem with fetch:" + err));
}

function get_best_movie_info(){
    getFetch('http://localhost:8000/api/v1/titles/?sort_by=-imdb_score')
    
    .then((data) => {
        const movies = data.results; 
        document.querySelector('.best_movie_poster').innerHTML = `<img src=${movies[0].image_url}></img>`;
        document.querySelector('.best_movie_title').innerHTML = `${movies[0].title}`;
        document.querySelector('.best_movie_description').innerHTML = `${movies[0].id}`;
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
    // document.getElementById('rad_movie_poster5').innerHTML = `<img src=${movies[5].image_url}></img>`;
    // document.getElementById('rad_movie_poster6').innerHTML = `<img src=${movies[6].image_url}></img>`;
    // document.getElementById('rad_movie_poster7').innerHTML = `<img src=${movies[7].image_url}></img>`; 
})
}

function get_sce_fi_info(){
    getFetch('http://localhost:8000/api/v1/titles/?genre=Sci-Fi&sort_by=-imdb_score')
    .then((data) => {
    const movies = data.results;
    console.log(movies);
    document.getElementById('sce_fict_movie_poster1').innerHTML = `<img src=${movies[0].image_url}></img>`;
    document.getElementById('sce_fict_movie_poster2').innerHTML = `<img src=${movies[1].image_url}></img>`;
    document.getElementById('sce_fict_movie_poster3').innerHTML = `<img src=${movies[2].image_url}></img>`;
    document.getElementById('sce_fict_movie_poster4').innerHTML = `<img src=${movies[3].image_url}></img>`;
    document.getElementById('sce_fict_movie_poster5').innerHTML = `<img src=${movies[4].image_url}></img>`;
    // document.getElementById('sce_fict_movie_poster6').innerHTML = `<img src=${movies[4].image_url}></img>`;
    // document.getElementById('sce_fict_movie_poster7').innerHTML = `<img src=${movies[4].image_url}></img>`;
})
}

function get_comedy_info(){
    getFetch('http://localhost:8000/api/v1/titles/?genre=Comedy&sort_by=-imdb_score')
    .then((data) => {
    const movies = data.results;
    console.log(movies);
    document.getElementById('comedy_movie_poster1').innerHTML = `<img src=${movies[0].image_url}></img>`;
    document.getElementById('comedy_movie_poster2').innerHTML = `<img src=${movies[1].image_url}></img>`;
    document.getElementById('comedy_movie_poster3').innerHTML = `<img src=${movies[2].image_url}></img>`;
    document.getElementById('comedy_movie_poster4').innerHTML = `<img src=${movies[3].image_url}></img>`;
    document.getElementById('comedy_movie_poster5').innerHTML = `<img src=${movies[4].image_url}></img>`;
    // document.getElementById('comedy_movie_poster6').innerHTML = `<img src=${movies[4].image_url}></img>`;
    // document.getElementById('comedy_movie_poster7').innerHTML = `<img src=${movies[4].image_url}></img>`;
})
}

function get_action_info(){
    getFetch('http://localhost:8000/api/v1/titles/?genre=Action&sort_by=-imdb_score')
    .then((data) => {
    const movies = data.results;
    console.log(movies);
    document.getElementById('action_movie_poster1').innerHTML = `<img src=${movies[0].image_url}></img>`;
    document.getElementById('action_movie_poster2').innerHTML = `<img src=${movies[1].image_url}></img>`;
    document.getElementById('action_movie_poster3').innerHTML = `<img src=${movies[2].image_url}></img>`;
    document.getElementById('action_movie_poster4').innerHTML = `<img src=${movies[3].image_url}></img>`;
    document.getElementById('action_movie_poster5').innerHTML = `<img src=${movies[4].image_url}></img>`;
    // document.getElementById('comedy_movie_poster6').innerHTML = `<img src=${movies[4].image_url}></img>`;
    // document.getElementById('comedy_movie_poster7').innerHTML = `<img src=${movies[4].image_url}></img>`;
})
}

get_best_movie_info();
get_top_rate_movie_info();
get_sce_fi_info();
get_comedy_info();
get_action_info();

