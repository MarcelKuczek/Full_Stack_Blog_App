import { useEffect, useState } from "react";
import { AddCommentForm } from "./AddCommentForm";
import { Comments } from "./Comments";

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
          <article className="post" key={post.id}>
            <div className="postContent">
              <h2>
                {post.id}
                <span>. </span>
                {post.title}
              </h2>
              <h3>{post.author}</h3>
              {post.content}
            </div>
            <AddCommentForm />
            <Comments postId={post.id} />
          </article>
        </>
      ))}
    </>
  );
};
