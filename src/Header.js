import React from "react";

const Header = ({ searchText, setSearchText, addNote }) => {
  return (
    <header>
      <h1 className="app-header__title">Super Sticky Notes</h1>
      <aside className="app-header__controls">
        <button className="add-new" onClick={addNote}>
          + New Note
        </button>
        <input
          type="text"
          placeholder="Type here to search..."
          className="search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
      </aside>
    </header>
  );
};

export default Header;
