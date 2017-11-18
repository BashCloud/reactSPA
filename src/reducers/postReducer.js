export function postSetStartTime(state = '', action) {
    switch (action.type) {
        case 'postStartFetch':
            return action.postStartTime;
        default:
            return state;
    }
}
export function postSetEndTime(state = '', action) {
    switch (action.type) {
        case 'postEndFetch':
            return action.postEndTime;
        default:
            return state;
    }
}
export function postSetSaveStartTime(state = '', action) {
    switch (action.type) {
        case 'postSaveStartTime':
            return action.postSaveStartTime;
        default:
            return state;
    }
}
export function postSetSaveEndTime(state = '', action) {
    switch (action.type) {
        case 'postSaveEndTime':
            return action.postSaveEndTime;
        default:
            return state;
    }
}