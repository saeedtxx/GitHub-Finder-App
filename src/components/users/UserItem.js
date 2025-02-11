import { Link } from "react-router-dom";

function UserItem({
  user: { login, avatar_url, followers_url, following_url },
}) {
  return (
    <div className="card card-side bg-base-100 shadow-xl compact">
      <div className="card-body flex-row items-center space-x-4">
        <div className="avatar">
          <div className="ring-current ring-offset-base-100 w-24 rounded-full ring-2 ring-offset-1">
            <img src={avatar_url} alt={login} />
          </div>
        </div>
        <div>
          <h2 className="card-title mb-3">{login}</h2>
          <Link
            className="text-base-content text-opacity-40"
            to={`/user/${login}`}
          >
            Visit Profile
          </Link>
        </div>
      </div>
    </div>
  );
}

export default UserItem;
