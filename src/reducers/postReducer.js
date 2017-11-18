export function setStartTime(state = '', action) {
    switch (action.type) {
        case 'startFetch':
            return action.startTime;
        default:
            return state;
    }
}
export function setEndTime(state = '', action) {
    switch (action.type) {
        case 'endFetch':
            return action.endTime;
        default:
            return state;
    }
}
export function setSaveStartTime(state = '', action) {
    switch (action.type) {
        case 'saveStartTime':
            return action.saveStartTime;
        default:
            return state;
    }
}
export function setSaveEndTime(state = '', action) {
    switch (action.type) {
        case 'saveEndTime':
            return action.saveEndTime;
        default:
            return state;
    }
}