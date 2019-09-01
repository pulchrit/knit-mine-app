import React from 'react';
import ListView from './ListView';
import SearchAdd from './SearchAdd';
import config from '../config';
import TokenService from '../services/token-service';

export default class MYProjectPatterns extends React.Component {

    state = {
        myProjects: [],
        error: null
    }

    componentDidMount() {
        fetch(`${config.API_ENDPOINT}/my-projects/`, {
            headers: {
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
        .then(res => 
            (!res.ok)
            ? res.json().then(error => Promise.reject(error))
            : res.json()
        )
        .then(projects => this.setState({
            myProjects: projects
            })
        )
        .catch(this.setState) 
    }


    render() {
       
        return (
            <>
                <SearchAdd 
                    name={'Add my project'} 
                    route={'/add-my-project'} 
                    searchCopy={'Search my projects...'}
                />

                <ListView 
                    data={this.state.myProjects}
                    listName={'My Projects'} 
                    itemRoute={'/my-projects'}
                />
            </>
        )
    }
}