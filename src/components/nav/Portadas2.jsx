import '../Home.css';

const Portadas2 = ({ image, title, items }) => {
  return (
    <div className="portada-card">
      <div className="portada-image-container2">
        <img src={image} alt={title} className="portada-image2" />
      </div>
      <div className="portada-content">
        <h2>{title}</h2>
        <ul>
          {items.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Portadas2;