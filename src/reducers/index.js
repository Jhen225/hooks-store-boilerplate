import { INCREMENT, DECREMENT } from '../actions/types';
export const reducer = (state, action) => {
    switch (action.type) {
        case INCREMENT:
            console.log("increment",state)
            return { ...state, count: state.count + 1 }
        case DECREMENT:
            console.log("decrement",state)
            return { ...state, count: state.count - 1 }
        default:
            console.log(state)
            return state;
    }
}
