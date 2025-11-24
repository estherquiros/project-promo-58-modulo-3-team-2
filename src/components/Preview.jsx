import Card from "./Card";

function Preview({formData}) {
    return (
         <section className="preview">
          <div className="projectImage"></div>
          <Card formData = {formData}/>
        </section>

    )
}
export default Preview;