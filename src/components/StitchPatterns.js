import React from 'react';
import ListView from './ListView';
import SearchAdd from './SearchAdd';
import config from '../config';
import TokenService from '../services/token-service';

export default class StitchPatterns extends React.Component {

    state = {
        stitchPatterns: [],
        error: null
    }

   componentDidMount() {
    fetch(`${config.API_ENDPOINT}/stitch-patterns/`, {
        headers: {
            'Authorization': `bearer ${TokenService.getAuthToken()}`
        }
    })
    .then(res => 
        (!res.ok)
        ? res.json().then(error => Promise.reject(error))
        : res.json()
    )
    .then(stitches => this.setState({
        stitchPatterns: stitches
        })
    )
    .catch(this.setState) 
}

    render() {
       
        return (
            <>
                <SearchAdd
                    name={'Add a stitch pattern'} 
                    route={'/add-stitch'} 
                    searchCopy={'Search stitch patterns...'}
                />

                <ListView 
                    data={this.state.stitchPatterns}
                    listName='Stitch Patterns' 
                    itemRoute='/stitch-patterns'
                />
            </>
        )
    }
}