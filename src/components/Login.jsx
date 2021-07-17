import { withRouter, Redirect } from "react-router";
import { useCallback, useContext, useState } from "react";
import { adminFirebaseAuth } from "../services/config";
import { AuthContext } from "../Auth";

function Login({ history }) {
  const styler =
    "appearence-none w-full py-2 px-3 text-grey-darker mb-2 border ring-2 border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 rounded";

  const [initMessage, setMessage] = useState(null);

  const loginHandler = useCallback(
    async (e) => {
      e.preventDefault();
      const { email, password } = e.target.elements;
      try {
        await adminFirebaseAuth.signInWithEmailAndPassword(
          email.value,
          password.value
        );
        history.push("/admin");
      } catch (error) {
        setMessage(error.message);
      }
    },
    [history]
  );

  const { currentStatus } = useContext(AuthContext);

  if (currentStatus) {
    return <Redirect to="/admin/dashboard" />;
  }

  return (
    <section className="md:w-1/4 w-4/5 mx-auto mt-20">
      <form onSubmit={loginHandler}>
        <div className="rounded px-8 pt-6 pb-8 mb-4 bg-white">
          {initMessage != null && (
            <p className="mt-5 mb-5 text-white bg-red-600 p-2 border-2 border-red-500">
              {initMessage}
            </p>
          )}
          <div className="mb-4">
            <label className="block text-gray-darker text-sm font-bold mb-2">
              Email
            </label>
            <input className={styler} type="email" name="email" required />
          </div>
          <div className="mb-4">
            <label className="block text-gray-darker text-sm font-bold mb-2">
              Password
            </label>
            <input
              className={styler}
              type="password"
              name="password"
              required
            />
          </div>
          <button className="bg-blue-500 text-white mt-5 px-4 py-3 hover:bg-blue-400 w-full">
            Continue
          </button>
        </div>
      </form>
    </section>
  );
}

export default withRouter(Login);
