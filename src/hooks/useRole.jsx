import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../provider/useAuth";

const useRole = () => {
  const { user } = useAuth();
  const [role, setRole] = useState(localStorage.getItem("userRole") || null); // Initialize from localStorage
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const userEmail = user?.email;

  console.log(userEmail);

  useEffect(() => {
    const fetchRole = async () => {
      if (!userEmail) {
        setError("No user email provided.");
        setLoading(false);
        return;
      }

      // Check if role for this email is already stored
      const storedRole = localStorage.getItem("userRoleEmail");
      if (storedRole === userEmail) {
        setLoading(false); // Stop loading, as the role is already stored
        return;
      }

      try {
        const res = await axios.get(`http://localhost:3000/user_role/${userEmail}`);
        const userRole = res.data.role;

        setRole(userRole);
        localStorage.setItem("userRole", userRole); // Store role in localStorage
        localStorage.setItem("userRoleEmail", userEmail); // Store the email associated with the role
      } catch (err) {
        setError(err.response?.data?.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    };

    fetchRole();
  }, [userEmail]);

  return { role, loading, error };
};

export default useRole;
