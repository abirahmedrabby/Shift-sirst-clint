import React from "react";
import { useForm } from "react-hook-form";
import useAuth from "../../../hook/useAuth";
import { Link } from "react-router";
import SocalLogin from "../SocalLogin/SocalLogin";

const Register = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const { createUser } = useAuth();

  const onsubmit = (data) => {
    console.log(data);
    createUser(data.email, data.password)
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <h1 className="text-xl font-semibold mb-4">Create a new account!</h1>

       
          <fieldset className="fieldset">
             <form onSubmit={handleSubmit(onsubmit)}>
            <label className="label">Email</label>
            <input
              type="email"
              {...register("email", { required: true })}
              className="input"
              placeholder="Email"
            />
            {errors.email && (
              <p className="text-red-700 text-sm">Email is required</p>
            )}

            <label className="label">Password</label>
            <input
              type="password"
              {...register("password", {
                required: true,
                minLength: 6,
              })}
              className="input"
              placeholder="Password"
            />
            {errors.password?.type === "required" && (
              <p className="text-red-600 text-sm">Password is required</p>
            )}
            {errors.password?.type === "minLength" && (
              <p className="text-red-700 text-sm">
                Password must be at least 6 characters
              </p>
            )}

            <button type="submit" className="btn btn-neutral mt-4 w-full">Register</button>
             </form>
          </fieldset>
          <p>Already have a account?<Link className="btn text-red-600 btn-link" to="/login">Login</Link> </p>
          <SocalLogin></SocalLogin>
       
      </div>
    </div>
  );
};

export default Register;
