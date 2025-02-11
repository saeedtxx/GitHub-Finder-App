import { FaEye, FaInfo, FaLink, FaStar, FaUtensils } from "react-icons/fa";

function ReposItem({ repos }) {
  return (
    <div>
      <div className="card mb-2 rounded-md shadow-xl w-3/4 mx-auto ">
        <div className="card-body ">
          <h2 className="card-title hover:text-blue-500">
            <a href={repos.html_url}>
              <FaLink className="inline mr-2" />
              {repos.name}
            </a>
          </h2>
          <h3>
            <p>{repos.description}</p>
          </h3>
          <div className="inline">
            <div className="badge mt-1 badge-primary badge-outline gap-2 mr-2">
              <FaEye />
              <p>{repos.watchers_count}</p>
            </div>
            <div className="badge mt-1 badge-accent badge-outline gap-2 mr-2">
              <FaStar />
              <p>{repos.stargazers_count}</p>
            </div>
            <div className="badge mt-1 badge-secondary badge-outline gap-2 mr-2">
              <FaInfo />
              <p>{repos.open_issues}</p>
            </div>{" "}
            <div className="badge mt-1 badge-warning badge-outline gap-2 mr-2">
              <FaUtensils />
              <p>{repos.forks}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReposItem;
