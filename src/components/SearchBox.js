import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import '../css/AddButton.css';
import '../css/SearchBox.css';

export default class SearchBox extends React.Component {

    state = {
        searchTermEntered: ''
    }

    handleSubmit = (event) => {
        event.preventDefault();
        
        /* fetch GET? */
    }

    handleChangeSearchTermEntered = (event) => {
        this.setState({
            searchTermEntered: event.target.value
        })
    }

    render() {
        return (
            <form className='search-form' onSubmit={this.handleSubmit}>
                
                <label className="search-label" htmlFor="search-box">
                    <FontAwesomeIcon className='fa-search' icon={faSearch} />
                </label>
                <input 
                    type="search"
                    className="search-input"
                    id="search-box"
                    name="search-box"
                    placeholder={this.props.searchCopy}
                    value={this.state.searchTermEntered}
                    onChange={this.handleChangeSearchTermEntered}
                />

                <button className="button search-button" type="submit">Search</button>

            </form>
        )
    }

     
}