import React from "react";
import ContactEdit from "./Components/Admin/ContactEdit";
import ContactList from "./Components/page/ContactList";
import { Routes, Route } from "react-router-dom";
import ContactAdd from "./Components/Admin/ContactAdd";
import MainRoutes from "./MainRoutes";

const App = () => {
  return (
    <>
      <MainRoutes />
    </>
  );
};

export default App;
