const TopIcon = () => {
    return (
        <div className="md:w-[320px] w-[310px] h-[90px] flex items-center md:gap-7 gap-10 bg-white shadow-2xl rounded-md p-2">
            <div>
                <h4 className="md:text-2xl text-xl font-bold">3.5k Plus</h4>
                <p className="md:text-lg text-base opacity-60">Satisfied Patients</p>
            </div>
            <div className="relative">
                <img className="" src="https://kamleshyadav.com/html/healthcare/bootstrap5/demo9/assets/images/sati_4.png" alt="man-icon" />
                <img className="absolute top-0 md:left-6 left-5 z-10" src="https://kamleshyadav.com/html/healthcare/bootstrap5/demo9/assets/images/sati_4.png" alt="man-icon" />
                <img className="absolute top-0 md:left-12 left-10 z-20" src="https://kamleshyadav.com/html/healthcare/bootstrap5/demo9/assets/images/sati_4.png" alt="man-icon" />
                <img className="absolute top-0 md:left-[70px] left-[64px] z-50" src="https://kamleshyadav.com/html/healthcare/bootstrap5/demo9/assets/images/sati_4.png" alt="man-icon" />
            </div>
        </div>
    );
};

export default TopIcon;