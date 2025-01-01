import axios from "axios";
import { useEffect, useState } from "react";
import useAuth from "../provider/useAuth";


const useRole = () => {

    const { user } = useAuth();
    const [role, setRole] = useState([]);
    const userEmail = user?.email;

    useEffect(() => {
        const fetchRole = async () => {
            const res = await axios.get(`http://localhost:3000/user_role/${userEmail}`)
            setRole(res.data);
        }
        fetchRole()
    }, [userEmail])

    console.log(role);

    return [role]
};

export default useRole;