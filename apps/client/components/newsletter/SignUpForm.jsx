import React, { useState } from "react";
const SignUpForm = (props) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  //   const handleSubmit = (event) => {
  //     event.preventDefault();
  //     onSubmit({ email, password });
  //   };

  return (
    <div className="mx-auto max-w-xl">
      <form action="" className="space-y-5">
        <div>
          <label
            htmlFor="email"
            className="mb-1 block text-sm font-medium text-gray-700"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            className="block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-400 focus:ring focus:ring-primary-200 focus:ring-opacity-50 disabled:cursor-not-allowed disabled:bg-gray-50 disabled:text-gray-500"
            placeholder="you@email.com"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <button
          type="button"
          className="rounded-lg border border-primary-500 bg-primary-500 px-5 py-2.5 text-center text-sm font-medium text-white shadow-sm transition-all hover:border-primary-700 hover:bg-primary-700 focus:ring focus:ring-primary-200 disabled:cursor-not-allowed disabled:border-primary-300 disabled:bg-primary-300"
        >
          Sign up
        </button>
      </form>
    </div>
  );
};
export default SignUpForm;
