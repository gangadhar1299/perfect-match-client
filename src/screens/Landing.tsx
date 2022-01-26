import { Page } from "components";

function LandingScreen() {
  return (
    <Page>
      <div className="container flex place-items-center justify-between py-16 flex-col md:flex-row">
        <div className="px-4">
          <h1 className="text-6xl font-semibold">
            Find your
            <div>
              <span className="text-primary">perfect</span> match!
            </div>
          </h1>
          <p className="mt-6 text-xl">
            We help you find your best life partner!
          </p>
        </div>
        <img
          className="w-11/12 md:w-3/5 mt-6 md:m-0"
          src="https://images.unsplash.com/photo-1597157639073-69284dc0fdaf?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2948&q=80"
          alt="wedding"
        />
      </div>
    </Page>
  );
}

export default LandingScreen;
