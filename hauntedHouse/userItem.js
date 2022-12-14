window.grabbedKey = false
grabbedPick = false
console.log("rerunning?")

function grabKey(){
    grabbedKey = true;
}

function keygrabbed(){
    return grabbedKey;
}

function grabLockPick(){
    grabbedPick = true;
}

function pickGrabbed(){
    return grabbedPick;
}