import React, { useState, useEffect } from "react";
import Filter from "./components/Filter.jsx";
import axios from "axios";
const PhoneBook = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", num: "040-123456" },
    { name: "Ada Lovelace", num: "39-44-5323523" },
    { name: "Dan Abramov", num: "12-43-234345" },
    { name: "Mary Poppendieck", num: "39-23-6423122" },
  ]);
  const [newName, setNewName] = useState("");
  const [number, setNumber] = useState("");
  const [searchBy, setSearchBy] = useState("");
  const handleChange = (e) => {
    setSearchBy(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newName.trim()) return;
    if (persons.find((person) => person.name === newName.trim()))
      return alert(`${newName} already exists!`);
    setPersons(persons.concat({ name: newName, num: number }));
    setNewName("");
    if (persons.find((person) => person.num === number.trim()))
      return alert(`${number} already exists!`);
    setPersons(persons.concat({ name: newName, num: number }));
    setNumber("");
  };
  useEffect(() => {
    axios.get("http://localhost:3001/persons").then((response) => {
      console.log("promise fulfilled");
      setPersons(response.data);
    });
  }, []);
  console.log("render", persons.length, "persons");
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
              </li>
            ))}
      </ul>
    </div>
  );
};
export default PhoneBook;
