import { createStore, compose, applyMiddleware } from 'redux';

import todosReducer from './reducers/todos';

const store = __DEV__
  ? createStore(todosReducer, compose(console.tron.createEnhancer()))
  : createStore(todosReducer);

export default store;

// import { createStore, compose } from 'redux';
// const createAppropriateStore = __DEV__ ? console.tron.createStore : createStore;

// const store = createAppropriateStore(todosReducer);

// export default store;
