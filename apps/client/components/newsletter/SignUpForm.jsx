import React, { useState, useEffect } from "react";
import { useCheckEmail } from "../../lib/SWRCalls/user";
import { Button, Input, useInput } from "@nextui-org/react";
import Router from "next/router";
const SignUpForm = () => {
  const { value, reset, bindings } = useInput("");
  const [shouldCheck, setShouldCheck] = useState(false);
  const [isDisabled, setIsDisabled] = useState("disabled");
  const [isValid, setIsValid] = useState(false);

  const { data, isLoading } = useCheckEmail(shouldCheck, value);
  const validateEmail = (value) => {
    const isValidEmail = value.match(
      /(?:[a-z0-9+!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/i
    );
    setIsDisabled(!isValidEmail);
    return isValidEmail;
  };
  const helper = React.useMemo(() => {
    if (!value) {
      setIsDisabled("disabled");
      return {
        text: "",
        color: "",
      };
    }
    setIsValid(validateEmail(value));
    if (isValid) {
      return {
        text: "Correct email",
        color: "success",
      };
    }
    if (!isValid) {
      return {
        text: "Enter a valid email",
        color: "error",
      };
    } else if (isLoading) {
      return {
        text: "Checking email...",
        color: "warning",
      };
    }
  }, [value, isLoading]);
  useEffect(() => {
    if (data && data.disposable) {
      setIsValid(false);
      helper.color = "error";
      helper.text = "Disposable emails are not allowed";
      setShouldCheck(false);
    } else if (data && !data.disposable) {
      setShouldCheck(false);
      setIsValid(true);
      Router.push({
        pathname: "/user/register",
        query: { email: value },
      });
    }
  }, [data, helper]);
  const handleButtonClick = () => {
    setShouldCheck(true);
  };
  return (
    <div className="mx-auto relative max-w-xl">
      <div className="mb-10">
        <Input
          {...bindings}
          status={helper.color}
          color={helper.color}
          helperColor={helper.color}
          helperText={helper.text}
          size="xl"
          type="email"
          label="Email"
          placeholder="Enter your email"
          width="100%"
        />
      </div>
      <div className="flex justify-center">
        <Button color="warning" size="sm" onClick={handleButtonClick} disabled={isDisabled}>
          Sign Up
        </Button>
      </div>
      {/* <span className="text-sm">or</span> <br />
      <div className="flex justify-center">
        <Button color="success" size="md" onClick={handleButtonClick} disabled={isDisabled}>
          Create an Account
        </Button>
      </div> */}
    </div>
  );
};
export default SignUpForm;
