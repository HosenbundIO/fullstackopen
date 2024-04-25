import CountryContent from "./CountryContent";

const Content = ({ filteredCountries, handleClick }) => {
  if (filteredCountries.length > 10) {
    return <div>Too many</div>;
  } else if (filteredCountries.length === 1) {
    return <CountryContent country={filteredCountries} />;
  } else {
    return (
      <div>
        {filteredCountries.map((country) => {
          return (
            <div key={country.name.common}>
              {country.name.common}
              <button onClick={() => handleClick(country.name.common)}>
                show
              </button>
            </div>
          );
        })}
      </div>
    );
  }
};
export default Content;
