import throttle from 'lodash.throttle';
import Player from "@vimeo/player";

const LOCALE_STORAGE_KEY = "videoplayer-current-time";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

player.on('timeupdate', throttle(onTimeUpdate,1000))
    
function onTimeUpdate({ seconds }) {
    const saveTime = localStorage.setItem(LOCALE_STORAGE_KEY, seconds);
    return saveTime === null ? undefined : localStorage.getItem(LOCALE_STORAGE_KEY);
}

player.setCurrentTime(localStorage.getItem(LOCALE_STORAGE_KEY));