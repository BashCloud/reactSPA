function currentTime() {
    let time = new Date();
    time = time.toLocaleTimeString('en-IN', { hour12: false }) + "." + time.getMilliseconds();
    return time;
}
export function setStartTime() { //actions are simply functions...
    return {
        type: 'startFetch',
        startTime: currentTime(),
    }
}
export function setEndTime() {
    return {
        type: 'endFetch',
        endTime: currentTime(),
    }
}
export function setSaveStartTime() {
    return {
        type: 'saveStartTime',
        saveStartTime: currentTime(),
    }
}
export function setSaveEndTime() {
    return {
        type: 'saveEndTime',
        saveEndTime: currentTime(),
    }
}