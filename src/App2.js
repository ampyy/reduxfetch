import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "./actions";
import { Card } from "./components/Card";
import { useState } from "react";
import InfiniteScroll from 'react-infinite-scroll-component';


function App2() {

const [state, setState] = useState({
  posts: [],
  loading: false,
  page: 0,
  prevComp: 0
})

  return(
    <div className="container">

    </div>
  );
}

export default App2;
