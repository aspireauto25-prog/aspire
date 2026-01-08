"use client";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";

import { AppDispatch } from "@/redux/store";
import { loginUser } from "@/redux/auth/authActions";
import { RootState } from "@/redux/rootReducer";
import Button from "@/components/Button";
import Hero from "@/components/Hero";
import Logo from "@/components/Logo";
import Spinner from "@/components/Spinner";

import heroBg from "@/assets/images/servicing-hero-bg.jpg";

interface LoginFormInputs {
  email: string;
  password: string;
}

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs>();

  const [showPassword, setShowPassword] = useState(false);

  const { loading, error } = useSelector((state: RootState) => state.auth);

  const dispatch = useDispatch<AppDispatch>();

  function submitForm(data: LoginFormInputs) {
    dispatch(loginUser(data)).then(() => {
      console.log(error);
    });
  }

  useEffect(() => {
    if (error) {
      toast.error("Login failed. Please check your credentials.", {
        autoClose: false,
      });
    }
  }, [error]);

  return (
    <>
      <Hero
        title={
          <>
            Log In <span className="gradient-text">To Continue</span>
          </>
        }
        subtitle="We're here to help with all your car rental and servicing needs. Reach out anytime!"
        backgroundImage={heroBg}
      />
      <section className="py-10 md:py-32">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto lg:py-0">
          <div className="hidden md:block md:mb-10">
            <Logo />
          </div>
          <div className="w-full bg-gray-50 dark:bg-gray-900 rounded-lg shadow md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight md:text-2xl">
                Sign in to your account
              </h1>
              <form
                className="space-y-4 md:space-y-6"
                onSubmit={handleSubmit(submitForm)}
              >
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                    placeholder="name@company.com"
                    {...register("email", {
                      required: "Email address is required.",
                    })}
                  />
                  <p className="text-red-600 text-sm p-1">
                    {errors.email?.message}
                  </p>
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium"
                  >
                    Password
                  </label>
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      id="password"
                      placeholder="••••••••"
                      className="bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5"
                      {...register("password", {
                        required: "Password is required.",
                      })}
                    />
                    <button
                      type="button"
                      className="absolute right-0 top-0.5 p-3 text-gray-600 cursor-pointer"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? <FaEye /> : <FaEyeSlash />}
                    </button>
                  </div>
                  <p className="text-red-600 text-sm p-1">
                    {errors.password?.message}
                  </p>
                </div>
                <Button
                  type="submit"
                  size="md"
                  className="w-full"
                  disabled={loading}
                >
                  {loading && <Spinner />}
                  Sign In
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default LoginPage;
