import React, { useContext } from "react";
import GithubContext from "../../context/github/GithubContext";
import ReposItem from "./ReposItem";

function ReposList() {
  const { repos } = useContext(GithubContext);
  return (
    <div>
      {repos.length > 0 && (
        <p className="text-center py-4 font-bold ">
          Latest 10 Created Repositories
        </p>
      )}
      {repos.map((repos) => (
        <ReposItem key={repos.id} repos={repos} />
      ))}
    </div>
  );
}

export default ReposList;
