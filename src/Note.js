import React from "react";

const Note = ({ id, title, description, deleteNote, editNote }) => {
  return (
    <li className="note">
      <input
        type="text"
        placeholder="Title"
        className="note__title"
        value={title}
        onChange={(e) => editNote(id, "title", e.target.value)}
      />
      <textarea
        placeholder="Description..."
        className="note__description"
        value={description}
        onChange={(e) => editNote(id, "description", e.target.value)}
      />
      <span className="note__delete" onClick={() => deleteNote(id)}>
        X
      </span>
    </li>
  );
};

export default Note;
