import Alert from "../components/layout/Alert";
import UserResults from "../components/users/UserResults";
import UserSearch from "../components/users/UserSearch";

function Home() {
  return (
    <>
      <UserSearch />
      <Alert />
      <UserResults />
    </>
  );
}

export default Home;
