import { Link } from "react-router-dom";

function Error() {
  return (
    <body>
      <Link to={"/"}>
        <section className="notFound">
          <div className="img">
            <img
              src="https://assets.codepen.io/5647096/backToTheHomepage.png"
              alt="Back to the Homepage"
            />
            <img
              src="https://assets.codepen.io/5647096/Delorean.png"
              alt="El Delorean, El Doc y Marti McFly"
            />
          </div>
        </section>
      </Link>
    </body>
  );
}

export default Error