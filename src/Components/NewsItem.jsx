import image from "../assets/qr-code.png";
const NewsItem = ({ title, description, src, url, publishedAt }) => {
  return (
    <div
      className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2"
      style={{ maxWidth: "320px" }}
    >
      <img
        src={src ? src : image}
        style={{ maxHeight: "200px", width: "305px" }}
        className="card-img-top"
        alt={description}
      />
      <div className="card-body">
        <h5 className="card-title">{title.slice(0, 50)}</h5>
        <p className="card-text">
          {description ? description.slice(0, 80) : "Blog content"}
        </p>
        <p className="card-text">{publishedAt}</p>
        <a href={url} className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
