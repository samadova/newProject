import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import { all } from 'redux-saga/effects';
import App from './App';

// Создание корневого редьюсера
const rootReducer = (state = {}, action) => {
  
};

// Создание корневой саги
function* rootSaga() {
  yield all([
    
  ]);
}

// Создание сага-посредника
const sagaMiddleware = createSagaMiddleware();

// Создание хранилища Redux
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

// Запуск корневой саги
sagaMiddleware.run(rootSaga);

// Рендеринг приложения
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);



