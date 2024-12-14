import { useState } from 'react';
import useAuth from '../../provider/useAuth';
import { frameData } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';
import SocialLink from '../../components/SocialLink';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../hooks/useAxiosPublic';


const SignUp = () => {
  const { userCreate, } = useAuth()
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const axiosPublic = useAxiosPublic()

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    // console.log(formData.email);
    const email = formData.email;
    const password = formData.confirmPassword;
    
    userCreate(email, password)
      .then(() => {
        const userInfo = {
          name: frameData.name,
          email: email,
          role: 'user',
        }
        axiosPublic.post('/users', userInfo)
          .then(res => {
            if (res.data.insertedId) {
              Swal.fire({
                title: "Account create Done!",
                text: "Login use your email address!",
                icon: "success"
              });
            }
          })
      })
      .catch(error => console.error(error))
  };


  return (
    <div className="mx-auto bg-gray-500 flex flex-col items-center justify-center pt-48 pb-20">
      <form
        className="bg-white p-4 border border-gray-300 lg:w-4/12 md:w-6/12 w-full"
        onSubmit={onSubmit}
      >
        {/* Name Field */}
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">
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
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
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
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 focus:outline-none"
            placeholder="Enter your password"
          />
        </div>

        {/* Confirm Password Field */}
        <div className="mb-4">
          <label
            htmlFor="confirmPassword"
            className="block text-sm font-medium text-gray-700"
          >
            Confirm Password
          </label>
          <input
            type="password"
            id="confirmPassword"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 focus:outline-none"
            placeholder="Confirm your password"
          />
        </div>

        {/* Divider */}
        <hr className="my-4 border-gray-300" />

        {/* Google Signup */}
        <SocialLink />

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-4 w-full py-2 bg-green-500 text-white text-sm font-medium hover:bg-green-600 focus:outline-none"
        >
          Submit
        </button>

        <p className='text-center pt-3'>Have not account <Link className='text-blue-500' to={'/sign-in'}>Login</Link></p>
      </form>
    </div>
  );
};

export default SignUp;