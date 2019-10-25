import React from "react";
import ReactDOM from "react-dom";
import createSagaMiddleware from "redux-saga";
import { configureStore, getDefaultMiddleware } from "redux-starter-kit";
import { Provider } from "react-redux";
import "./index.css";
import App from "./components/App/App";
import rootReducer from "./reducers";
import rootSaga from "./sagas";
import * as serviceWorker from "./serviceWorker";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: rootReducer,
  middleware: [...getDefaultMiddleware(), sagaMiddleware]
});

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();

/*
if (module.hot) {
  module.hot.accept();
}
*/
