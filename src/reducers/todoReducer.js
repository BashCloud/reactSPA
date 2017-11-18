export function todoSetStartTime(state = '', action) {
    switch (action.type) {
        case 'todoStartFetch':
            return action.todoStartTime;
        default:
            return state;
    }
}
export function todoSetEndTime(state = '', action) {
    switch (action.type) {
        case 'todoEndFetch':
            return action.todoEndTime;
        default:
            return state;
    }
}
export function todoSetSaveStartTime(state = '', action) {
    switch (action.type) {
        case 'todoSaveStartTime':
            return action.todoSaveStartTime;
        default:
            return state;
    }
}
export function todoSetSaveEndTime(state = '', action) {
    switch (action.type) {
        case 'todoSaveEndTime':
            return action.todoSaveEndTime;
        default:
            return state;
    }
}