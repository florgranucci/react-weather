import React from "react";
import SearchBar from "./SearchBar.jsx";
import "./Nav.css";

function Nav({ onSearch }) {
  return (
    <nav className="navbar navbar-light justify-content-center">
      <SearchBar onSearch={onSearch} />
    </nav>
  );
}

export default Nav;
