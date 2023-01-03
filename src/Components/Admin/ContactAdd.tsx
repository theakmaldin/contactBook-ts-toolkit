import { Box, Button, Grid, TextField } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
// import { contactsForm } from "../../store/actions/contacts";
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
    <div style={{ marginTop: "150px" }}>
      <h2 style={{ display: "flex", justifyContent: "center" }}>
        Add new contact!
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
          value={name}
          onChange={e => setName(e.target.value)}
          // placeholder="Name..."
        />
        <TextField
          sx={{ marginBottom: "15px" }}
          variant="outlined"
          label="LastName..."
          value={lastName}
          onChange={e => setLastName(e.target.value)}
          // placeholder="LastName..."
        />
        <TextField
          sx={{ marginBottom: "15px" }}
          variant="outlined"
          label="Phone..."
          value={phone}
          onChange={e => setPhone(e.target.value)}
          // placeholder="phone..."
        />
        <Link style={{ textDecoration: "none" }} to="/">
          <Button variant="contained" onClick={addContact}>
            Add contact
          </Button>
        </Link>
      </Grid>
    </div>
  );
};

export default ContactAdd;
