import { Page } from "components";
import React from "react";

function LoginScreen() {
  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const formData = new FormData(evt.currentTarget);

    const loginData = Object.fromEntries(formData.entries());
  };

  return (
    <Page>
      <div className="container mt-6">
        <form
          onSubmit={handleSubmit}
          className="bg-white w-11/12 md:w-1/2 m-auto shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <h1 className="text-2xl font-semibold">Login to your Account</h1>
          <div className="mt-6">
            <label className="input-text-label">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              className="input-text"
              required
            />
          </div>
          <div className="mt-6">
            <label className="input-text-label">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              className="input-text"
              required
            />
          </div>
          
          <div className="mt-6 ">
            <button
              className="bg-primary py-2 px-4 rounded text-white font-semibold"
              type="submit"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </Page>
  );
}

export default LoginScreen;
