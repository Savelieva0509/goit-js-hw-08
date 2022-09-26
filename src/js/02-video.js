import throttle from 'lodash.throttle';
import Player from "@vimeo/player";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCALE_STORAGE_KEY = "videoplayer-current-time";

player.on('timeupdate', throttle(onTimeUpdate, 1000));   

const saveData = localStorage.getItem(LOCALE_STORAGE_KEY)
let savedSeconds;

function onTimeUpdate({ seconds }) {
    localStorage.setItem(LOCALE_STORAGE_KEY, seconds);
} 

function checkSavedTime() {
    if (!saveData) {
        savedSeconds = 0
    } else {
        savedSeconds = saveData;
    }
    console.log(savedSeconds);
}    
checkSavedTime(); 
player.setCurrentTime(savedSeconds);


