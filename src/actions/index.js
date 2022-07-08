import axios from "axios"

import { success,failure,input ,videoId,requestError,infinite,play,scroll} from "../types"


export const userSuccess = (users) => {
    return {
      type: success,
      payload: users,
    };
  };

  export const RequestError=(error)=>{
    return {
    type:requestError,
    payload:error
  }
}

export const Input=(data)=>{
  return {
    type:input,
    payload:data
  }
}

export const Infinite=(next)=>{
  return {
    type:infinite,
    payload:next
  }
}
export const fetchRequest=(datas)=>{
  const {searc,next,data}=datas
  console.log(next,"mm",searc,"mmmmm")
    return (dispatch)=>{
      console.log("rently",next,searc,data)
        axios.get(`https://www.googleapis.com/youtube/v3/search?pageToken=${next?next:''}&part=snippet&maxResults=50&q=${searc?searc:''}&key=AIzaSyBHP0RfKIttIjlGxd2D1o8EvZKF9K3HaxI



        `,{
        mode:'no-CORS',    
        headers:{
            Accept:'application/json'
        }})
        .then ((res=>
          {          const concat=[...data,...res.data.items]
            console.log(res.data.nextPageToken,"hello")
            if(next=="" && (searc=="" || !searc=="")){
              dispatch(userSuccess(res.data.items))
            }else if((!searc=="" && !next=="")|| (searc=="" && !next=="")) {
                  dispatch(userSuccess(concat))}
            // dispatch(userSuccess(searc?res.data.items:concat))
        dispatch(Infinite(res.data.nextPageToken))
        }))
        .catch(error=>dispatch(requestError(error)))

    }
}

export const RelatedVideoSuccess=(data)=>{
  return {
    type:videoId,
    payload:data
  }
}

export const Scroll=(data)=>{
  return {
    type:scroll,
    payload:data
  }
}
export const RelatedVideo=(videoId)=>{
  const {id,next,data}=videoId
  console.log(next,"nithiesh")
  return  (dispatch)=>{
    axios.get(`https://youtube.googleapis.com/youtube/v3/search?pageToken=${next?next:''}&part=snippet&maxResults=50&relatedToVideoId=${id}&type=video&key=AIzaSyBHP0RfKIttIjlGxd2D1o8EvZKF9K3HaxI


    `)
    .then (res=>{
      console.log(res.data.nextPageToken,"hello welcome")
      dispatch(Scroll(res.data.nextPageToken))
const concat=[...data,...res.data.items]
if(next==""){
  dispatch(RelatedVideoSuccess(res.data.items))
}else{
      dispatch(RelatedVideoSuccess(concat))}})
    .catch(err=>{console.log(err)
    alert("an error has been occured")})
    
  }
}

export const Play=(data)=>{
  return {
    type:play,
    payload:data
  }
};
