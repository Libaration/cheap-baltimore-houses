import ContentLayout from "../../components/ContentLayout";
import UserRegister from "../../components/user/UserRegister";
const RegisterPage = (props) => {
  return (
    <ContentLayout>
      <UserRegister {...props} />
    </ContentLayout>
  );
};
export const getStaticProps = async () => {
  const response = await fetch("https://assets10.lottiefiles.com/packages/lf20_yAh844.json");
  const animationData = await response.json();
  return {
    props: {
      animationData,
    },
  };
};
export default RegisterPage;
