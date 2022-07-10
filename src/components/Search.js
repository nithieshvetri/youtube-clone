import React,{useEffect} from "react";
import { connect } from "react-redux";
import {  Input,fetchRequest,Infinite } from "../actions";


const SearchField=({Input,searc,infinite,fetchRequest})=>{

    useEffect(()=>{
        infinite("")
    },[searc])

    return (
        <div className="search-input"><input name="search-input" type="text" placeholder="search by keywords" onChange={e=>{Input(e.target.value);
            fetchRequest({'searc':searc.search,'next':""})
            infinite("")
        console.log(e.target.value)}}/>
        </div>
    )
}
const mapdispatchtoprops=(dispatch)=>{
    return {Input:(input)=>dispatch(Input(input)),
    fetchRequest:(searchquery)=>dispatch(fetchRequest(searchquery)),
infinite:(next)=>dispatch(Infinite(next))}
}

const statetoprops=(state)=>{
    // console.log(state)
    return {searc:state?.search};
}
export default connect(statetoprops,mapdispatchtoprops)(SearchField);