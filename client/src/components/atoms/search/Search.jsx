import React from 'react';
import Input from '../../atoms/input/Input';
import Button from '../../atoms/button/Button';
import './search.css';

const Search = ({ handleSearch, search, onChange }) => {
    return (
        <form className="search-bar" onSubmit={handleSearch}>
            <Input
                type="text"
                placeholder="Rechercher"
                value={search}
                onChange={onChange}
                className="input-search"
            />
            <Button type="submit" text="Rechercher" className="button-search" />
        </form>
    );
};
export default Search;