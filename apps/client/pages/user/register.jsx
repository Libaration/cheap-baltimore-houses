import ContentLayout from "../../components/ContentLayout";
import UserRegister from "../../components/user/UserRegister";
import { isLoggedIn } from "../../lib/SWRCalls/session";
const RegisterPage = (props) => {
  return (
    <ContentLayout>
      <UserRegister {...props} />
    </ContentLayout>
  );
};
export const getServerSideProps = async (ctx) => {
  const response = await fetch("https://assets10.lottiefiles.com/packages/lf20_yAh844.json");
  const animationData = await response.json();
  if (isLoggedIn(ctx)) {
    return {
      redirect: {
        destination: "/user",
        permanent: false,
      },
    };
  }
  return {
    props: {
      animationData,
    },
  };
};
export default RegisterPage;
