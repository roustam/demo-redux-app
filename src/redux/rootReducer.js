export function rootReducer(state, action=0) {
    if (action.type  === 'INCREMENT') {
        return state + 1
    } else if (action.type === 'DECREMENT') {
        return state - 1
    }

    return state    
}