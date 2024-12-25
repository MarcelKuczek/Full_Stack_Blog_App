import { useState } from "react";

export const DeletePostForm = ({ onDeletePost }) => {
  const [title, setTitle] = useState("");
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onDeletePost({ title });
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
          placeholder="Post's title to delete"
        />
      </div>
      <button className="form-button" disabled={title.length === 0}>
        Delete Post
      </button>
    </form>
  );
};
