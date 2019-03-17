import Store from '../state';
import { INCREMENT, DECREMENT } from './types';

export const initialState = {
    count: 0
}

export const useCount = () => {
    const [state, dispatch] = Store.useStore()
    return state.count;
}

export const useIncrement = () => {
    const [_, dispatch] = Store.useStore()
    return () => dispatch({type:INCREMENT});
}

export const useDecrement = () => {
    const [_, dispatch] = Store.useStore()
    return () => dispatch({type:DECREMENT});
}