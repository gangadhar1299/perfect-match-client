import { Page } from "components";
import { Select } from "components";
import { CAST_OPTIONS, RELIGION_OPTIONS, ZODIAC_OPTIONS } from "data";

function RegisterScreen() {
  const handleSubmit = (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const formData = new FormData(evt.currentTarget);

    const registerData = Object.fromEntries(formData.entries());

    console.log({ registerData });
  };

  return (
    <Page>
      <div className="container mt-6">
        <form
          onSubmit={handleSubmit}
          className="bg-white w-11/12 md:w-1/2 m-auto shadow-md rounded px-8 pt-6 pb-8 mb-4"
        >
          <h1 className="text-2xl font-semibold">Register your Account</h1>
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
              name="phone"
              id="phone"
              className="input-text"
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
            <Select options={CAST_OPTIONS} name="religion" id="religion" />
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
              Login
            </button>
          </div>
        </form>
      </div>
    </Page>
  );
}

export default RegisterScreen;
