const Filter = ({ searchby, handleChange }) => {
  return (
    <div>
      filter with
      <input type="text" value={searchby} onChange={handleChange} />
    </div>
  );
};

export default Filter;
