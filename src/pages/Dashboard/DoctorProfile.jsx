import React, { useState, useEffect } from 'react';
import axios from 'axios';

const DoctorProfile = () => {
  const [doctor, setDoctor] = useState(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editedDoctor, setEditedDoctor] = useState({});
  const email = localStorage.getItem('userRoleEmail');

  console.log(doctor);

  useEffect(() => {
    const fetchDoctorData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/doctor-profile?email=${email}`);
        const data = response.data;
        setDoctor(data);
        setEditedDoctor(data); // Set initial edited doctor data
      } catch (error) {
        console.error('Error fetching doctor data:', error);
      }
    };

    fetchDoctorData();
  }, [email]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedDoctor((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSave = async () => {
    const updatedData = {
      ...editedDoctor,
      availability: editedDoctor.availability || 'available', // Ensure default availability
    };

    // Ensure that the _id field is not included in the update
    const { _id, ...updateWithoutId } = updatedData;

    try {
      const response = await axios.put(`http://localhost:3000/doctor-profile/${doctor._id}`, updateWithoutId);
      if (response.status === 200) {
        const updatedDoctor = response.data;
        setDoctor(updatedDoctor);
        setIsEditing(false);
      } else {
        console.error('Error:', response.data.error);
      }
    } catch (error) {
      console.error('Error saving doctor data:', error);
    }
  };

  if (!doctor) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1>{doctor?.name}'s Profile</h1>

      {isEditing ? (
        <div>
          <form onSubmit={(e) => e.preventDefault()}>
            <div>
              <label>Role:</label>
              <input
                type="text"
                name="role"
                value={editedDoctor.role || ''}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Experience:</label>
              <input
                type="number"
                name="service_experience"
                value={editedDoctor.service_experience || ''}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Service Category:</label>
              <input
                type="text"
                name="service_category"
                value={editedDoctor.service_category || ''}
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Availability:</label>
              <input
                type="text"
                name="availability"
                value={editedDoctor.availability || 'available'} // default to 'available'
                onChange={handleChange}
              />
            </div>
            <div>
              <label>Service Given:</label>
              <input
                type="text"
                name="service_give"
                value={editedDoctor.service_give || ''}
                onChange={handleChange}
              />
            </div>
            <div className='flex gap-3'>
              <button className='p-2 bg-green-300' type="button" onClick={handleSave}>
                Save
              </button>
              <button className='p-2 bg-red-300' type="button" onClick={() => setIsEditing(false)}>
                Cancel
              </button>
            </div>
          </form>
        </div>
      ) : (
        <div>
          <p><strong>Role:</strong> {doctor.role}</p>
          <p><strong>Experience:</strong> {doctor.service_experience} years</p>
          <p><strong>Service Category:</strong> {doctor.service_category}</p>
          <p><strong>Availability:</strong> {doctor.availability}</p>
          <p><strong>Service Given:</strong> {doctor.service_give}</p>

          <button className='p-2 bg-orange-400' onClick={() => setIsEditing(true)}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default DoctorProfile;
