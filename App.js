import React, { Component } from "react";
import AppContainer from "./app/containers/AppContainer";
import { createStore, applyMiddleware } from "redux";
import { Provider } from 'react-redux';
import thunk from "redux-thunk";
import peopleReducer from "./app/redux/reducers/peopleReducer";
/**
 * Passing middlewre as async
 */
const createStoreWithMiddleware = applyMiddleware(thunk)(createStore)
/**
 * Passing middlewre as async
 */
const store = createStoreWithMiddleware(peopleReducer)
export default class App extends Component {
  render() {
    return (
    <Provider store={store}>  
    <AppContainer />
    </Provider>
    );
  }
}
