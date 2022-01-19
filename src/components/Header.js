import React from "react";
import Form from "./Form";
import Navigation from "./Navigation";

const Header = ({ history, handleSubmit }) => {
  return (
    <div className="header mt-2">
      <h1>RitShots</h1>
      <Form history={history} handleSubmit={handleSubmit} />
      <Navigation />
    </div>
  );
};

export default Header;
