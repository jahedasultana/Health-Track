import { GoGoal } from "react-icons/go";

const Parallax = () => {
    return (
      <div
        className="relative bg-red-400 bg-cover bg-center md:h-[340px] h-[280px] md:my-10 my-8 "
        style={{
          backgroundImage: "url('https://i.postimg.cc/sX1BnfnS/doctors-doing.jpg')",
          backgroundAttachment: "fixed",
          backgroundSize: "cover"
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black opacity-40"></div>
  
        <div className="container mx-auto h-full flex flex-col justify-center relative z-10">
          <div className="flex justify-center">
            <p className="text-white md:text-3xl text-xl font-medium flex items-center gap-3"><GoGoal className="text-[#991747]"/> Our Goal</p>
          </div>
          <div className="mt-4">
            <p className="text-white md:w-[60%] w-full mx-auto text-center">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Molestias
              explicabo exercitationem id sint accusantium doloribus ab temporibus
              suscipit, eligendi deleniti est ut animi quaerat quos beatae saepe.
              Voluptatum, cum saepe!
            </p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Parallax;