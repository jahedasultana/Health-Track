import Swal from "sweetalert2";
import useAxiosPublic from "../hooks/useAxiosPublic";
import useAuth from "../provider/useAuth";
import { useNavigate } from "react-router-dom";

const SocialLink = () => {
    const {googleLogin} = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    // const handleGoogleSignIn = () => {
    //     googleLogin().then((result) => {
    //       const userInfo = {
    //         email: result.user?.email,
    //         name: result.user?.displayName,
    //         role: "donor",
    //         status: "active",
    //     };
    //     console.log(userInfo);
        
    //       axiosPublic.post("/users", userInfo).then((res) => {
    //         if (res.data.insertedId) {
    //           Swal.fire({
    //             title: "Good job!",
    //             text: "login successfully!",
    //             icon: "success",
    //           });
    //         }
    //         navigate("/");
    //       });
    //     });
    // };


    const handleGoogleSignIn = () => {
        googleLogin().then((result) => {
          const userInfo = {
            email: result.user?.email,
            name: result.user?.displayName,
            role: "user",
          };
          axiosPublic.post("/users", userInfo).then((res) => {
            if (res.data.insertedId) {
              Swal.fire({
                title: "Good job!",
                text: "login successfully!",
                icon: "success",
              });
            }
            navigate("/");
          });
        });
    };

    return (
        <>
         <button
          type="button"
          className="w-full py-2 bg-secondary text-white text-sm font-medium hover:bg-[#267e6c] rounded-lg focus:outline-none"
          onClick={handleGoogleSignIn}
        >
          Sign up with Google
        </button>

        </>
    );
};

export default SocialLink;