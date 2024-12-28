import { useEffect, useState } from "react";

export const PostBoard = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/posts")
      .then((res) => res.json())
      .then((result) => {
        setPosts(result);
      });
  }, []);
  return (
    <>
      {posts.map((post) => (
        <>
          <article className="post">
            <div key={post.id} className="postContent">
              <h2>
                {post.id}
                <span>. </span>
                {post.title}
              </h2>
              <h3>{post.author}</h3>
              {post.content}
            </div>
            <button className="addCommentButton">Add Comment</button>
            <form className="addCommentForm">
              <input type="text"></input>
            </form>
          </article>
        </>
      ))}
    </>
  );
};
