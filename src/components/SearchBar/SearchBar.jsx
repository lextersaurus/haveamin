import PropTypes from 'prop-types'
import { useState } from 'react'
import './SearchBar.css'

function SearchBar({ onSearch }) {
  const [searchName, setSearchName] = useState('')

  const handleChange = (event) => {
    const value = event.target.value
    setSearchName(value)
    onSearch(value)
  }

  return (
    <div className="searchBar">
      <input
        type="text"
        placeholder="Product"
        value={searchName}
        onChange={handleChange}
      />
    </div>
  )
}

SearchBar.propTypes = {
  onSearch: PropTypes.func
};

export default SearchBar;
