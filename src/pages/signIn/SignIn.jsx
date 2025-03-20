import { useForm } from 'react-hook-form';
import useAuth from '../../provider/useAuth';
import Swal from 'sweetalert2';
import { Link, useNavigate } from 'react-router-dom';
import SocialLink from '../../components/SocialLink';

const SignIn = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const {loginUser,userCreate} = useAuth();
  const navigate = useNavigate()

  const onSubmit = (data) => {
    // console.log(data);
    const email = data.email;
    const password = data.password;

    loginUser(email, password)
      .then((result) => {
        // console.log(result.user);
        if (result.user) {
          Swal.fire({
            title: "Good job!",
            text: "login successfully!",
            icon: "success",
          });
        }
        navigate('/');
      })
      .catch((error) => {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Something went wrong!",
            footer: `${error}`
          });
      });
  };

  return (
    <div className="mx-auto pt-48 pb-20 bg-secondary/40 flex flex-col items-center justify-center">
      <form
        className="bg-white p-8 border border-gray-300 rounded-lg lg:w-4/12 md:w-4/12 w-full"
        onSubmit={handleSubmit(onSubmit)}
      >
        {/* Email Field */}
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700">
            Gmail
          </label>
          <input
            type="email"
            id="email"
            {...register('email', {
              required: 'Email is required',
              // pattern: {
              //   value: /^[a-zA-Z0-9._%+-]+@gmail\.com$/,
              //   message: 'Must be a valid Gmail address',
              // },
            })}
            className="w-full p-2 border border-gray-300 focus:outline-none"
            placeholder="Enter your Gmail address"
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
          )}
        </div>

        {/* Password Field */}
        <div className="mb-4">
          <label htmlFor="password" className="block text-sm font-medium text-gray-700">
            Password
          </label>
          <input
            type="password"
            id="password"
            {...register('password', {
              required: 'Password is required',
              // minLength: {
              //   value: 8,
              //   message: 'Password must be at least 8 characters long',
              // },
            })}
            className="w-full p-2 border border-gray-300 focus:outline-none"
            placeholder="Enter your password"
          />
          {errors.password && (
            <p className="text-red-500 text-sm mt-1">{errors.password.message}</p>
          )}
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-4 w-full py-2 bg-primary text-white text-sm font-medium hover:bg-[#ec6f49] rounded-lg focus:outline-none"
        >
          Submit
        </button>

        {/* Divider */}
        <hr className="my-4 border-gray-300" />

        {/* Google Signup */}
        <SocialLink/>

      <p className='text-center pt-3'>Have not account <Link className='text-blue-500 font-bold' to={'/signup'}>Create Account</Link></p>
      </form>
    </div>
  );
};

export default SignIn;