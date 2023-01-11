import { useUser } from "../../lib/SWRCalls/user";
const UserProfilePage = () => {
  const { data, isError, isLoading, mutate, loggedOut } = useUser();
  const renderProfile = () => {
    if (true) {
      return (
        <div>
          <h1>Profile</h1>
          <p>testing123</p>
        </div>
      );
    }
  };
  return <div>{renderProfile()}</div>;
};

export default UserProfilePage;
