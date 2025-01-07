import React, { useState, useEffect } from "react";
import Header from "./Header";
import Note from "./Note";

const App = () => {
  const [notes, setNotes] = useState(
    JSON.parse(localStorage.getItem("notes")) || []
  );
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    localStorage.setItem("notes", JSON.stringify(notes));
  }, [notes]);

  const addNote = () => {
    const newNote = {
      id: Date.now(),
      title: "",
      description: "",
    };
    setNotes((prevNotes) => [newNote, ...prevNotes]);
  };

  const deleteNote = (id) => {
    const updatedNotes = notes.filter((note) => note.id !== id);
    setNotes(updatedNotes);
  };

  const editNote = (id, field, text) =>
    setNotes((prevNotes) => {
      return prevNotes.map((note) => {
        if (note.id !== id) {
          return note;
        } else {
          if (field === "title") {
            return { ...note, title: text };
          } else {
            return { ...note, description: text };
          }
        }
      });
    });

  return (
    <div className="App">
      <Header
        addNote={addNote}
        setSearchText={setSearchText}
        searchText={searchText}
      />
      <ul className="notes-list">
        {notes
          .filter(
            (note) =>
              note.title.toLowerCase().includes(searchText.toLowerCase()) ||
              note.description.toLowerCase().includes(searchText.toLowerCase())
          )
          .map((note) => (
            <Note
              key={note.id}
              {...note}
              deleteNote={deleteNote}
              editNote={editNote}
            />
          ))}
      </ul>
    </div>
  );
};

export default App;
