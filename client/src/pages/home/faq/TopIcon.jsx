const TopIcon = () => {
  return (
    <div className="md:w-[320px] w-[310px] h-[90px] flex items-center md:gap-7 gap-10 bg-white shadow-2xl rounded-md p-2">
      <div className="">
        <img
          className=""
          src="https://kamleshyadav.com/html/healthcare/bootstrap5/demo9/assets/images/smily.png"
          alt="man-icon"
        />
      </div>
      <div>
        <h4 className="md:text-2xl text-xl font-bold">3.5k Plus</h4>
        <p className="md:text-lg text-base opacity-60">Satisfied Patients</p>
      </div>
    </div>
  );
};

export default TopIcon;
