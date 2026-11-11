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

setInterval(spawnBeat(), 40)

function keyup(){
    keyIsPressed = false;
}

function spawnBeat(){
    var beat = document.createElement("img");
    beat.id = "beat";
    beat.style.position = "absolute";
    beat.style.left = "22%";
    beat.style.width = "10%";
    beat.style.down = "0%";
    beat.src = "katakana_82_e_small.png.png";
    document.body.appendChild(beat);
    for (let d = 0; d < 97; d++) {
        document.getElementById("beat").style.down = d + "%";
    } 
}

