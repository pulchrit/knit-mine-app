import React from 'react';
import ListView from './ListView';
import SearchAdd from './SearchAdd';
import config from '../config';
import TokenService from '../services/token-service';

export default class ProjectPatterns extends React.Component {

    state = {
        projectPatterns: [],
        error: null
    }

    componentDidMount() {
        fetch(`${config.API_ENDPOINT}/project-patterns/`, {
            headers: {
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
        .then(res => 
            (!res.ok)
            ? res.json().then(error => Promise.reject(error))
            : res.json()
        )
        .then(patterns => this.setState({
            projectPatterns: patterns
            })
        )
        .catch(this.setState) 
    }

    render() {
        
        console.log('projectPatterns from state ProjectPatterns:', this.state.projectPatterns)
       
        return (
            <>
                <SearchAdd 
                    name={'Add a project pattern'} 
                    route={'/add-project'} 
                    searchCopy={'Search project patterns...'}
                />

                <ListView 
                    data={this.state.projectPatterns}
                    listName='Project Patterns'
                    itemRoute='/project-patterns' 
                />
            </>
        )
    }
}