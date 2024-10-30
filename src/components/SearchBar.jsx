import React from "react";

const SearchBar = ({searchTerm,onSearch, filterCategory,onFilterCategory }) => {
  return (
    <>
      <div className="search-bar">
        <input 
        type="text" 
        placeholder="Search for recipes by name ..."
        value={searchTerm} 
        onChange={onSearch}
        />

        <select value={filterCategory} onChange={onFilterCategory}>
        <option value="">All Categories</option>
<option value="Italian">Italian</option>
<option value="Pakistani">Pakistani</option>
<option value="Japanese">Japanese</option>
<option value="Mexican">Mexican</option>
<option value="Afghani">Afghani</option>
<option value="Spanish">Spanish</option>
<option value="Indian">Indian</option>
<option value="Chinese">Chinese</option>
<option value="French">French</option>
<option value="Middle Eastern">Middle Eastern</option>
<option value="Hungarian">Hungarian</option>
<option value="Korean">Korean</option>
<option value="Peruvian">Peruvian</option>
<option value="Greek">Greek</option>
<option value="Tex-Mex">Tex-Mex</option>
<option value="Turkish">Turkish</option>
<option value="Vietnamese">Vietnamese</option>
<option value="Canadian">Canadian</option>
<option value="German">German</option>
<option value="Ukrainian">Ukrainian</option>
<option value="Argentinian">Argentinian</option>
        </select>
      </div>
    </>
  );
};

export default SearchBar;
