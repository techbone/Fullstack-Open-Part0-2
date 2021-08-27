const Filter = ({ searchby, handleChange }) => {
  return (
    <div>
      filter shown with
      <input type="text" value={searchby} onChange={handleChange} />
    </div>
  );
};

export default Filter;
