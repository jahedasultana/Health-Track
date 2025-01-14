import Swal from "sweetalert2";
import useAxiosPublic from "../hooks/useAxiosPublic";
import useAuth from "../provider/useAuth";
import { useNavigate } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

const SocialLink = () => {
    const { googleLogin } = useAuth();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

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
                        text: "Login successfully!",
                        icon: "success",
                    });
                }
                navigate("/");
            });
        });
    };

    return (
        <button
            type="button"
            className="w-full py-2 bg-primary text-white text-sm font-medium hover:bg-primary/80 rounded-lg focus:outline-none flex items-center justify-center gap-2"
            onClick={handleGoogleSignIn}
        >
            <FcGoogle size={22} /> 
            <span>Sign up with Google</span>
        </button>
    );
};

export default SocialLink;
