import { useState } from "react";

export const AddCommentForm = () => {
  const [isFormShown, setIsFormShown] = useState(false);
  const handleShowFormClick = () => setIsFormShown(!isFormShown);
  return (
    <>
      <button className="addCommentButton" onClick={handleShowFormClick}>
        Add Comment
      </button>
      {isFormShown && (
        <>
          <form className="addCommentForm">
            <input type="text"></input>
          </form>
        </>
      )}
    </>
  );
};
