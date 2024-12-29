import { useEffect, useState } from "react";
import { AddCommentForm } from "./AddCommentForm";

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
            <AddCommentForm />
          </article>
        </>
      ))}
    </>
  );
};
