import Card from "./Card";

function Preview({ formData }) {
  return (
    <section className="preview">
      <div className="projectImage">
        <img src={formData.image} />
      </div>
      <Card formData={formData} />
    </section>
  );
}
export default Preview;
