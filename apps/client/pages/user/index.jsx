import { useUser } from "../../lib/SWRCalls/user";
const UserProfilePage = () => {
  const { user, isError, isLoading, loggedOut } = useUser();
  const renderProfile = () => {
    if (loggedOut) {
      return <div>You are not logged in.</div>;
    }
    if (!user || !isLoading) {
      return <div>Loading...</div>;
    } else {
      return (
        <div>
          <h1>Profile</h1>
          <p>Username: {user.username}</p>
          <p>Email: {user.email}</p>
          <p>Provider: {user.provider}</p>
          <p>Confirmed: {user.confirmed ? "Yes" : "No"}</p>
          <p>Blocked: {user.blocked ? "Yes" : "No"}</p>
          <p>Created At: {user.createdAt}</p>
          <p>Updated At: {user.updatedAt}</p>
        </div>
      );
    }
  };
  return <div>{renderProfile()}</div>;
};

export default UserProfilePage;
