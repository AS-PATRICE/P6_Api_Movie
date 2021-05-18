let left = 1;
let right = 5;

function show(){
    for(i=left; i<=right; i++){
        let dsc = document.getElementById("comedy_movie_poster"+ i).style.display="inline-block";
    }
}

function moveRight(){
    if(left<3 && right <=6){
        document.getElementById("comedy_movie_poster" + left).style.display="none";
        left+=1;
        right+=1;

        for(i=left; i<=right; i++){
            document.getElementById("comedy_movie_poster"+ i).style.display="inline-block";
        }
    }
    else
        return;
    
}

function moveLeft(){
    if(left>=1 && right >=6){
        document.getElementById("comedy_movie_poster" + right).style.display="none";
        left-=1;
        right-=1;

        for(i=left; i<=right; i++){
            document.getElementById("comedy_movie_poster"+ i).style.display="inline-block";
        }
    }
    else
        return;
    
}