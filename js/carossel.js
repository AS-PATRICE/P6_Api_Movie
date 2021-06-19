let left = 1;
let right = 5;

function show(){
    
    
    for(i=left; i<=right; i++){
        document.getElementById("rad_movie_poster"+ i).style.display="inline-block";
        
    }
    for(i=left; i<=right; i++){
        document.getElementById("sce_fict_movie_poster"+ i).style.display="inline-block";
        
    }
    for(i=left; i<=right; i++){
        document.getElementById("comedy_movie_poster"+ i).style.display="inline-block";
        
    }
    for(i=left; i<=right; i++){
        document.getElementById("action_movie_poster"+ i).style.display="inline-block";
    }
}

function moveRight(id_element){
    if(left<3 && right <=6){
        document.getElementById(id_element + left).style.display="none";
        left+=1;
        right+=1;

        for(i=left; i<=right; i++){
            document.getElementById(id_element + i).style.display="inline-block";
        }
    }
    else
        return;
    
}

function moveLeft(id_element){
    if(left>=1 && right >=6){
        document.getElementById(id_element + right).style.display="none";
        left-=1;
        right-=1;

        for(i=left; i<=right; i++){
            document.getElementById(id_element + i).style.display="inline-block";
        }
    }
    else
        return;
    
}