import { useState } from "react";

export const DeletePostForm = () => {
  const [id, setId] = useState("");

  const onDeletePost = async ({ id }) => {
    fetch(`http://localhost:8080/posts/${id}`, {
      method: "DELETE",
    });
  };

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onDeletePost({ id });
      }}
    >
      <div>
        <input
          value={id}
          onChange={(e) => {
            setId(e.target.value);
          }}
          id="id"
          type="text"
          placeholder="Post's id to delete"
        />
      </div>
      <button className="form-button" disabled={id.length === 0}>
        Delete Post
      </button>
    </form>
  );
};
