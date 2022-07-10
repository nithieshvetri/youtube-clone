import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { BrowserRouter } from "react-router-dom";
import configureStore from 'redux-mock-store';
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import Structure from "../Structure";
const mockStore = configureStore([thunk]);
const MockPlay=jest.fn();
const Mockfetch=jest.fn();
const MockScroll=jest.fn();
test("structure",async()=>{
    const store=mockStore();
  render(
      <BrowserRouter>  <Provider store={store}>
    <Structure  data={[{
        "kind": "youtube#searchResult",
        "etag": "G8EF2-N0ySF_S-FZ2cj8W5YHoa4",
        "id": {
          "kind": "youtube#video",
          "videoId": "adt9o080dFE"
        },
        "snippet": {
          "publishedAt": "2020-10-14T08:58:59Z",
          "channelId": "UC9VKXPGzRIs9raMlCwzljtA",
          "title": "നേടാം ജോലിയിലേക്കൊരു #MassEntri with Entri App!",
          "description": "MassEntri #Entri #Entriapp നിങ്ങളുടെ സ്വപ്ന ജോലിയിലേക്ക് Entry ചെയ്യൂ, Entri ...",
          "thumbnails": {
            "default": {
              "url": "https://i.ytimg.com/vi/adt9o080dFE/default.jpg",
              "width": 120,
              "height": 90
            },
            "medium": {
              "url": "https://i.ytimg.com/vi/adt9o080dFE/mqdefault.jpg",
              "width": 320,
              "height": 180
            },
            "high": {
              "url": "https://i.ytimg.com/vi/adt9o080dFE/hqdefault.jpg",
              "width": 480,
              "height": 360
            }
          },
          "channelTitle": "Entri App മലയാളം",
          "liveBroadcastContent": "none",
          "publishTime": "2020-10-14T08:58:59Z",
    }}]} play={MockPlay} scroll={MockScroll} fetch={Mockfetch}  />
  </Provider>
  </BrowserRouter>

  );
// const text=screen.getByText('rer')

  // expect(text).toBeInTheDocument();


  
})
