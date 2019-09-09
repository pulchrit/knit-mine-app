import React from 'react'
import SearchBox from './SearchBox'
import AddButton from './AddButton'
import '../css/SearchAdd.css'

const SearchAdd = ({name, 
                    route, 
                    searchCopy, 
                    onKeyPress, 
                    handleClearSearch,
                    handleChangeSearchTermEntered, 
                    searchTermEntered}) => {
    
    return (
        <section className="search-add-section">
            <SearchBox 
                searchCopy={searchCopy}
                onKeyPress={onKeyPress}
                handleChangeSearchTermEntered={handleChangeSearchTermEntered}
                searchTermEntered={searchTermEntered}
                handleClearSearch={handleClearSearch}
            />
            <AddButton route={route} name={name} />   
        </section>
    )
}

export default SearchAdd