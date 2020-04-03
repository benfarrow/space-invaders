var player={
    top: 550,
    left: 500
};

var laser=[];

// variables defining attributes for objects eg co-ordinates

alert ("Defeat All Enemies!");

document.onkeydown=function(e){
// function for a key press

    if (e.keyCode===37){
        console.log("Left")
        player.left=player.left-10;
        movePlayer()
    }
    else if (e.keyCode===39){
        console.log("Right")
        player.left=player.left+10;
        movePlayer()
    }
    // moves the player based on appropriate keycode (ie 39 for right) and moves player 10px (+ right - left)
   
    else if (e.keyCode===32){
        console.log("Shoot")
        laser.push({
            // pushes values (co-ord) into the array ("lasers)")
            left: player.left+15,
            // +15 for middle of players ship
            top: player.top
        })
    }
}

function movePlayer(){
    document.getElementById("player").style.left=player.left+"px";
}
// adds the px element to the move value in css

function moveLasers(){
    document.getElementById("lasers").innerHTML="";
    for (var laser=0; laser<lasers.length; missile++)
        document.getElementById("lasers").innerHTML+=
        `<div class='laser' style='left:${lasers[laser].left}px; top:
        ${lasers[laser].top}px;'></div>`;
    ${lasers[laser].left}px is just laser postitioning (both for x then y co-ords)
    // needs to be inside baptics as already in a div . for loop sets co-or to 0 
    // then increases it by amount equal to lasers length (++)
    lasers[laser].top
    lasers[laser].left
}