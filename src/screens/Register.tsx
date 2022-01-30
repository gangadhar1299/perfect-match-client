import { Page } from "components";
import { Select } from "components";
import { CAST_OPTIONS, RELIGION_OPTIONS, ZODIAC_OPTIONS } from "data";
import { useMutation } from "react-query";
import { register } from "utils/auth";
import { ImSpinner8 } from "react-icons/im";
import { useAuth } from "AuthProvider";
import { User } from "../../types";

interface RegisterResponse {
  success: string;
  data: {
    user: User;
    token: string;
  };
}

interface ErrorResponse {
  status: boolean;
  message: string;
}

function RegisterScreen() {
  const { isLoading, error, mutate } = useMutation<
    RegisterResponse,
    ErrorResponse,
    any
  >(register);

  const { updateUserAndToken } = useAuth();

  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const formData = new FormData(evt.currentTarget);

    const registerData = Object.fromEntries(formData.entries());

    mutate(registerData, {
      onSuccess: (res) => {
        console.log(res);
        updateUserAndToken(res.data.user, res.data.token);
      },
    });
  };

  return (
    <Page>
      {error ? <p>{error?.message}</p> : null}
      <div className="container mt-6">
        <form
          onSubmit={handleSubmit}
          className="bg-white w-11/12 md:w-1/2 m-auto shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <h1 className="text-2xl font-semibold">Register your Account</h1>
          <div className="mt-6">
            <label className="input-text-label">Username</label>
            <input
              name="username"
              id="username"
              className="input-text"
              required
            />
          </div>
          <div className="mt-6">
            <label className="input-text-label">First name</label>
            <input
              name="firstName"
              id="first-name"
              className="input-text"
              required
            />
          </div>
          <div className="mt-6">
            <label className="input-text-label">Last name</label>
            <input
              name="lastName"
              id="last-name"
              className="input-text"
              required
            />
          </div>

          <div className="mt-6">
            <div className="input-text-label">Gender</div>
            <div className="flex gap-3">
              <label
                htmlFor="male"
                className="flex gap-1 place-items-center font-semibold"
              >
                <input type="radio" name="gender" id="male" />
                Male
              </label>
              <label
                htmlFor="female"
                className="flex gap-1 place-items-center font-semibold"
              >
                <input type="radio" name="gender" id="female" />
                Female
              </label>
            </div>
          </div>
          <div className="mt-6">
            <label className="input-text-label">Date of birth</label>
            <input type="date" className="input-text" name="dob" id="dob" />
          </div>
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
          <div className="mt-6">
            <label className="input-text-label">Phone</label>
            <input
              type="tel"
              name="mobile"
              id="mobile"
              className="input-text"
              maxLength={10}
              required
            />
          </div>

          <div className="mt-6">
            <label className="input-text-label" htmlFor="religion">
              Religion
            </label>
            <Select options={RELIGION_OPTIONS} name="religion" id="religion" />
          </div>

          <div className="mt-6">
            <label className="input-text-label" htmlFor="caste">
              Caste
            </label>
            <Select options={CAST_OPTIONS} name="caste" id="religion" />
          </div>

          <div className="mt-6">
            <label className="input-text-label" htmlFor="caste">
              Zodiac sign
            </label>
            <Select options={ZODIAC_OPTIONS} name="zodiac" id="zodiac" />
          </div>

          <div className="mt-6 ">
            <button
              className="bg-primary py-2 px-4 rounded text-white font-semibold"
              type="submit"
            >
              Register{" "}
              {isLoading ? <ImSpinner8 className="animate-spin" /> : null}
            </button>
          </div>
        </form>
      </div>
    </Page>
  );
}

export default RegisterScreen;
