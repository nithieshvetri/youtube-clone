import React from "react";
import {RelatedVideo} from '../actions';
import {Play} from '../actions'
import { connect } from "react-redux";


const VerticalList=({data,play})=>{
    const display=data[0]?data.map((x,index)=>{
        return (
            <div   key={index}>
               {x.snippet ? < div data-testid="click" className="vertical-list" onClick={()=>play(x)} >
                <img className="vertical-list-image" src={x?.snippet?.thumbnails.high.url} alt="thumbnails" />
                <div className="vertical-list-content">
                    <p>{x.snippet.title?x.snippet.title:null}</p>
                    <p>{x.snippet.channelTitle?x.snippet.channelTitle:null}</p>
                </div></div>:null}

            </div>
        )
    }):null
    return (
        <div>
            {display}
        </div>
    )
}

const dispatchstatetoprops=dispatch=>{
    return {
        play:(data)=>dispatch(Play(data))
    }
}

export default connect(null,dispatchstatetoprops)(VerticalList);