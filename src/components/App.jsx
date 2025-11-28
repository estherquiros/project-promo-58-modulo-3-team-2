import "../styles/App.scss";
import { useEffect, useState } from "react";
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

  const inicialData = {
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
  };

  const[formData, setFormData] = useState (
    JSON.parse(localStorage.getItem('form.backup')) || inicialData 
  );

  useEffect(() => {
    localStorage.setItem('form.backup', JSON.stringify(formData));
    console.log('✅ Guardado en localStorage:', formData);
  }, [formData]);



  const changeData = (fieldName, value) => {
    setFormData({
      ...formData,
      [fieldName]: value,
    });
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
        formData={formData}
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
