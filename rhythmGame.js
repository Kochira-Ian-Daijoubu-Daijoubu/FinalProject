var keyIsPressed = false;
document.body.addEventListener("keydown", brodcast);
document.body.addEventListener("keyup", keyup);
function brodcast(){
    if (keyIsPressed == false){
        if (event.code == "KeyZ"){
            beatHit("z");
        } else if (event.code == "KeyX"){
            beatHit("x");
        } else if (event.code == "KeyN"){
            beatHit("c");
        } else if (event.code == "KeyM"){
            beatHit("v");
        }
        
        keyIsPressed = true;
    }
};

spawnBeat()

function keyup(){
    keyIsPressed = false;
}


function spawnBeat(){
    var beat = document.createElement("img");
    beat.style.left = 22%
    beat.style.width = 10%
    beat.style.down = 0%
    beat.src = "katakana_82_e_small.png.png"
    document.body.appendChild(beat);
}