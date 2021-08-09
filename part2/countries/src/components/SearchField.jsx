const SearchField = ({ change, handleInputChange }) => {
  return (
    <>
      find countries
      <input value={change} onChange={handleInputChange} />
    </>
  );
};
export default SearchField;
