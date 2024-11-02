export const InfoCard = ({ title, Icon, isEven }) => {
    return (
        <div className="relative flex items-center justify-center bg-white/80 shadow-md p-8 text-center w-full h-40 sm:h-48 lg:h-56 border border-gray-900/55">
            {/* Background Icon */}
            <Icon className="absolute text-blue-300 opacity-10 text-7xl sm:text-8xl lg:text-9xl" />

            {/* Title */}
            <h2 className="text-lg font-semibold text-blue-700">{title}</h2>


            <div
                className="absolute -top-[51px] flex items-center justify-center"
                style={{
                    width: '110px', // Adjusted for outer border
                    height: '100px', // Adjusted for outer border
                    backgroundColor: 'gray', // Outer border color
                    clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                }}
            >
                <div
                    className="flex items-center justify-center text-white"
                    style={{
                        width: '108px', // Inner shape width
                        height: '98px', // Inner shape height
                        backgroundColor: 'white',
                        clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
                    }}
                >
                    <div className={`flex items-center text-blue-600 text-2xl sm:text-3xl lg:text-4xl ${isEven ? 'border' : ''} h-full p-[8px]`}>
                        <Icon />
                    </div>
                </div>
            </div>

            <div className="absolute -bottom-4 bg-black text-white px-6 py-1 rounded-full">
                <button>==</button>
            </div>
        </div>
    );
};