import { useState } from "react";

export const ModifyPostForm = ({ onModifyPost }) => {
  const [actualTitle, setActualTitle] = useState("");
  const [newTitle, setNewTitle] = useState("");
  const [newContent, setNewContent] = useState("");

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        onModifyPost({ actualTitle, newTitle, newContent });
      }}
    >
      <div>
        <input
          value={actualTitle}
          onChange={(e) => setActualTitle(e.target.value)}
          id="actualTitle"
          type="text"
          placeholder="Post's title to Modify"
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
          value={newContent}
          onChange={(e) => setNewContent(e.target.value)}
          id="newContent"
          type="text"
          placeholder="New content"
        />
      </div>
      <button className="form-button" disabled={actualTitle.length === 0}>
        Modify Post
      </button>
    </form>
  );
};
