function animateCard() {
    document.getElementById("card").classList.add("card");
    document.body.classList.add("bodyAnimation");
    playAudio();
}

function stopAnimation() {
    document.getElementById("card").classList.remove("card");
    document.body.classList.remove("bodyAnimation");
    stopAudio();

}

function getBirthdaySongElement() {
    return document.getElementById("happyBirthdaySong");
}

function playAudio() {
    var audioElement = getBirthdaySongElement();
    //Check that an element has been returned; the audioElement value will be null if not
    if (audioElement != null) {
        //We've found an HTML <audio> element so can issue it commands.
        //If the element is currently playing then we need to stop and reset it. The element's
        //ended property will be false if its currently playing, so we can test this (notice the
        //logical NOT operator, !, that flips the Boolean value of its operand - read the
        //if statement as "if not audioElement.ended")
        if(!audioElement.ended){
            //The audio element is playing, so pause it...
            audioElement.pause();
            //...then call it's load() method to cause it to reset the play position to the
            //beginning of the sound file
            audioElement.load();
        }
        //Tell the <audio> element to play its sound
        audioElement.play();
    }
}

function stopAudio() {
    var audioElement = getBirthdaySongElement();
    //Check that an element has been returned; the audioElement value will be null if not
    if (audioElement != null) {
        //Tell the <audio> element to stop its sound
        audioElement.pause();
    }
}