import { useState } from "react";

export const AddPostForm = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const post = { title, author, content };
    try {
      const response = await fetch("http://localhost:8080/posts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(post),
      });
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      alert("Post added successfully!");
    } catch (error) {
      alert("Wrong id: " + error.message);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          defaultValue={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
          id="title"
          type="text"
          placeholder="Title"
        />
      </div>
      <div>
        <input
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
          id="author"
          type="text"
          placeholder="Author"
        />
      </div>
      <div>
        <input
          value={content}
          onChange={(e) => {
            setContent(e.target.value);
          }}
          id="content"
          type="text"
          placeholder="Content"
        />
      </div>
      <button
        className="form-button"
        disabled={
          title.length === 0 || author.length === 0 || content.length === 0
        }
      >
        Add Post
      </button>
    </form>
  );
};
