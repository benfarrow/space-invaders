var player={
    top: 550,
    left: 500,
};

alert ("Defeat All Enemies!");
document.onkeydown=function(e){

    if (e.keyCode===37){
        console.log("Left")
        player.left=player.left-10;
        moveplayer()
    }
    else if (e.keyCode===39){
        console.log("Right")
        player.left=player.left+10;
        moveplayer()
    }
}

function moveplayer(){
    document.getElementById("player").style.left+"px";
}
moveplayer()