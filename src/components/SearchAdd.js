import React from 'react';
import SearchBox from './SearchBox';
import AddButton from './AddButton';
import '../css/SearchAdd.css';

const SearchAdd = ({name, route, searchCopy}) => {
    return (
        <section className="search-add-section">
            <SearchBox searchCopy={searchCopy}/>
            <AddButton route={route} name={name} />   
        </section>
    )
}

export default SearchAdd