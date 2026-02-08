"use client";

import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

import { AppDispatch } from "@/redux/store";
import { login } from "@/api/axios/auth";
import { setUser } from "@/redux/auth/authSlice";
import Button from "@/components/Button";
import ErrorModal from "@/components/Error";
import Hero from "@/components/Hero";
import Logo from "@/components/Logo";
import PasswordInput from "@/components/PasswordInput";
import Spinner from "@/components/Spinner";
import useRequest from "@/hooks/useRequest";

import heroBg from "@/assets/images/servicing-hero-bg.jpg";

interface LoginFormInputs {
  email: string;
  password: string;
}

const LoginPage = () => {
  const { register, handleSubmit } = useForm<LoginFormInputs>();

  const { data, error, loading, run, success } = useRequest((data) =>
    login(data as LoginFormInputs),
  );

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (success) {
      toast.success("Login successful!");

      dispatch(setUser(data?.data));
    }

    if (error) {
      toast.error(<ErrorModal defaultError="Login failed!" error={error} />, {
        icon: false,
      });
    }
  }, [data?.data, dispatch, error, success]);

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
                onSubmit={handleSubmit(run)}
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
                    className="w-full border border-gray-300 dark:border-gray-600 rounded-lg px-4 py-3 bg-white dark:bg-gray-700 form-input focus:outline-none focus:border-primary pr-10"
                    placeholder="name@company.com"
                    required
                    {...register("email", {
                      required: "Email address is required.",
                    })}
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium"
                  >
                    Password
                  </label>
                  <PasswordInput
                    required
                    {...register("password", {
                      required: "Password is required.",
                    })}
                  />
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
