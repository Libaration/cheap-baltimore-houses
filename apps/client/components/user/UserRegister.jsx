import { Container, Card, Row, Text, Button, Input, Spacer } from "@nextui-org/react";
import Lottie from "react-lottie-player";
import { useState } from "react";
import { useRouter } from "next/router";
import { checkPasswordStrength } from "./utils/passwordStrength";
import { useCheckEmail, sendUserCreate } from "../../lib/SWRCalls/user";
const UserRegister = ({ animationData }) => {
  const router = useRouter();
  const [isPlaying, setIsPlaying] = useState(true);
  const [password, setPassword] = useState("");
  const { passwordLabel, inputColor, score } = checkPasswordStrength(password);
  const [endTime, setEndTime] = useState(36.4985);
  const [shouldCheck, setShouldCheck] = useState(false);
  const [disposable, setDisposable] = useState(false);
  const handleRegisterClick = () => {
    setEndTime(141);
    setIsPlaying(true);
    setShouldCheck(true);
  };
  const registerUser = async () => {
    const user = {
      email: router.query.email,
      password: password,
    };
    const r = await sendUserCreate(user);
    if (r.data.token) {
      localStorage.setItem("token", r.data.token);
      router.push("/user");
    } else {
      console.log(r);
    }
  };
  const { data } = useCheckEmail(shouldCheck, router.query.email);
  return (
    <Container>
      <Card>
        <Card.Body>
          <Row justify="center" align="center">
            <Lottie
              speed={2.5}
              loop={false}
              play={isPlaying}
              animationData={animationData}
              style={{ width: 200, height: 200 }}
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
              value={router.query.email || ""}
              readOnly
              label={disposable ? "Disposable emails are not accepted." : "Email"}
              size="sm"
              status={disposable ? "error" : "success"}
              rounded
              width="10em"
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
        </Card.Body>
      </Card>
    </Container>
  );
};

export default UserRegister;
