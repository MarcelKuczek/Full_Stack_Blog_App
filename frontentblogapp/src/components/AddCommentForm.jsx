import { useState } from "react";

export const AddCommentForm = (props) => {
  const [isFormShown, setIsFormShown] = useState(false);
  const [content, setContent] = useState("");
  const handleShowFormClick = () => setIsFormShown(!isFormShown);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { postId } = props;
    const comment = { postId, content };
    try {
      const response = await fetch("http://localhost:8080/comments", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(comment),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      alert("Comment added successfully!");
    } catch (error) {
      alert("Error: " + error.message);
    } finally {
      handleShowFormClick();
      setContent("");
    }
  };

  return (
    <>
      {!isFormShown ? (
        <button className="addCommentButton" onClick={handleShowFormClick}>
          Add Comment
        </button>
      ) : (
        <>
          <form className="addCommentForm" onSubmit={handleSubmit}>
            <input
              type="text"
              id="content"
              value={content}
              onChange={(e) => {
                setContent(e.target.value);
              }}
            ></input>
            <span> </span>
            <button className="form-button" disabled={content.length === 0}>
              Add Comment
            </button>
          </form>
        </>
      )}
    </>
  );
};
