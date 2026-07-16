import {
  GoogleAuthProvider,
  signInWithEmailAndPassword,
  signInWithPopup,
  GithubAuthProvider,
} from "firebase/auth";
import React, { useContext } from "react";
import { auth } from "../Firebase/firebase.config";
import { AuthContext } from "../../App";

const Signin = () => {
  const [user, setUser] = useContext(AuthContext);
  const provider = new GoogleAuthProvider();
  const githubProvider = new GithubAuthProvider();

  const handleSigninWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((res) => {
        const data = {
          name: res.user.displayName,
          email: res.user.email,
          photo: res.user.photoURL,
        };
        setUser(data);
      })
      .catch((err) => {
        console.log("eer", err);
      });
  };
  const handleSigninWithHithub = () => {
    signInWithPopup(auth, githubProvider)
      .then((res) => {
        const data = {
          name: res.user.displayName,
          email: res.user.email,
          photo: res.user.photoURL,
        };
        setUser(data);
      })
      .catch((err) => {
        console.log("eer", err);
      });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    signInWithEmailAndPassword(auth, email, password)
      .then((res) => {
        console.log("res", res.user);

        const data = {
          name: res.user.displayName || res.user.email,
          email: res.user.email,
          photo: res?.user?.photoURL,
        };
        setUser(data);
        // window.location.href = "/dashboard";
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <div>
      <section class="">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <a
            href="#"
            class="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white"
          >
            Pshine
          </a>
          <div class="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Login to your account
              </h1>
              <form
                onSubmit={(e) => handleFormSubmit(e)}
                class="space-y-4 md:space-y-6"
              >
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>

                <button
                  type="submit"
                  className={` bg-green-500 hover:bg-green-600 w-full text-white  focus:ring-4 focus:outline-none focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800`}
                >
                  Create an account
                </button>
                <p class="text-sm font-light text-gray-500 dark:text-gray-400">
                  Already have an account?{" "}
                  <a
                    href="#"
                    class="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Login here
                  </a>
                </p>
              </form>
            </div>
            <div className="flex items-center justify-center">
              <button
                onClick={handleSigninWithGoogle}
                className=" bg-yellow-300 text-white rounded px-4 py-2 my-3"
              >
                Login in With Google
              </button>
            </div>
            <div className="flex items-center justify-center">
              <button
                onClick={handleSigninWithHithub}
                className=" bg-yellow-300 text-white rounded px-4 py-2 my-3"
              >
                Login in With Github
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Signin;
