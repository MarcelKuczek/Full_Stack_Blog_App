import { useState } from "react";

export const ModifyPostForm = () => {
  const [id, setId] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");
  const [newAuthor, setNewAuthor] = useState("");

  const handleSubmit = async (e) => {
    if (!id || isNaN(Number(id))) {
      alert("Invalid post ID. Please provide a numeric ID.");
      return;
    }
    e.preventDefault();

    const post = {
      id,
      title: newTitle,
      content: newContent,
      author: newAuthor,
    };
    try {
      const response = await fetch("http://localhost:8080/posts", {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(post),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      alert("Post updated successfully!");
    } catch (error) {
      alert("Wrong id: " + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          value={id}
          onChange={(e) => setId(e.target.value)}
          id="id"
          type="text"
          placeholder="Post's id to Modify"
        />
      </div>
      <div>
        <input
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          id="newTitle"
          type="text"
          placeholder="New title"
        />
      </div>
      <div>
        <input
          value={newAuthor}
          onChange={(e) => setNewAuthor(e.target.value)}
          id="newAuthor"
          type="text"
          placeholder="New author"
        />
      </div>
      <div>
        <input
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
          id="newContent"
          type="text"
          placeholder="New content"
        />
      </div>
      <button
        className="form-button"
        disabled={
          id.length === 0 ||
          newTitle.length === 0 ||
          newAuthor.length === 0 ||
          newContent.length === 0
        }
      >
        Modify Post
      </button>
    </form>
  );
};
