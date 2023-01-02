import React from "react";
import { Route, Routes } from "react-router-dom";
import ContactAdd from "./Components/Admin/ContactAdd";
import ContactEdit from "./Components/Admin/ContactEdit";
import ContactList from "./Components/page/ContactList";

const MainRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<ContactList />} />
      <Route path="/edit" element={<ContactEdit />} />
      <Route path="/add" element={<ContactAdd />} />
    </Routes>
  );
};

export default MainRoutes;
