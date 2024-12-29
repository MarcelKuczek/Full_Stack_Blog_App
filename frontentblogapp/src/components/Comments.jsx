import { useEffect, useState } from "react";

export const Comments = ({ postId }) => {
  const [comments, setComments] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:8080/comments?postIds=${postId}`)
      .then((res) => res.json())
      .then((result) => {
        setComments(result);
      });
  }, [postId]);
  return (
    <>
      {comments.map((comment) => (
        <>
          <div key={comment.id} className="comment">
            <hr />
            {comment.content}
          </div>
        </>
      ))}
    </>
  );
};
