import { useState } from "react";

export const AddPostForm = ({ onAddPost }) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onAddPost({ title, author, content });
      }}
    >
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
          defaultValue={author}
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
          defaultValue={content}
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
