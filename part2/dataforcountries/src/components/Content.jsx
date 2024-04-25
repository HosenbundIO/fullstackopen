import CountryContent from "./CountryContent";

const Content = ({ filteredCountries }) => {
  if (filteredCountries.length > 10) {
    return <div>Too many</div>;
  } else if (filteredCountries.length === 1) {
    return <CountryContent country={filteredCountries} />;
  } else {
    return (
      <div>
        {filteredCountries.map((country) => {
          return <div key={country.name.common}>{country.name.common}</div>;
        })}
      </div>
    );
  }
};
export default Content;
