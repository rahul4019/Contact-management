import React, { useState } from 'react';

const ContactForm = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [status, setStatus] = useState('active');

  const handleFirstNameChange = (event: any) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event: any) => {
    setLastName(event.target.value);
  };

  const handleStatusChange = (event: any) => {
    setStatus(event.target.value);
  };

  const handleSubmit = (event: any) => {
    event.preventDefault();
    // Perform form submission logic here
    console.log('Form submitted:', { firstName, lastName, status });
  };

  return (
    <div className='w-full'>
      <form className="w-full max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block font-semibold mb-2" htmlFor="firstName">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            className="w-full p-2 border rounded-md"
            value={firstName}
            onChange={handleFirstNameChange}
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-2" htmlFor="lastName">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            className="w-full p-2 border rounded-md"
            value={lastName}
            onChange={handleLastNameChange}
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-2">Status</label>
          <div className="flex">
            <label className="mr-4">
              <input
                type="radio"
                value="active"
                checked={status === 'active'}
                onChange={handleStatusChange}
              />{' '}
              Active
            </label>
            <label>
              <input
                type="radio"
                value="inactive"
                checked={status === 'inactive'}
                onChange={handleStatusChange}
              />{' '}
              Inactive
            </label>
          </div>
        </div>
        <button
          className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
