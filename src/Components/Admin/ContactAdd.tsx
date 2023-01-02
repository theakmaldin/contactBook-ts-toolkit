import React, { useState } from "react";
import { contactsForm } from "../../store/actions/contacts";
import { createContact } from "../../store/actions/contacts";
import { useAppDispatch } from "../../store/hooks";

const ContactAdd = () => {
  const dispatch = useAppDispatch();

  const [name, setName] = useState("");
  const [lastName, setLastName] = useState("");
  const [phone, setPhone] = useState("");

  const addContact = () => {
    dispatch(createContact(name, lastName, +phone));
  };

  return (
    <div>
      <div className="add_form">
        <h2>Add new contact!</h2>
        <textarea
          value={name}
          onChange={e => setName(e.target.value)}
          placeholder="Name..."
        />
        <textarea
          value={lastName}
          onChange={e => setLastName(e.target.value)}
          placeholder="LastName..."
        />
        <textarea
          value={phone}
          onChange={e => setPhone(e.target.value)}
          placeholder="phone..."
        />
      </div>
      <button onClick={addContact}>Add contact</button>
    </div>
  );
};

export default ContactAdd;
