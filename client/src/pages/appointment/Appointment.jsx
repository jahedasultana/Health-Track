const Appointment = () => {
    return (
      <div className="md:w-[90%] grid grid-cols-3 w-full mx-auto py-10">
        <div className="relative group">
          <div>
            <img
              className="h-[350px] w-[300px] object-cover object-top"
              src="https://img.freepik.com/free-photo/portrait-beautiful-blonde-female-doctor_329181-1230.jpg?t=st=1730196307~exp=1730199907~hmac=950ae6d3d8ebc20c4fa11509fd920e737d2af6cf91dfdd7f331922e5afed2dd0&w=360"
              alt="dc"
            />
          </div>
  
          {/* Hover Overlay */}
          <div className="absolute w-full h-full bg-white z-50 flex justify-center items-center opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <div>
              <h3>Zahid Doctor</h3>
              <p>Gerontologists</p>
            </div>
          </div>
  
          {/* Bottom Overlay */}
          <div className="px-10 py-4 bg-[#1DBFCC] rounded-tr-[90px] absolute bottom-10 left-0 transition-opacity duration-300 opacity-100 group-hover:opacity-0">
            <h3>Zahid Doctor</h3>
            <p>Gerontologists</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default Appointment;
  