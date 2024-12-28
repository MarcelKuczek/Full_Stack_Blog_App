import { useState } from "react";

export const DeletePostForm = () => {
  const [id, setId] = useState("");

  const onDeletePost = async ({ id }) => {
    if (!id || isNaN(Number(id))) {
      alert("Invalid post ID. Please provide a numeric ID.");
      return;
    }

    try {
      const response = await fetch(`http://localhost:8080/posts/${id}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      alert("Post deleted successfully.");
    } catch (error) {
      alert("Wrong id: " + error.message);
    }
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
