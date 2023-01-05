import React, { useState } from "react";
import { Button, Input } from "@nextui-org/react";
const SignUpForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     onSubmit({ email, password });
  //   };

  return (
    <div className="mx-auto relative max-w-xl">
      <form action="" className="space-y-5">
        <div>
          <Input
            size="xl"
            labelPlaceholder="Email"
            onChange={(e) => setEmail(e.target.value)}
            width="100%"
          />
        </div>
        <div className="flex justify-center">
          <Button color="warning">Sign Up</Button>
        </div>
      </form>
    </div>
  );
};
export default SignUpForm;
