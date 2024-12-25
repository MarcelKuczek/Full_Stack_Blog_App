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
        <div key={post.id} className="post">
          <h2>{post.title}</h2>
          <h3>{post.author}</h3>
          {post.content}
        </div>
      ))}
    </>
  );
};