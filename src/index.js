import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import App from './components/App';
import store from "./redux/redux_store";
import {BrowserRouter} from "react-router-dom";


const root = ReactDOM.createRoot(document.getElementById('root'));

let rerenderDOM = (state) => {
      root.render(
        <BrowserRouter basename = "/movie_lib">
            <App state={state} store={store} dispatch={store.dispatch.bind(store)}/>
        </BrowserRouter>
      );
  }

  rerenderDOM(store.getState());
  store.subscribe(() => {
      let state = store.getState();
      rerenderDOM(state)
  });



