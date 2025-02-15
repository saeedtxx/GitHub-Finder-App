import React, { useContext } from "react";
import Spinner from "../layout/Spinner";
import UserItem from "./UserItem";
import GithubContext from "../../context/github/GithubContext";

function UserResults() {
  // Access users and loading state from context
  const { users, loading } = useContext(GithubContext);

  if (!loading) {
    return (
      // Render user items in a responsive grid layout
      <>
        <div className="my-20">
          <div className="grid grid-cols-1 gap-8 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 ">
            {users.map((user) => (
              <UserItem key={user.id} user={user} />
            ))}
          </div>
        </div>
      </>
    );
  } else {
    // Show spinner while loading data
    return <Spinner />;
  }
}
export default UserResults;
