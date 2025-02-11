import { useContext, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import GithubContext from "../context/github/GithubContext";
import Spinner from "../components/layout/Spinner";
import { FaUsers, FaUserFriends, FaCodepen, FaStore } from "react-icons/fa";
import ReposList from "../components/repos/ReposList";
import { getUserandRepos } from "../context/github/GithubActions";

function User() {
  const { login } = useParams();
  const { dispatch, user, loading } = useContext(GithubContext);
  useEffect(() => {
    dispatch({ type: "SET_LOADING" });
    const getUserData = async () => {
      const userAndRepos = await getUserandRepos(login);
      dispatch({ type: "GET_USER_AND_REPOS", payload: userAndRepos });
    };
    getUserData();
  }, [dispatch, login]);
  const {
    avatar_url,
    followers,
    following,
    name,
    type,
    location,
    bio,
    blog,
    twitter_username,
    html_url,
    company,
    public_repos,
    public_gists,
    hireable,
  } = user || {};
  const blogUrl = blog?.startsWith("http") ? blog : `https://${blog}`;

  if (loading) {
    return <Spinner />;
  }
  return (
    <>
      <div className="w-full mx-auto">
        <Link
          to={"/"}
          className="m-4 btn btn-ghost border-stone-400 hover:border-stone-500 "
        >
          Back To Search
        </Link>
        <div className="grid grid-cols-1 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 mb-8 ">
          <div className="mb-6 md:mb-0 custom-image">
            <div className="card image-full w-40 shadow-xl xl:max-w-max lg:w-96 md:w-80 sm:w-60">
              <figure>
                <img src={avatar_url} alt="profile" />
              </figure>
              <div className="card-body justify-end">
                <h2 className="card-title">{name}</h2>
                <p className="max-h-max">{login}</p>
              </div>
            </div>
          </div>
          <div className="xl:col-span-2 lg:col-span-2 md:col-span-2 col-span-3  ">
            <div className="mb-6 flex items-center">
              <h1 className="card-title mr-4 text-3xl">{name}</h1>
              <div className="badge badge-success mx-3">{type}</div>
              {hireable && (
                <div className="badge badge-info mx-3">Hireable</div>
              )}
            </div>
            <p>{bio || "No bio available"}</p>
            <div className="card-actions mt-4">
              <a
                href={html_url}
                target="_blank"
                rel="noreferrer"
                className="btn btn-outline"
              >
                Visit Github Profile
              </a>
            </div>
            <div className="stats rounded-lg shadow-md w-full bg-base-100">
              {location && (
                <div className="stat">
                  <div className="stat-title text-md">Location</div>
                  <div className="stat-value text-lg">{location}</div>
                </div>
              )}
              {blog && (
                <div className="stat">
                  <div className="stat-title text-md">Website</div>
                  <div className="stat-value text-lg">
                    <a href={blogUrl} rel="noreferrer" target="_blank">
                      {blog}
                    </a>
                  </div>
                </div>
              )}
              {twitter_username && (
                <div className="stat">
                  <div className="stat-title text-md">X Profile</div>
                  <div className="stat-value text-lg">
                    <a
                      href={`https://x.com/${twitter_username}`}
                      rel="noreferrer"
                      target="_blank"
                    >
                      {twitter_username}
                    </a>
                  </div>
                </div>
              )}
            </div>
          </div>
          <div className="stats mt-5 rounded-lg col-span-3 shadow-md w-full bg-base-100">
            <div className="stat">
              <div className="stat-figure">
                <FaUsers className="text-3xl text-blue-500" />
              </div>
              <div className="stat-title text-md">Followers</div>
              <div className="stat-value text-lg">{followers}</div>
            </div>
            <div className="stat ">
              <div className="stat-figure">
                <FaUserFriends className="text-3xl text-blue-500 " />
              </div>
              <div className="stat-title text-md">Following</div>
              <div className="stat-value text-lg">{following}</div>
            </div>
            <div className="stat ">
              <div className="stat-figure">
                <FaCodepen className="text-3xl text-blue-500 " />
              </div>
              <div className="stat-title text-md">Public Repos</div>
              <div className="stat-value text-lg">{public_repos}</div>
            </div>
            <div className="stat ">
              <div className="stat-figure">
                <FaStore className="text-3xl text-blue-500 " />
              </div>
              <div className="stat-title text-md">Public Gists</div>
              <div className="stat-value text-lg">{public_gists}</div>
            </div>
          </div>
        </div>
        <ReposList />
      </div>
    </>
  );
}

export default User;
