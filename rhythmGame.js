var notePlacement = ["22%", "35%", "55%", "68%"];
var notesHit = [0, 0, 0, 0];
var notesHitable = [0, 0, 0, 0];
document.addEventListener("keydown", brodcast);

function brodcast(event){
    if (event.repeat) return;
    if (event.code == "KeyZ"){
        beatHit(0);
    } else if (event.code == "KeyX"){
        beatHit(1);
    } else if (event.code == "KeyN"){
        beatHit(2);
    } else if (event.code == "KeyM"){
        beatHit(3);
    }
};
function beatHit(beat){
    console.log(beat)
}

function hitable(placement){
    let hitInterval = setInterval(function() {notesHitable[placement] = 1; clearInterval(hitInterval);}, 5)
}

spawnBeat(0, 0);
spawnBeat(1, 1);
spawnBeat(2, 2);
spawnBeat(3, 3);

function spawnBeat(id, placement){
    var beat = document.createElement("img");
    beat.id = id + "beat";
    beat.style.position = "absolute";
    beat.style.left = notePlacement[placement];
    beat.style.width = "10%";
    beat.style.top = "100%";
    beat.src = "katakana_82_e_small.png.png";
    document.body.appendChild(beat);
    fallBeat(id + "beat", placement);
    
}

function fallBeat(beat, placement) {
    let d = 0;
    let fallInterval = setInterval(function(){
    if(d < 100){
        d++;
        document.getElementById(beat).style.top = d + "%"; 
        if(d > 65 && d < 75){
            console.log("Note " + placement + " can now be hit!");
            hitable(placement);
        }
    } else {
        clearInterval(fallInterval);
        document.getElementById(beat).remove();
    }
    }, 12)
}