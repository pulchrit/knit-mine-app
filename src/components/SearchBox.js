import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch, faTimesCircle } from '@fortawesome/free-solid-svg-icons'
import '../css/AddButton.css'
import '../css/SearchBox.css'

export default class SearchBox extends React.Component {

    render() {

        return (
            <form className='search-form' onSubmit={this.props.onSubmit} >
                <label className="search-label" htmlFor="search-box">
                    <FontAwesomeIcon className='fa-search' icon={faSearch} />
                </label>
                <input 
                    type="search"
                    className="search-input"
                    id="search-box"
                    name="search-box"
                    placeholder={this.props.searchCopy}
                    value={this.props.searchTermEntered}
                    onChange={(event) => this.props.handleChangeSearchTermEntered(event.target.value)}
                />
                
                <div className='search-clear'>
                    <FontAwesomeIcon 
                        className='fa-search' 
                        icon={faTimesCircle}
                        onClick={(event) => this.props.handleClearSearch(event)}
                    />
                </div>
                
            </form>
        )
    }

     
}