import { useState } from "react";
import { FaLongArrowAltRight } from "react-icons/fa";
// eslint-disable-next-line react/prop-types
export const InfoCard = ({ title, Icon, description, isEven, color }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`relative flex flex-col items-center justify-center shadow-md p-10 text-center
            w-full h-56 border border-gray-900/55`
            }
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            style={{
                backgroundColor: isHovered ? `${color}` : "#ffffff",
                transition: "background-color 0.5s ease",
            }}
        >
            {/* Background Icon */}
            <Icon className={`absolute text-[${color}] opacity-10 text-7xl sm:text-8xl lg:text-9xl space-y-3`} />

            {/* Title */}
            <h2 className="text-2xl pt-3 font-semibold text-black/80">{title}</h2>
            <div className="w-[80px] h-[2px]  mt-2 bg-[#e0e4e4]"></div>
            <p className="text-sm mt-2 text-black/50">{description}</p>

            <div
                className="absolute -top-[51px] flex items-center justify-center"
                style={{
                    width: "110px",
                    height: "100px",
                    backgroundColor: "gray",
                    clipPath:
                        "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                }}
            >
                <div
                    className="flex items-center justify-center text-white"
                    style={{
                        width: "108px",
                        height: "98px",
                        backgroundColor: "white",
                        clipPath:
                            "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
                    }}
                >
                    <div
                        className={`flex items-center text-2xl ${isEven ? "border" : ""
                            } sm:text-3xl lg:text-4xl h-full p-[8px]`}
                        style={{color: color}}
                    >
                        <Icon />
                    </div>
                </div>
            </div>
            <div className="absolute -bottom-4 bg-white text-gray-400 border border-gray-400 px-6 pt-1 rounded-full">
                <button>
                    <FaLongArrowAltRight />
                </button>
            </div>
        </div>
    );
};