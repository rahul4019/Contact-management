import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { editContact } from '../features/contactSlice';
import { Contact } from '../../types';
import { RootState } from '../store';

interface EditContactFormProps {
  paramsId: string | undefined;
}

const EditContactForm: React.FC<EditContactFormProps> = ({ paramsId }) => {
  const dispath = useDispatch();
  const navigate = useNavigate();

  const allContacts = useSelector((state: RootState) => state.contact.Contacts);

  const filteredContact: Contact[] = allContacts.filter(
    (contact) => contact.id === paramsId
  );
  const { id, firstname, lastname, status } = filteredContact[0];

  const [contactData, setContactData] = useState<Contact>({
    firstname,
    lastname,
    status,
    id,
  });
  const [isContactValid, setIsContactValid] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setContactData((prev) => ({
      ...prev,
      [name]: value,
    }));

    // check if all the input fields have been filled or not
    const validContactData = Object.values({
      ...contactData,
      [name]: value,
    }).some((value) => value.trim() === '');

    setIsContactValid(!validContactData);
  };

  const handleForm = (e: any) => {
    e.preventDefault();
    if (isContactValid) {
      dispath(editContact(contactData));

      window.alert('Updated successfully!');
      navigate('/');
    }
  };

  return (
    <div className="w-full">
      <form className="w-full max-w-xl mx-auto p-6 bg-white rounded-lg shadow-md">
        <div className="mb-4">
          <label className="block font-semibold mb-2" htmlFor="firstName">
            First Name
          </label>
          <input
            type="text"
            id="firstName"
            className="w-full p-2 border rounded-md"
            name="firstname"
            value={contactData.firstname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-2" htmlFor="lastName">
            Last Name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastname"
            className="w-full p-2 border rounded-md"
            value={contactData.lastname}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-semibold mb-2">Status</label>
          <div className="flex">
            <label className="mr-4">
              <input
                type="radio"
                value="active"
                name="status"
                checked={contactData.status === 'active'}
                onChange={handleChange}
              />
              Active
            </label>
            <label>
              <input
                type="radio"
                value="inactive"
                name="status"
                checked={contactData.status === 'inactive'}
                onChange={handleChange}
              />
              Inactive
            </label>
          </div>
        </div>

        <button
          type="button"
          className={`rounded-md bg-blue-600 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black ${
            !isContactValid ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          onClick={handleForm}
        >
          Save Edited Contact
        </button>
      </form>
    </div>
  );
};

export default EditContactForm;
