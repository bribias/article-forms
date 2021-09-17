import React from 'react';
import PropTypes from 'prop-types';

const SearchComponent = ({ search, onSearchChange, onSubmit }) => (
    <form onSubmit={onSubmit} data-testid="search-form">
        <label>New Search
            <input
                type="text"
                value={search}
                onChange={onSearchChange}
            />
        </label>
        <button aria-label="find-articles">Submit</button>
    </form>
);

SearchComponent.propTypes = {
    search: PropTypes.string.isRequired,
    onSearchChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired
};

export default SearchComponent;