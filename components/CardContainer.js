
export default function CardContainer({ image, title, description }) {
  return (
    <div className="card">
      <img src={image} alt={title} />
      <h3 className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
    </div>
  );
}
