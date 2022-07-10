import React, { useEffect, useState } from "react";
import { fetchRequest } from "../actions";
import { connect } from "react-redux";
import Structure from "./Structure";

import loader from "../images/loader.gif";
const HomePage = ({ fetchRequest, data, next, search }) => {
  const [scroll, setscroll] = useState(0);
  useEffect(() => {
    fetchRequest({
      searc: search ? search : "",
      next: next,
      data: data ? data : [],
    });
    setscroll(0);
  }, [scroll, search]);
  const handleScroll = () => {
    if (
      Math.ceil(
        window.innerHeight + window.scrollY >= document.body.scrollHeight
      )
    ) {
      setscroll(1);
      return;
    }
  };
  console.log(
    window.innerHeight + window.scrollY >= document.body.scrollHeight
  );

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      {data[0] ? (
        <Structure data={data} next={next} />
      ) : (
        <div className="loader">
          <img src={loader} alt="loader" />
        </div>
      )}
    </div>
  );
};

const mapdispatchtoprops = (dispatch) => {
  return { fetchRequest: (next) => dispatch(fetchRequest(next)) };
};

const statetoprops = (state) => {
  console.log(state);
  return {
    data: state.api.users,
    next: state.Infinite.next,
    search: state.search.search,
  };
};

export default connect(statetoprops, mapdispatchtoprops)(HomePage);
