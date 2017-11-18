function currentTime() {
    let time = new Date();
    time = time.toLocaleTimeString('en-IN', { hour12: false }) + "." + time.getMilliseconds();
    return time;
}
export function todoSetStartTime() { //actions are simply functions...
    return {
        type: 'todoStartFetch',
        todoStartTime: currentTime(),
    }
}
export function todoSetEndTime() {
    return {
        type: 'todoEndFetch',
        todoEndTime: currentTime(),
    }
}
export function todoSetSaveStartTime() {
    return {
        type: 'todoSaveStartTime',
        todoSaveStartTime: currentTime(),
    }
}
export function todoSetSaveEndTime() {
    return {
        type: 'todoSaveEndTime',
        todoSaveEndTime: currentTime(),
    }
}