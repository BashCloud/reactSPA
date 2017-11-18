function currentTime() {
    let time = new Date();
    time = time.toLocaleTimeString('en-IN', { hour12: false }) + "." + time.getMilliseconds();
    return time;
}
export function photoSetStartTime() { //actions are simply functions...
    return {
        type: 'photoStartFetch',
        photoStartTime: currentTime(),
    }
}
export function photoSetEndTime() {
    return {
        type: 'photoEndFetch',
        photoEndTime: currentTime(),
    }
}
export function photoSetSaveStartTime() {
    return {
        type: 'photoSaveStartTime',
        photoSaveStartTime: currentTime(),
    }
}
export function photoSetSaveEndTime() {
    return {
        type: 'photoSaveEndTime',
        photoSaveEndTime: currentTime(),
    }
}