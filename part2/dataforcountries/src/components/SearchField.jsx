const SearchField = ({ handleChange, search }) => {
  return (
    <div>
      find countries{" "}
      <input
        placeholder="Type to search..."
        type="text"
        onChange={handleChange}
        value={search}
      />
    </div>
  );
};

export default SearchField;
