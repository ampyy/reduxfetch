import "../App.css";
import { useSelector, useDispatch } from "react-redux";
import { fetchPosts } from "../actions";
import { Card } from "./Card";
import { useEffect, useState, useRef } from "react";
import {connect} from 'react-redux';

function List({ fetchPosts, post: { posts, loading } }) {
  const [lastElement, setLastElement] = useState(null);
  const [page, setPage] = useState(1);

  const observer = useRef(
    new IntersectionObserver((posts) => {
      const first = posts[0];
      if (first.isIntersecting) {
        console.log(page + 1);
        setPage(page + 1);
      }
    })
  );

  useEffect(() => {
    if (page <= 2) {
      setTimeout(() => {
        fetchPosts(posts, page);
      }, 1000);
    }
    console.log("in eff :" + page);
  }, [page]);

  useEffect(() => {
    const currentElement = lastElement;
    const currentObserver = observer.current;

    if (currentElement) {
      currentObserver.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        currentObserver.unobserve(currentElement);
      }
    };
  }, [lastElement]);

  return (
    <div className="App">
      <h1>Redux Fetch with Infinite Scroll</h1>
      <div className="main">
        {posts.length > 0 &&
          posts.map((post, i) => {
            return i === posts.length - 1 && !loading && page <= 2 ? (
              <div key={post.id} ref={setLastElement}>
                <Card key={post.id} item={post} />
              </div>
            ) : (
              <Card key={post.id} item={post} />
            );
          })}
      </div>
      {loading && <h1> Loading ... </h1>}
    </div>
  );
}

const mapStateToProps = (state) => ({
  post: state.user,
});

const mapDispatchToProps = (dispatch) => {
  return {
    fetchPosts: (posts, page) => dispatch(fetchPosts(posts, page)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(List);