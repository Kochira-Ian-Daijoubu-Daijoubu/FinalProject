var keyIsPressed = false;
document.body.addEventListener("keydown", brodcast);
document.body.addEventListener("keyup", keyup);
function brodcast(){
    if (keyIsPressed == false){
        if (event.code = "KeyZ"){
            console.log(event.key);
        } else(event.code = "KeyX"){
            console.log(event.key);
        } else(event.code = "KeyN"){
            console.log(event.key);
        } else(event.code = "KeyM"){
            console.log(event.key);
        }
        
        keyIsPressed = true;
    }
};
function keyup(){
    keyIsPressed = false;
}