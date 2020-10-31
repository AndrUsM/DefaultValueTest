import { applyMiddleware, compose, createStore } from 'redux';
import { appReducer } from './reducers';
import thunk from "redux-thunk";

const rootReducer = (state: any, action: any) => {
    return appReducer(state, action);
}

export const store = createStore(
    rootReducer,
    (window as any).__REDUX_DEVTOOLS_EXTENSION__
        ? compose(applyMiddleware(thunk), (window as any).__REDUX_DEVTOOLS_EXTENSION__())
        : applyMiddleware(thunk)

)