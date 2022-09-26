import throttle from 'lodash.throttle';
import Player from "@vimeo/player";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);
const LOCALE_STORAGE_KEY = "videoplayer-current-time";

player.on('timeupdate', throttle(onTimeUpdate, 1000));   

firstLoad()
const saveData = localStorage.getItem(LOCALE_STORAGE_KEY)

function onTimeUpdate({ seconds }) {
    localStorage.setItem(LOCALE_STORAGE_KEY, seconds);
} 

function firstLoad({ seconds }) {
    if (!saveData) {
        seconds = 0;
    }
    else {
    JSON.parse(saveData);
    }
} 

player.setCurrentTime(localStorage.getItem(LOCALE_STORAGE_KEY));