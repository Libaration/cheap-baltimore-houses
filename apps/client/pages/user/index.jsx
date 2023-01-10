import { useUser } from "../../lib/SWRCalls/user";
import { useRouter } from "next/router";
import { useEffect } from "react";
const UserProfilePage = () => {
  const router = useRouter();
  const { user, isLoading, isError } = useUser(
    typeof window !== "undefined" && localStorage.getItem("token")
  );
  useEffect(() => {
    if (isError) {
      router.push("/user/register");
    }
  }, [isError, router]);
  return (
    <div>
      {!isLoading && (
        <div>
          {console.log(user)}
          <h1>Profile</h1>
          <p>{user.email}</p>
        </div>
      )}
    </div>
  );
};
export default UserProfilePage;
