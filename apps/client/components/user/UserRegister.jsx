import { Container, Card, Row, Text, Button, Input, Spacer } from "@nextui-org/react";
import Lottie from "react-lottie-player";
import { useState, useRef } from "react";
import { useRouter } from "next/router";
import { checkPasswordStrength } from "./utils/passwordStrength";
import { useCheckEmail, sendUserCreate, sendUserLogin } from "../../lib/SWRCalls/user";
import { loginWithTokenOrUser } from "../../lib/SWRCalls/session";
const UserRegister = ({ animationData }) => {
  const router = useRouter();
  const [isPlaying, setIsPlaying] = useState(true);
  const [password, setPassword] = useState("");
  const { passwordLabel, inputColor, score } = checkPasswordStrength(password);
  const [endTime, setEndTime] = useState(36.4985);
  const [shouldCheck, setShouldCheck] = useState(false);
  const [disposable, setDisposable] = useState(false);
  const [error, setError] = useState("");
  const lottieRef = useRef(null);
  const [email, setEmail] = useState(router.query.email ? router.query.email : "");
  const handleRegisterClick = () => {
    setEndTime(141);
    setIsPlaying(true);
    setShouldCheck(true);
  };
  const registerUser = async () => {
    const inputs = {
      email: router.query.email ? router.query.email : email,
      password: password,
    };
    const userResponse = await sendUserCreate(inputs);
    console.log(userResponse);
    if (userResponse.error) {
      setError(userResponse.error.message);
      setPassword("");
      setEmail("");
      setEndTime(36.4985);
      lottieRef.current.goToAndPlay(0);
      return;
    }
    if (userResponse.jwt) {
      console.log(userResponse);
      loginWithTokenOrUser(userResponse);
      router.push("/user");
    } else {
      router.push("/user/register");
    }
  };

  const handleLoginClick = async () => {
    const inputs = {
      email: router.query.email || email,
      password: password,
    };
    const userResponse = await sendUserLogin(inputs);
    if (userResponse.error) {
      setError(userResponse.error.message);
      setPassword("");
      setEmail("");
      setEndTime(36.4985);
      return;
    }
    if (userResponse.jwt) {
      console.log(userResponse);
      loginWithTokenOrUser(userResponse);
      router.push("/user");
    } else {
      router.push("/user/register");
    }
  };
  const { data } = useCheckEmail(shouldCheck, router.query.email);
  return (
    <Container>
      <Card>
        <Card.Body>
          <Row justify="center" align="center">
            <Text size={14} css={{ m: 0, color: "Red" }}>
              {error}
            </Text>
          </Row>
          <Row justify="center" align="center">
            <Lottie
              speed={2.5}
              loop={false}
              play={isPlaying}
              animationData={animationData}
              style={{ width: 200, height: 200 }}
              ref={lottieRef}
              onEnterFrame={(e) => {
                if (e.currentTime > endTime) {
                  setIsPlaying(false);
                }
              }}
              onComplete={() => {
                setShouldCheck(false);
                data && data.disposable ? setDisposable(true) : registerUser();
              }}
            />
          </Row>

          <Row justify="center" align="center">
            <Text size={15} css={{ m: 0 }}></Text>
            <Input
              value={email}
              label={disposable ? "Disposable emails are not accepted." : "Email"}
              size="sm"
              status={disposable ? "error" : "success"}
              rounded
              width="10em"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Row>
          <Spacer y={0.5} />
          <Row justify="center" align="center">
            <Input.Password
              label={passwordLabel}
              initialValue={password}
              size="sm"
              status={inputColor}
              rounded
              onChange={(e) => setPassword(e.target.value)}
            />
          </Row>
          <Row justify="center" align="center" className="mt-5">
            <Button onPress={handleRegisterClick} color="warning" disabled={score < 2}>
              Register
            </Button>
          </Row>
          <Row justify="center" align="center" className="mt-5">
            <Button onPress={handleLoginClick} color="success" size="sm">
              Login
            </Button>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default UserRegister;
