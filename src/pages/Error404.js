import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";

function Error404() {
  return (
    <div className="hero">
      <div className=" text-center hero-content">
        <div className="max-w-lg">
          <h1 className="text-5xl font-bold">Oops!</h1>
          <p className="py-6">The page you are looking for does not exist.</p>
          <Link to="/" className="btn btn-primary">
            <FaHome /> Go to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Error404;
