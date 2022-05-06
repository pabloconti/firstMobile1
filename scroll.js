function moveRight(){
    let left = document.querySelector(".slides");
    left.scrollBy(250, 0);
}

function moveLeft(){
    let right = document.querySelector(".slides");
    right.scrollBy(-250, 0);
}