
const Parallax = () => {
  return (
    <div
      className="relative bg-red-400 bg-cover bg-center md:h-[400px] h-auto md:my-28 my-8"
      style={{
        backgroundImage:
          "url('https://i.postimg.cc/sX1BnfnS/doctors-doing.jpg')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0  bg-black opacity-40"></div>
     
   
    </div>
  );
};

export default Parallax;
