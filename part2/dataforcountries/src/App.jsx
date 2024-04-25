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

  return (
    <div>
      <SearchField search={search} handleChange={handleSearchChange} />
      <Content filteredCountries={filteredCountries} />
    </div>
  );
}

export default App;
