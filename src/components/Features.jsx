import "../styles/features.css";

function Features({ images, content }) {
  return (
    <section className="feature-container">
      {content.map((item, index) => (
        <div className="feature-item" key={index}>
          <img src={images[index]} alt="" className="icons" />
          <h3 className="title">{item.heading}</h3>
          <p>{item.para}</p>
        </div>
      ))}
    </section>
  );
}

export default Features;
