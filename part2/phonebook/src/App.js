import React, { useState } from "react";
const PhoneBook = () => {
  const [persons, setPersons] = useState([{ name: "Arto Hellas" }]);
  const [newName, setNewName] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newName.trim()) return;
    if (persons.find((person) => person.name === newName.trim()))
      return alert(`${newName} already exists!`);
    setPersons(persons.concat({ name: newName }));
    setNewName("");
  };
  return (
    <div>
      <h2>PhoneBook</h2>
      <form onSubmit={handleSubmit}>
        <h4>name:</h4>
        <input
          type="text"
          value={newName}
          onChange={(e) => setNewName(e.target.value)}
          required
        />
        <br />
        <button>add</button>
        <br />
      </form>
      <h2>Numbers</h2>
      <ul>
        {persons.map((person, personIndex) => (
          <li key={`person-${personIndex}`}>{person.name}</li>
        ))}
      </ul>
    </div>
  );
};
export default PhoneBook;
