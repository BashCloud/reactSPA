function currentTime() {
    let time = new Date();
    time = time.toLocaleTimeString('en-IN', { hour12: false }) + "." + time.getMilliseconds();
    return time;
}
export function commentSetStartTime() { //actions are simply functions...
    return {
        type: 'commentStartFetch',
        commentStartTime: currentTime(),
    }
}
export function commentSetEndTime() {
    return {
        type: 'commentEndFetch',
        commentEndTime: currentTime(),
    }
}
export function commentSetSaveStartTime() {
    return {
        type: 'commentSaveStartTime',
        commentSaveStartTime: currentTime(),
    }
}
export function commentSetSaveEndTime() {
    return {
        type: 'commentSaveEndTime',
        commentSaveEndTime: currentTime(),
    }
}