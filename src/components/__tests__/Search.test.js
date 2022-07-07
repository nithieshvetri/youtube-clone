import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { BrowserRouter } from "react-router-dom";
import SearchField from "../Search";
import configureStore from 'redux-mock-store';

import { Provider } from "react-redux";
import thunk from "redux-thunk";
const mockStore = configureStore([thunk]);

test('searching the field',()=>{
  const store=mockStore();
  render(
  <Provider store={store}>
    <SearchField/>
  </Provider>
  );
  const input=screen.getByPlaceholderText(/search by keywords/i)
  fireEvent.change(input, { target: { value: "tamil" } });
  expect(input.value).toBe('tamil');
})

test('search input type',async()=>{
  const store=mockStore();
  render(<Provider store={store} >
  <SearchField />
  </Provider>);
  const searchElement=screen.getByPlaceholderText(/search by keywords/i);
  expect(searchElement).toBeInTheDocument();
})