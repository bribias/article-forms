import React from 'react';
import PropTypes from 'prop-types';

const Search = ({ search, onSearchChange, onSubmit }) => (
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
