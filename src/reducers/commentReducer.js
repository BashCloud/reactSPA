export function commentSetStartTime(state = '', action) {
    switch (action.type) {
        case 'commentStartFetch':
            return action.commentStartTime;
        default:
            return state;
    }
}
export function commentSetEndTime(state = '', action) {
    switch (action.type) {
        case 'commentEndFetch':
            return action.commentEndTime;
        default:
            return state;
    }
}
export function commentSetSaveStartTime(state = '', action) {
    switch (action.type) {
        case 'commentSaveStartTime':
            return action.commentSaveStartTime;
        default:
            return state;
    }
}
export function commentSetSaveEndTime(state = '', action) {
    switch (action.type) {
        case 'commentSaveEndTime':
            return action.commentSaveEndTime;
        default:
            return state;
    }
}