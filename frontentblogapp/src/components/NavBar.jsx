import { useEffect, useState } from "react";

export const NavBar = ({ setActiveForm }) => {
  const [activeButton, setActiveButton] = useState("Add Post");

  const buttons = ["Add Post", "Delete Post", "Modify Post"];

  const handleButtonClick = (buttonName) => {
    setActiveButton(buttonName);
    setActiveForm(buttonName);
  };

  useEffect(() => {
    setActiveForm("Add Post");
  }, [setActiveForm]);

  return (
    <div id="navbar">
      {buttons.map((buttonName) => (
        <button
          key={buttonName}
          className="nav"
          onClick={() => handleButtonClick(buttonName)}
        >
          {activeButton === buttonName ? <b>{buttonName}</b> : buttonName}{" "}
        </button>
      ))}
    </div>
  );
};
