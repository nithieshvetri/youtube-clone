import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import Playingvideo from "../Playingvideo";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import configureStore from 'redux-mock-store';
import { shallow } from "enzyme"

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useLocation: () => ({
    pathname: "localhost:3000/playing"
  })
}));
const mockStore = configureStore([thunk]);

const MockPlaying=()=>{
    return (
        <BrowserRouter>
        <Playingvideo  />
        </BrowserRouter>
    )
}
const mockRelatedVideo=jest.fn();

test('currently playing video',async()=>{
    const store=mockStore([{}],{
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
        }},{scrollNext:'nknk'})
    render(<Provider store={store}>
        <MockPlaying id="nkmd" RelatedVideo={mockRelatedVideo} />
    </Provider>);
    const element=screen.findAllByRole('paragraph');
    expect(element).toBeInTheDocument();
})