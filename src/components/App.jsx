import "../styles/App.scss";
import Logo from "../images/adalab.png"
import Laptop from "../images/laptop-code-solid.svg"
import { useState } from "react";

// VARIABLES



// FUNCIONES
// EVENTOS






//HTML

function App() {
  const [formData, setFormData] = useState({
    name: "Elegant Workspace",
    slogan: "Diseños exclusivos",
    repo: "",
    demo: "",
    technologies: "React JS - HTML - CSS",
    desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut alias rem ab, vero illo nostrum sequi quasi placeat impedit facilis dolore inventore nihil sint amet soluta! Accusamus ex illum animi!",
    autor:"Emmelie Björklund",
    job: "Full Stack Developer",
  });


  const handleInput = (ev) => {
    const {name, value} = ev.target;
     setFormData({
      ...formData,
      [name]: value
    });

  

}
const handleSubmit = (ev) => {
  ev.preventDefault();
};
  return (

    <div className="container">

      <header className="header">
        <a className="header__brand" href="./" title="Haz click para volver a la página inicial">
          <img className="header__companyLogo" src={Laptop} alt="Logo proyectos molones" />
          <h1 className="header__title">Proyectos molones</h1>
        </a>
        <img className="logoSponsor" src={Logo} alt="Logo Adalab" />
      </header>

      <main className="main">
        <section className="hero">
          <h2 className="title">Proyectos molones</h2>
          <p className="hero__text">Escaparate en línea para recoger ideas a través de la tecnología</p>
          <a className="button--link" href="./">Ver proyectos</a>
        </section>

        <section className="preview">
          <div className="projectImage"></div>
          <article className="card">
            <h2 className="card__projectTitle"><span className="card__projectTitle--text">Personal project card</span></h2>

            <div className="card__author">
              <div className="card__authorPhoto"></div>
              <p className="card__job">
                {formData.job}
              </p>
              <h3 className="card__name">{formData.autor}</h3>
            </div>

            <div className="card__project">
              <h3 className="card__name">{formData.name}</h3>
              <p className="card__slogan">{formData.slogan}</p>
              <h3 className="card__descriptionTitle">Product description</h3>
              <p className="card__description">{formData.desc}</p>

              <div className="card__technicalInfo">
                <p className="card__technologies">{formData.technologies}</p>

                <a className="icon icon__www" href={formData.demo} title="Haz click para ver el proyecto online">
                  {formData.demo}
                </a>
                <a className="icon icon__github" href={formData.repo} title="Haz click para ver el código del proyecto">
                  {formData.repo}
                </a>
              </div>
            </div>
          </article>
        </section>
        <form onSubmit={handleSubmit} className="addForm">
          <h2 className="title">Información</h2>
          <fieldset className="addForm__group">
            <legend className="addForm__title">Cuéntanos sobre el proyecto</legend>
            <input className="addForm__input" type="text" name="name" id="name" placeholder="Nombre del proyecto" onInput={handleInput} />
            <input className="addForm__input" type="text" name="slogan" id="slogan" placeholder="Slogan" onInput={handleInput}/>
            <div className="addForm__2col">
              <input className="addForm__input" type="url" name="repo" id="repo" placeholder="Repositorio"onInput={handleInput} />
              <input className="addForm__input" type="url" name="demo" id="demo" placeholder="Demo"onInput={handleInput} />
            </div>
            <input className="addForm__input" type="text" name="technologies" id="technologies" placeholder="Tecnologías"onInput={handleInput} />
            <textarea className="addForm__input" type="text" name="desc" id="desc" placeholder="Descripción" rows="5" onInput={handleInput}></textarea>
          </fieldset>

          <fieldset className="addForm__group">
            <legend className="addForm__title">Cuéntanos sobre la autora</legend>
            <input className="addForm__input" type="text" name="autor" id="autor" placeholder="Nombre" onInput={handleInput}/>
            <input className="addForm__input" type="text" name="job" id="job" placeholder="Trabajo"onInput={handleInput} />
          </fieldset>

          <fieldset className="addForm__group--upload">
            <label className="button">
              Subir foto del proyecto
              <input className="addForm__hidden" type="file" />
            </label>
            <label className="button">
              Subir foto de la autora
              <input className="addForm__hidden" type="file" />
            </label>
            <button className="button--large">Guardar proyecto</button>
          </fieldset>

        </form>
      </main>

      <footer className="footer">
        <img className="logoSponsor" src={Logo} alt="Logo Adalab" />
      </footer>

    </div>


  );
}

export default App;
