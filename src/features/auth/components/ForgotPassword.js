// src/features/counter/Counter.js
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { Navigate } from "react-router-dom";
// import { checkUserAsync } from "../auth/authSlice";

function ForgotPassword() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  // console.log(errors);
  const dispatch = useDispatch();
  // console.log(user); // this logs logincredentails

  return (
    <>
      {/*
        This example requires updating your template:

        ```
        <html class="h-full bg-white">
        <body class="h-full">
        ```
      */}
      {/* the above line logins the logged in user's details. If user is logged in, it redirects to homepage. Otherwise, it renders the login form. */}
      <div className="flex min-h-full flex-1 flex-col justify-center px-6 py-12 lg:px-8">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <img
            alt="Your Company"
            src="https://tailwindui.com/plus/img/logos/mark.svg?color=indigo&shade=600"
            className="mx-auto h-10 w-auto"
          />
          <h2 className="mt-10 text-center text-2xl/9 font-bold tracking-tight text-gray-900">
            Enter email to reset password{" "}
          </h2>
        </div>

        <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
          <form
            noValidate
            onSubmit={handleSubmit((data) => {
              console.log(data); 
              // TODO: implementation of this in the backend
            })}
            className="space-y-6"
          >
            <div>
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900 text-left"
              >
                Email address
              </label>
              <div className="mt-2">
                <input
                  id="email"
                  // name="email"
                  {...register("email", {
                    required: "email is required",
                    pattern: {
                      value: /\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/gi,
                      message: "invalid email",
                    },
                  })}
                  type="email"
                  required
                  autoComplete="email"
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
                <p className="text-red-500 text-xs italic">
                  {errors.email && errors.email.message}{" "}
                </p>
                {errors && (
                  <p className="text-red-500 text-xs italic">
                    {errors.message}{" "}
                  </p>
                )}
              </div>
            </div>

            <div>
              <button
                type="submit"
                className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Send Email
              </button>
            </div>
          </form>

          <p className="mt-10 text-center text-sm/6 text-gray-500">
            Send me back to{" "}
            <Link
              to="/login"
              href="#"
              className="font-semibold text-indigo-600 hover:text-indigo-500"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
    </>
  );
}

export default ForgotPassword;
