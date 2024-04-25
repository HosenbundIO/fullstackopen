import { useState, useEffect } from "react";
import countriesService from "./services/countries";
import SearchField from "./components/SearchField";
import Content from "./components/Content";

function App() {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    countriesService.getAll().then((allCountries) => {
      setCountries(allCountries);
    });
  }, []);

  const filteredCountries = countries.filter((country) => {
    return country.name.common.toLowerCase().includes(search.toLowerCase());
  });

  const handleSearchChange = (e) => setSearch(e.target.value);

  const handleClick = (country) => {
    console.log("clicked", country);
    setSearch(country);
  };

  //def handleClick(country):
  //  print("clicked", country)
  //  setSearch(country)

  return (
    <div>
      <SearchField search={search} handleChange={handleSearchChange} />
      <Content
        filteredCountries={filteredCountries}
        handleClick={handleClick}
      />
    </div>
  );
}

export default App;
