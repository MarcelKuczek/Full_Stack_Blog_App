import { NavBar } from "./components/NavBar";
import { useState } from "react";
import { AddPostForm } from "./components/AddPostForm";
import { DeletePostForm } from "./components/DeletePostForm";
import { ModifyPostForm } from "./components/ModifyPostForm";

function App() {
  const [activeForm, setActiveForm] = useState(null);

  const renderForm = () => {
    switch (activeForm) {
      case "Add Post":
        return <AddPostForm />;
      case "Delete Post":
        return <DeletePostForm />;
      case "Modify Post":
        return <ModifyPostForm />;
      default:
        return null;
    }
  };

  return (
    <>
      <NavBar setActiveForm={setActiveForm} />
      <main>{renderForm()}</main>
    </>
  );
}

export default App;
