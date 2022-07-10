import React from "react";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { RootReducer } from "./reducers/index";
import thunk from "redux-thunk";
// import Login from './components/Login';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import ErroBoundary from "./components/ErroBoundry";
import PlayingHeader from "./components/PlayingHeader";
import "./components/style.css";
const App = () => {
  return (
    <ErroBoundary>
      <Provider store={createStore(RootReducer, applyMiddleware(thunk))}>
        <BrowserRouter>
          {/* <Header /> */}
          <Routes>
            <Route path="/" element={<Header />} />
            <Route path="/playing" element={
          <PlayingHeader />} />

            <Route path="/*" element={<div className="not-found"><h1>the page you requested is not found</h1>
            <h2><a href='/'>please visit the home page</a></h2></div>} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </ErroBoundary>
  );
};

export default App;
