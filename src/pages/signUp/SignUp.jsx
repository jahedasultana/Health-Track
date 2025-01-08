import { useState } from "react";
import useAuth from "../../provider/useAuth";
import { Link, useNavigate } from "react-router-dom";
import SocialLink from "../../components/SocialLink";
import Swal from "sweetalert2";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { FaEye, FaEyeSlash } from "react-icons/fa"; // React Icons
import signUp from "../../../public/leady.jpg";
const SignUp = () => {
  const { userCreate } = useAuth();
  const navigate = useNavigate();
  const axiosPublic = useAxiosPublic();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    role: "user", // Default role
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    const { email, confirmPassword, role, name } = formData;

    userCreate(email, confirmPassword)
      .then(() => {
        const userInfo = {
          name,
          email,
          role, // Send the selected role
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          if (res.data.insertedId) {
            navigate("/");
            Swal.fire({
              title: "Account created successfully!",
              text: "Please log in using your email address.",
              icon: "success",
            });
          }
        });
      })
      .catch((error) => console.error(error));
  };

  return (
    <div className="mx-auto bg-secondary/40 flex flex-col items-center justify-center pt-48 pb-20">
      
      

  <div className="flex md:flex-row flex-col gap-6 ">
        <div className="md:w-[50%]">
          <img src={signUp} alt="" className="mix-blend-multiply" />
        </div>
        <form
        className=" p-8  lg:w-4/12 md:w-6/12 w-full flex-1 flex items-center justify-center flex-col"
        onSubmit={onSubmit}
      >
        {/* Name Field */}
        <div className="mb-4 w-full">
          <label htmlFor="name" className="block text-lg font-medium text-gray-700">
            Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 focus:outline-none"
            placeholder="Enter your name"
          />
        </div>

        {/* Email Field */}
        <div className="mb-4 w-full">
          <label htmlFor="email" className="block text-lg font-medium text-gray-700">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 focus:outline-none"
            placeholder="Enter your email"
          />
        </div>

        {/* Password Field */}
        <div className="mb-4 relative w-full">
          <label htmlFor="password" className="block text-lg font-medium text-gray-700">
            Password
          </label>
          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 focus:outline-none pr-10"
              placeholder="Enter your password"
            />
            <button
              type="button"
              className="absolute top-3 right-3 text-gray-600"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </button>
          </div>
        </div>

        {/* Confirm Password Field */}
        <div className="mb-4 relative w-full">
          <label htmlFor="confirmPassword" className="block text-lg font-medium text-gray-700">
            Confirm Password
          </label>
          <div className="relative">
            <input
              type={showConfirmPassword ? "text" : "password"}
              id="confirmPassword"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full p-2 border border-gray-300 focus:outline-none pr-10"
              placeholder="Confirm your password"
            />
            <button
              type="button"
              className="absolute top-3 right-3 text-gray-600"
              onClick={() => setShowConfirmPassword(!showConfirmPassword)}
            >
              {showConfirmPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}
            </button>
          </div>
        </div>

        {/* Role Selection */}
        <div className="mb-4 w-full">
          <label className="block text-lg font-medium text-gray-700">Select Role</label>
          <div className="flex items-center">
            <label className="mr-4">
              <input
                type="radio"
                name="role"
                value="user"
                checked={formData.role === "user"}
                onChange={handleChange}
                className="mr-1"
              />
              User
            </label>
            <label>
              <input
                type="radio"
                name="role"
                value="doctor"
                checked={formData.role === "doctor"}
                onChange={handleChange}
                className="mr-1"
              />
              Doctor
            </label>
          </div>
        </div>


        {/* Google Signup */}
        <SocialLink />

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-4 w-full py-2 bg-primary text-white text-sm font-medium hover:bg-primary/80 rounded-lg focus:outline-none"
        >
          Submit
        </button>

        <p className="text-center pt-3">
          Have an account?{" "}
          <Link className="text-blue-500 font-bold" to={"/sign-in"}>
            Login
          </Link>
        </p>
      </form>
      </div>
    

    </div>
  );
};

export default SignUp;
