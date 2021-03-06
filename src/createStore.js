export function createStore(rootReducer, initialState) {
let state = rootReducer(initialState, {type: '__INIT__'})
const subscribers = []
  return {
    //action {type: 'increment'}
    dispatch(action) {
      state = rootReducer(state, action)
      subscribers.forEach(sub => sub())
    },
    subscribe(callback) {
  
    },
    getState() {    
      return state
    },
  }
}