import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";

import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import { toast, ToastContainer } from "react-toastify";
import { AuthContext } from "../provider/AuthProvider";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [showPassword, setShowPassword] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    const form = new FormData(e.target);

    const name = form.get("name");

    const email = form.get("email");
    const password = form.get("password");


    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        const createdAt = result.user?.metadata?.creationTime;        ;
        const newUser = { name, email , createdAt };
        // save new user info to db
        fetch("http://localhost:5001/users", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(newUser),
        })
          .then((res) => res.json())
          .then((data) => {
            if(data.insertedId){
                alert('User created in db')
            }
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div>
      <div>
        <h2 className="text-4xl my-10 text-center font-semibold text-green-600 animate__slideInRight animate__animated">
          Register your account
        </h2>
        <form onSubmit={handleSubmit} className=" md:w-3/4 lg:w-1/3 mx-auto">
          <div className="form-control">
            <label className="label">
              <span className="label-text text-green-600">Your Name</span>
            </label>
            <input
              type="text"
              required
              name="name"
              placeholder="Name"
              className="input input-bordered"
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-green-600">Email address</span>
            </label>
            <input
              type="email"
              required
              name="email"
              placeholder="Email"
              className="input input-bordered"
            />
          </div>
          <div className="form-control relative">
            <label className="label">
              <span className="label-text text-green-600">Password</span>
            </label>
            <input
              type={showPassword ? "text" : "password"}
              required
              name="password"
              placeholder="Password"
              className="input input-bordered"
            />

            <span
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-5 top-[52px] text-xl text-green-600"
            >
              {showPassword ? <FaEye></FaEye> : <FaEyeSlash></FaEyeSlash>}
            </span>
          </div>

          <div className="form-control mt-6">
            <button className="btn rounded-md text-white bg-gradient-to-r from-[#184E68] to-[#57CA85] hover:text-black">
              Register
            </button>
          </div>
        </form>

        <div className="md:w-3/4 lg:w-1/3 mx-auto mt-5">
          <button className="w-full btn rounded-md text-white bg-gradient-to-r from-[#184E68] to-[#57CA85] hover:text-black">
            <FaGoogle></FaGoogle>
            Log In with Google
          </button>
        </div>

        <p className="text-center mt-4 textarea-sm">
          Already have an account{" "}
          <Link className="text-green-600 font-bold" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
