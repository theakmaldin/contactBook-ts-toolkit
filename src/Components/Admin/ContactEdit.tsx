import { Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { saveEditedContacts } from "../../store/actions/contacts";

import { useAppDispatch } from "../../store/hooks";

const ContactEdit = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const contactDetails = useSelector(
    (state: any) => state.contacts.contactsDetails
  );

  const [detailsContact, setDetailsContact] = React.useState(contactDetails);

  const handleInp = (e: any) => {
    let obj = {
      ...contactDetails,
      [e.target.name]: e.target.value,
    };
    setDetailsContact(obj);
  };

  const handleSave = () => {
    dispatch(
      saveEditedContacts(
        detailsContact.name,
        detailsContact.lastName,
        detailsContact.phone,
        detailsContact.id
      )
    );
  };
  // console.log(detailsContact.name);

  return (
    <div style={{ marginTop: "150px" }}>
      <h2 style={{ display: "flex", justifyContent: "center" }}>
        Edit contact!
      </h2>
      <Grid
        display="flex"
        alignItems="center"
        justifyContent="center"
        flexDirection="column">
        <TextField
          sx={{ marginBottom: "15px" }}
          variant="outlined"
          label="Name..."
          value={detailsContact.name}
          onChange={handleInp}
          // placeholder="Name..."
        />
        <TextField
          sx={{ marginBottom: "15px" }}
          variant="outlined"
          label="LastName..."
          value={detailsContact.lastName}
          onChange={handleInp}
          // placeholder="LastName..."
        />
        <TextField
          sx={{ marginBottom: "15px" }}
          variant="outlined"
          label="Phone..."
          value={detailsContact.phone}
          onChange={handleInp}
          // placeholder="phone..."
        />
        <Link style={{ textDecoration: "none" }} to="/">
          <Button variant="outlined" onClick={handleSave}>
            Save contact
          </Button>
        </Link>
      </Grid>
    </div>
  );
};

export default ContactEdit;
