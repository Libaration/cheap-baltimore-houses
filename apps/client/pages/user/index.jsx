import { useUser } from "../../lib/SWRCalls/user";
import { isLoggedIn, logout } from "../../lib/SWRCalls/session";
const UserProfilePage = () => {
  const { user, isError, isLoading, NotAuthorized } = useUser();
  const renderProfile = () => {
    if (NotAuthorized) {
      return <div>401 Not Authorized</div>;
    }
    if (!user || isLoading) {
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

export const getServerSideProps = async (ctx) => {
  if (!isLoggedIn(ctx)) {
    return {
      redirect: {
        destination: "/user/register",
        permanent: false,
      },
    };
  }
  return {
    props: {},
  };
};

export default UserProfilePage;
