import "../styles/App.scss";
import { useState } from "react";
import Header from "./layout/Header";
import Footer from "./layout/Footer";
import Hero from "./layout/Hero";
import Preview from "./Preview";
import Form from "./Form";

// VARIABLES

// FUNCIONES
// EVENTOS

//HTML

function App() {
  const [formData, setFormData] = useState({
    name: "",
    slogan: "",
    repo: "",
    demo: "",
    technologies: "",
    desc: "",
    author: "",
    job: "",
    image: "",
    photo: "",
  });

  const changeData = (fieldName, value) => {
    if (fieldName === "name") {
      setFormData({
        ...formData,
        name: value,
      });
    }
    if (fieldName === "slogan") {
      setFormData({
        ...formData,
        slogan: value,
      });
    }
    if (fieldName === "repo") {
      setFormData({
        ...formData,
        repo: value,
      });
    }
    if (fieldName === "demo") {
      setFormData({
        ...formData,
        demo: value,
      });
    }
    if (fieldName === "technologies") {
      setFormData({
        ...formData,
        technologies: value,
      });
    }
    if (fieldName === "desc") {
      setFormData({
        ...formData,
        desc: value,
      });
    }
    if (fieldName === "author") {
      setFormData({
        ...formData,
        author: value,
      });
    }
    if (fieldName === "job") {
      setFormData({
        ...formData,
        job: value,
      });
    }
    if (fieldName === "image") {
      setFormData({
        ...formData,
        image: value,
      });
    }
    if (fieldName === "photo") {
      setFormData({
        ...formData,
        photo: value,
      });
    }
  };

  const handleInput = (ev) => {
    changeData(ev.target.id, ev.target.value);
  };

  const handleSubmit = (ev) => {
    ev.preventDefault();
  };

  const handleAuthorImage = (image) => {
    setFormData({
      ...formData,
      photo: image,
    });
  };

  const handleHeroImage = (image) => {
    setFormData({
      ...formData,
      image: image,
    });
  };

  return (
    <div className="container">
      <Header />

      <main className="main">
        <Hero />
        <Preview formData={formData} />

        <Form
          handleInput={handleInput}
          handleSubmit={handleSubmit}
          handleAuthorImage={handleAuthorImage}
          handleHeroImage={handleHeroImage}
        />
      </main>

      <Footer />
    </div>
  );
}

export default App;
