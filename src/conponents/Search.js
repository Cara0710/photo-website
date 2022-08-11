import React from "react";

const Search = ({ search, setInput }) => {
  const setInputHandler = (e) => {
    setInput(e.target.value);
  };
  return (
    <div className="search">
      <input onChange={setInputHandler} type="text" />
      <button onClick={search}>Search</button>
    </div>
  );
};

export default Search;
