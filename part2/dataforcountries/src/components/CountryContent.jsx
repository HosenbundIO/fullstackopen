const CountryContent = ({ country }) => {
  console.log(country[0]);
  return (
    <div>
      <h2>{country[0].name.common}</h2>
      <p>capital {country[0].capital[0]}</p>
      <p>area {country[0].area}</p>
      <h3>languages:</h3>
      <ul>
        {Object.values(country[0].languages).map((language, index) => {
          return <li key={index}>{language}</li>;
        })}
      </ul>
      <div>
        <img src={country[0].flags.png} alt={country[0].flags.alt} />
      </div>
    </div>
  );
};

export default CountryContent;
