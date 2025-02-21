import Button from "../../../components/Button";

const TopDoctors = () => {
    return (
        <div className="grid md:grid-cols-3 grid-cols-1 w-[90%] mx-auto">
            <div className="p-10 bg-gradient-to-r from-[#FD9678] to-[#FFA477]/60 text-white space-y-4">
                <h2 className="text-[25px]">Top Doctors</h2>
            <p>Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augue tristique sed volutpat.</p>
           <Button buttonText={'Read More'}/>
            </div>
            <div className="p-10 bg-gradient-to-r from-[#FD9678]/90 to-[#FD9678]/65 text-white space-y-4">
                <h2 className="text-[25px]">24 Hours Service</h2>
            <p>Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augue tristique sed volutpat.</p>
            <Button buttonText={'Read More'}/>
            </div>
            <div className="p-10 bg-gradient-to-r from-[#FD9678] to-[#FD9678]/75 text-white space-y-4">
                <h2 className="text-[25px]">Opening Hours</h2>
           <div className="flex justify-between">
           <p>Monday-friday</p>
           <p>8.00-17.00</p>
           </div>
           <hr className="opacity-60"/>
           <div className="flex justify-between">
           <p>Saturday</p>
           <p>9.30-17.30</p>
           </div>
           <hr className="opacity-60"/>
           <div className="flex justify-between">
           <p>Sunday</p>
           <p>9.00-15.00</p>
           </div>
           <hr className="opacity-60"/>
        
            </div>
           
        </div>
    );
};

export default TopDoctors;