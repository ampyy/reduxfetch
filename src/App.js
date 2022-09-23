import "./App.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "./actions";
import { Card } from "./components/Card";
import { useEffect, useState } from "react";


function App() {
  const { posts, loading } = useSelector((state) => ({ ...state.data }));
  const dispatch = useDispatch();
 
  const num = 1;
  const [post, setPosts] = useState(posts);
  const [page, setPage] = useState(num);

  useEffect(() => {
    dispatch(fetchPosts(page));
  }, [page]);
  
  const scrollToEnd = () => {
    if(page >= 2){
      return;
    }
    setPage(page + 1);
  };

  // function handleClickAhead() {
  //   setPage(page + 1);
  //   console.log(page);
  //   dispatch(fetchPosts(page));
  // }
  // function handleClickBack() {
  //   setPage(page - 1);
  //   console.log(page);
  //   dispatch(fetchPosts(page));
  // }


  window.onscroll = function () {
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.documentElement.offsetHeight
    ) {
      scrollToEnd();
    }
  };


  return (
    <div className="App">
      <h1>Redux Fetch</h1>

      {/* <button onClick={handleClickAhead}>+</button>
      <button onClick={handleClickBack}>-</button> */}

      <div className="main">
        
        {!loading ? (
          posts.map((post) => (
            <Card
              key={post.id}
              first_name={post.first_name}
              email={post.email}
              avatar={post.avatar}
              last_name={post.last_name}
            />
          ))
        ) : (
          <h1>..LOADING</h1>
        )}
      </div>
    </div>
  );
}

export default App;
