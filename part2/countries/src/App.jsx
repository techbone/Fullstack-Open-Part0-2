import React, { useEffect, useState } from "react";
import SearchField from "./components/SearchField";
import axios from "axios";
import Display from "./components/Display";
const App = () => {
  const [country, setCountry] = useState([]);
  const [displayedCountry, setDisplayedCountry] = useState([]);
  const [change, setChange] = useState("");

  useEffect(() => {
    axios.get("https://restcountries.eu/rest/v2/all").then(({ data }) => {
      setCountry(data);
    });
  }, []);

  const handleInputChange = (e) => {
    setChange(e.target.value);
    setDisplayedCountry(
      country.filter(({ name }) =>
        name.toLowerCase().includes(change.toLowerCase())
      )
    );
  };
  return (
    <div>
      <SearchField change={change} handleInputChange={handleInputChange} />
      <Display displayedCountry={displayedCountry} />
    </div>
  );
};
export default App;
