
const TopDoctors = () => {
    return (
        <div className="grid md:grid-cols-3 grid-cols-1 w-[85%] mx-auto">
            <div className="p-10 bg-[#4fcfd3] text-white space-y-4">
                <h2 className="text-[25px]">Top Doctors</h2>
            <p>Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augue tristique sed volutpat.</p>
            <button className="px-3 py-2 border border-gray-100/50">Read More</button>
            </div>
            <div className="p-10 bg-[#05bdca] text-white space-y-4">
                <h2 className="text-[25px]">24 Hours Service</h2>
            <p>Cum sociis natoque penatibus et magnis dis parturient montesmus. Pro vel nibh et elit mollis commodo et nec augue tristique sed volutpat.</p>
            <button className="px-3 py-2 border border-gray-100/50">Read More</button>
            </div>
            <div className="p-10 bg-[#02a0ac] text-white space-y-4">
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
           
        
            </div>
           
        </div>
    );
};

export default TopDoctors;