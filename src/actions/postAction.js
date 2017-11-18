function currentTime() {
    let time = new Date();
    time = time.toLocaleTimeString('en-IN', { hour12: false }) + "." + time.getMilliseconds();
    return time;
}
export function postSetStartTime() { //actions are simply functions...
    return {
        type: 'postStartFetch',
        postStartTime: currentTime(),
    }
}
export function postSetEndTime() {
    return {
        type: 'postEndFetch',
        postEndTime: currentTime(),
    }
}
export function postSetSaveStartTime() {
    return {
        type: 'postSaveStartTime',
        postSaveStartTime: currentTime(),
    }
}
export function postSetSaveEndTime() {
    return {
        type: 'postSaveEndTime',
        postSaveEndTime: currentTime(),
    }
}