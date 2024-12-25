import { NavBar } from "./components/NavBar";
import { useState } from "react";
import { AddPostForm } from "./components/AddPostForm";
import { DeletePostForm } from "./components/DeletePostForm";
import { ModifyPostForm } from "./components/ModifyPostForm";
import { PostBoard } from "./components/PostBoard";
import { Footer } from "./components/Footer";

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
      <main>
        <div id="formHandler">{renderForm()}</div>
        <PostBoard />
      </main>
      <Footer />
    </>
  );
}

export default App;
