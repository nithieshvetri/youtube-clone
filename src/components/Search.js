import React from "react";
import { connect } from "react-redux";
import {  Input,fetchRequest } from "../actions";


const SearchField=({Input,searc,fetchRequest})=>{


    return (
        <div className="search-input"><input name="search-input" type="text" placeholder="search by keywords" onChange={e=>{Input(e.target.value);
            fetchRequest({'searc':searc.search,'next':""})
        console.log(e.target.value)}}/>
        </div>
    )
}
const mapdispatchtoprops=(dispatch)=>{
    return {Input:(input)=>dispatch(Input(input)),
    fetchRequest:(searchquery)=>dispatch(fetchRequest(searchquery))}
}

const statetoprops=(state)=>{
    // console.log(state)
    return {searc:state.search};
}
export default connect(statetoprops,mapdispatchtoprops)(SearchField);