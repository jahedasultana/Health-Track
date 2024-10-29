const Appointment = () => {
    return (
      <div className="md:w-[90%] grid grid-cols-3 w-full mx-auto py-10">
        <div className="relative group w-[300px]">
          {/* Doctor Image */}
          <img
            className="h-[350px] w-full object-cover object-top"
            src="https://img.freepik.com/free-photo/portrait-beautiful-blonde-female-doctor_329181-1230.jpg?t=st=1730196307~exp=1730199907~hmac=950ae6d3d8ebc20c4fa11509fd920e737d2af6cf91dfdd7f331922e5afed2dd0&w=360"
            alt="Doctor"
          />
  
          {/* Hover Full Overlay */}
          <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 transition-opacity duration-300 flex flex-col justify-center items-center text-white group-hover:opacity-100">
            <h3 className="text-xl font-semibold">Melissa Lombardo</h3>
            <p className="text-sm mb-4">Cardiologists</p>
            <div className="flex space-x-4">
              <i className="fab fa-twitter text-lg"></i>
              <i className="fab fa-linkedin-in text-lg"></i>
              <i className="fab fa-facebook-f text-lg"></i>
              <i className="fab fa-youtube text-lg"></i>
            </div>
          </div>
  
          {/* Bottom Overlay (Positioned a bit above the bottom) */}
          <div className="absolute bottom-6 left-0 w-[80%] px-4 py-2 bg-[#1DBFCC] text-white rounded-tr-[90px] transition-opacity duration-300 opacity-100 group-hover:opacity-0">
            <h3 className="text-lg font-semibold">Melissa Lombardo</h3>
            <p className="text-sm">Cardiologists</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Appointment;
  