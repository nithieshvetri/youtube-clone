import { combineReducers } from "redux";
import { success,input,videoId,infinite,play,requestError,scroll } from "../types";

const initialState={loading:true,users:[],errors:[]}

const api=(state=initialState,action)=>{
    switch(action.type){
        case success:
            return {...state,users:action.payload}
            case requestError:
                return {...state,error:action.payload}
            default:
                return state
    }
}
const initialSearch={search:""};
const search=(state=initialSearch,action)=>{
    switch(action.type){
        case input:
            console.log(action)
            return {...state,search:action.payload}
            default:
                return state;
    }
}



const initialRelatedVideo={data:[]}

const VideoId=(state=initialRelatedVideo,action)=>{
    switch(action.type){
        case videoId:
            return {...state,data:action.payload}
            default:
                return state;
    }
}


const Scroll=(state={scrollNext:''},action)=>{
    switch(action.type){
        case scroll:
            return {...state,scrollNext:action.payload};
            default:return state;
    }
}
const initial={next:""}
const Infinite=(state=initial,action)=>{
    console.log(action,"kkk")
    switch(action.type){
        case infinite:
            return {...state,next:action.payload};
            default:
                return state;

    }
}

const Play=(state={data:{
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
      "publishTime": "2020-10-14T08:58:59Z"
    }
  }},action)=>{
    switch(action.type){
        case play:
            return {...state,data:action.payload}
            default:
                return state;
    }
}
 export const RootReducer=combineReducers({api,search,VideoId,Infinite,Play,Scroll})
