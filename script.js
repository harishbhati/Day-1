//play sound
function playMusic(e){
    const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
    const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);
    if (!audio) return; //if not audio 
    audio.currentTime = 0; //rewind to the start
    audio.play();
    key.classList.add('playing');
}

// Remove transition effects
function removeTransition(e){
    console.log(e.propertyName);
    if (e.propertyName !== 'transform') return;
    this.classList.remove('playing');
}

const keys = document.querySelectorAll('.key');
keys.forEach(key => key.addEventListener('transitionend', removeTransition));
window.addEventListener('keydown',playMusic);