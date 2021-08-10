import React, { useState, useEffect } from "react";
import Filter from "./components/Filter.jsx";
import Notes from "./services/Notes";
import Delete from "./components/Delete";
const PhoneBook = () => {
  const [persons, setPersons] = useState([]);
  const [newName, setNewName] = useState("");
  const [number, setNumber] = useState("");
  const [searchBy, setSearchBy] = useState("");
  const handleChange = (e) => {
    setSearchBy(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const finder = persons.filter((person) => person.name === newName.trim());
    finder.length ? (
      <>
        {window.confirm("This name already exists,replace the old number?") ===
        true
          ? Notes.update(finder[0].id, { name: newName, num: number }).then(
              (value) => {
                setPersons(
                  persons.map((person) =>
                    person.id !== finder[0].id ? person : value
                  )
                );
              }
            )
          : ""}
      </>
    ) : (
      Notes.create({ name: newName, num: number }).then((data) =>
        setPersons(persons.concat(data))
      )
    );
  };

  useEffect(() => {
    Notes.getAll().then((response) => setPersons(response));
  }, []);
  console.log("render", persons.length, "persons");

  const toggleDelete = (ids) => {
    Notes.deletePerson(ids)
      .then((returnedNote) => {
        setPersons(persons.filter((note) => note.id !== ids));
      })
      .catch((error) => {
        alert(`the note '${persons.content}' was already deleted from server`);
      });
  };

  return (
    <div>
      <h2>PhoneBook</h2>

      <Filter searchby={searchBy} handleChange={handleChange} />

      <form onSubmit={handleSubmit}>
        <h4>name:</h4>
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          required
        />
        <br />
        <input
          type="text"
          value={number}
          onChange={(e) => setNumber(e.target.value)}
          required
        />
        <br />
        <button>add</button>
        <br />
      </form>
      <h2>Numbers</h2>
      <ul>
        {searchBy
          ? persons
              .filter((value) =>
                value.name.toLowerCase().includes(searchBy.toLowerCase())
              )
              .map((value, index) => (
                <li key={`person${index}`}>
                  {" "}
                  {value.name}
                  {value.num}
                </li>
              ))
          : persons.map((person, personIndex) => (
              <li key={`person-${personIndex}`}>
                {person.name} {person.num}
                <Delete toggleDelete={() => toggleDelete(person.id)} />
              </li>
            ))}
      </ul>
    </div>
  );
};

export default PhoneBook;
