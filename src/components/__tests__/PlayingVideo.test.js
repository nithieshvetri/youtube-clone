import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { BrowserRouter } from "react-router-dom";
import Playingvideo from "../Playingvideo";
import { Provider } from "react-redux";
import thunk from "redux-thunk";
import configureStore from 'redux-mock-store';
import Enzyme,{ shallow } from "enzyme"
import Adapter from 'enzyme-adapter-preact-pure';
import renderer from "react-test-renderer";




// import Adapter from 'enzyme-adapter';
// jest.mock("react-router-dom", () => ({
//   ...jest.requireActual("react-router-dom"),
//   useLocation: () => ({
//     pathname: "/playing"
//   })
// }));
Enzyme.configure({ adapter: new Adapter() });


const mockHistoryPush = jest.fn();
jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useHistory: () => ({
        push: mockHistoryPush,
    }),
    useLocation: () => ({
        pathname: "/playing"
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
const mockInfinite=jest.fn();
const data={data:[],display:{
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
}},pageToken:""}
// test('currently playing video',async()=>{
//     const store=mockStore(data);
//      (<Provider store={store}>
//         <MockPlaying infinite={mockInfinite} RelatedVideo={mockRelatedVideo} />
//     </Provider>);
//     const element=screen.getByRole('paragraph');
//     expect(element).toBeInTheDocument();
// })

// it("renders correctly", () => {
//   const store=mockStore(data);

//   const tree = renderer.create(
//     <Provider store={store}>
//          <MockPlaying infinite={mockInfinite} RelatedVideo={mockRelatedVideo} />
//      </Provider>
//   ).toJSON();
//   expect(tree).toMatchSnapshot();
// });