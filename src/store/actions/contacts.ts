import axios from "axios";
import { useEffect } from "react";
import { contactAction, getContactDetails } from "../slices/contacts";
// import { IContacts } from "../../types/contacts";
import { AppDispatch } from "../store";

const JSON_API = " http://localhost:8000/contacts";

export const createContact =
  (name: string, lastName: string, phone: number) =>
  async (dispatch: AppDispatch) => {
    const contactObj = {
      name,
      lastName,
      phone,
    };

    let res = await axios.post(JSON_API, contactObj);
    dispatch(contactAction(res.data));
    console.log(res);
  };

// export const contactsForm =
//   (name: string, lastName: string, phone: number) =>
//   async (dispatch: AppDispatch) => {
//     const formData: any = new FormData();
//     formData.append("name", name);
//     formData.append("lastName", lastName);
//     formData.append("phone", phone);

//     console.log(formData);
//   };

// export const addContact = (contact: any) => {
//   return async (dispatch: AppDispatch) => {
//     const res = await axios.post(JSON_API, contact);
//     dispatch(contactsAction(res.data));
//   };
// };

export const getContacts = () => {
  return async (dispatch: AppDispatch) => {
    try {
      const res = await axios.get(JSON_API);
      // console.log(res);
      dispatch(contactAction(res.data));
    } catch (e) {
      console.log(e);
    }
  };
};

export const deleteContact = (id: number) => {
  return async () => {
    await axios.delete(`${JSON_API}/${id}`);
    getContacts();
  };
};

export const updateContact = (contact: any) => {
  return async () => {
    await axios.patch(`${JSON_API}/${contact.id}`);
    getContacts();
  };
};

export const editContactDetails =
  (id: number) => async (dispatch: AppDispatch) => {
    try {
      let res = await axios(`${JSON_API}${id}`);
      // console.log(res);
      dispatch(getContactDetails(res.data));
    } catch (e) {
      console.log(e);
    }
  };

export const saveEditedContacts =
  (name: string, lastName: string, phone: number, id: number) =>
  async (dispatch: AppDispatch) => {
    let newContact = {
      name: name,
      lastName: lastName,
      phone: phone,
    };

    try {
      let res = await axios.patch(
        `${JSON_API}${id}`,
        JSON.stringify(newContact)
      );
      // console.log(res);
      getContacts();
    } catch (e) {
      console.log(e);
    }
  };
