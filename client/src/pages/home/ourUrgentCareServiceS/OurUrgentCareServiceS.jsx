
const services = [
    { name: 'Sugar Testing', icon: '🩸' },
    { name: 'Antibody Testing', icon: '💉' },
    { name: 'Vaccination Dose', icon: '💊' },
    { name: 'X-Ray And ECG', icon: '📉' },
    { name: 'Lipid Profile', icon: '📄' },
    { name: 'Thyroid Test', icon: '🧬' },
    { name: 'Hepatic Function Panel', icon: '🫁' },
    { name: 'Prolactin Test', icon: '📊' },
];

const OurUrgentCareServiceS = () => {
    return (
        <div className="py-20 mt-16 px-4 bg-blue-50 ">
            <p className="text-[#1DBFCC]">Services</p>
            <h2 className="md:text-3xl text-xl font-medium text-[#3f3f41] mb-14">Our Urgent Care Services</h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 w-[90%] mx-auto gap-6">
                {services.map((service, index) => (
                    <div key={index} className="bg-white p-[52px] rounded-lg flex flex-col items-center">
                        <div className="bg-blue-100 rounded-full p-4 mb-4">
                            <span className="text-3xl">{service.icon}</span>
                        </div>
                        <h3 className="text-xl font-semibold">{service.name}</h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default OurUrgentCareServiceS;
