
import { Link } from "react-router-dom";

const Button = ({ buttonText, type, link, handelButton }) => {

    const buttonTextV = buttonText || 'Submit'
    const typeV = type || "link"
    const linkV = link || '/'

    return (
        <>
            {
                handelButton ?
                <button onClick={handelButton} className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-mono tracking-tighter text-white bg-primary rounded-lg group">
                        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-secondary rounded-full group-hover:w-56 group-hover:h-56"></span>
                        <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-[#a53614]"></span>
                        <span className="relative">{buttonTextV}</span>
                    </button>
                :
                (
                    typeV == "button" ?
                    <button type="submit" className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-mono tracking-tighter text-white bg-primary rounded-lg group">
                        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-secondary rounded-full group-hover:w-56 group-hover:h-56"></span>
                        <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-[#a53614]"></span>
                        <span className="relative">{buttonTextV}</span>
                    </button>
                    :
                    <Link to={linkV} className="relative inline-flex items-center justify-center px-8 py-3 overflow-hidden font-mono tracking-tighter text-white bg-primary rounded-lg group">
                        <span className="absolute w-0 h-0 transition-all duration-500 ease-out bg-secondary rounded-full group-hover:w-56 group-hover:h-56"></span>
                        <span className="absolute inset-0 w-full h-full -mt-1 rounded-lg opacity-30 bg-gradient-to-b from-transparent via-transparent to-[#a53614]"></span>
                        <span className="relative">{buttonTextV}</span>
                    </Link >
                )
               
            }

        </>
    );
};

export default Button;
