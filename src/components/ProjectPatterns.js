import React from 'react';
import ListView from './ListView';
import SearchAdd from './SearchAdd';
import DataService from '../services/data-api-service';

export default class ProjectPatterns extends React.Component {

    state = {
        projectPatterns: [],
        error: null
    }

    componentDidMount() {
        DataService.getAllProjectPatterns()
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