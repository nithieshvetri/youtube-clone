import React,{useState,useEffect} from "react";
import { connect } from "react-redux";

import { useLocation } from "react-router-dom";
import {RelatedVideo,Infinite} from '../actions';
import VerticalList from "./VerticalList";

const PlayingVideo=({RelatedVideo,infinite,data,display,pagetoken})=>{
    const [scroll,setscroll]=useState(0)
    const location=useLocation()
    const {id}=location.state
    console.log(pagetoken,"rentt")
    useEffect(()=>{
        infinite("")
    })
    useEffect(()=>{
        RelatedVideo({'id':id,'next':pagetoken,'data':data?data:[]});
        setscroll(0)
    
    },[scroll])
    const handleScroll = () => {
        if(Math.ceil((window.innerHeight + window.scrollY) >= document.body.scrollHeight )){
            setscroll(1);
            return 
            
        }
      };
      console.log((window.innerHeight + window.scrollY) >= document.body.scrollHeight)
      
      React.useEffect(() => {
        window.addEventListener("scroll", handleScroll);
      
        return () => {
          window.removeEventListener("scroll", handleScroll);
        };
      }, []);

    return (
        <div className="youtube-play">
            <div className="video">
            <iframe 
src={`https://www.youtube.com/embed/${display.id?.videoId}  `}>
</iframe>
<br/>
<div className="video-details">

<h4>{display.snippet?.title}</h4>
<p>{display.snippet?.channelTitle}</p>
</div>
            </div>
            <div className="recommend">
               { data[0]? <VerticalList 
               id={id}
                data={data} />:null}
            </div>
            
            
        </div>

    )
}

const mapdispatchtoprops=(dispatch)=>{
    return {RelatedVideo:(id)=>dispatch(RelatedVideo(id)),
    infinite:(next)=>dispatch(Infinite(next))}
}

const statetoprops=(state)=>{
    console.log(state)
    return {data:state.VideoId?.data,
    display:state.Play?.data,
pagetoken:state.Scroll?.scrollNext
};
}

export default connect(statetoprops,mapdispatchtoprops)(PlayingVideo);