

import { FaStethoscope } from 'react-icons/fa';
import { InfoCard } from './InfoCard';



const Specialties = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
      <InfoCard title="Consultation" Icon={FaStethoscope} isEven={false}/>
      <InfoCard title="Surgery" Icon={FaStethoscope} isEven={true}/>
      <InfoCard title="Pharmacy" Icon={FaStethoscope} isEven={false}/>
      <InfoCard title="Emergency" Icon={FaStethoscope} isEven={true}/>
    </div>
  );
};

export default Specialties;