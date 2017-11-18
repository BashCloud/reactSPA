export function photoSetStartTime(state = '', action) {
    switch (action.type) {
        case 'photoStartFetch':
            return action.photoStartTime;
        default:
            return state;
    }
}
export function photoSetEndTime(state = '', action) {
    switch (action.type) {
        case 'photoEndFetch':
            return action.photoEndTime;
        default:
            return state;
    }
}
export function photoSetSaveStartTime(state = '', action) {
    switch (action.type) {
        case 'photoSaveStartTime':
            return action.photoSaveStartTime;
        default:
            return state;
    }
}
export function photoSetSaveEndTime(state = '', action) {
    switch (action.type) {
        case 'photoSaveEndTime':
            return action.photoSaveEndTime;
        default:
            return state;
    }
}