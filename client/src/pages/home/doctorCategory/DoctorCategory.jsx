const DoctorCategory = () => {
    return (
        <section>
            <div className="w-full max-w-xs overflow-hidden bg-white rounded-lg shadow-lg">
                <img
                    className="object-cover w-full h-56"
                    src="https://images.unsplash.com/photo-1542156822-6924d1a71ace?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                    alt="avatar"
                />

                <div className="py-5 text-center">
                   <h3 className="text-4xl">John Doe</h3>
                    <p className="text-sm text-gray-700 ">Software Engineer</p>
                    <hr className="opacity-95 mt-2"/>
                    <p className="my-2">Cum sociis natoque penatibus et magnis dis parturient montesmus.</p>
                    <hr className="opacity-95 mb-2"/>
                    <p>+1-212-333-7078</p>
                    <p>johan24@gmail.com</p>
                </div>
            </div>
        </section>
    );
};

export default DoctorCategory;
