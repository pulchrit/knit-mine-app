import React from 'react';
import ListView from './ListView';
import SearchAdd from './SearchAdd';
import {PROJECT_PATTERNS} from '../static-data';

export default class ProjectPatterns extends React.Component {

    state = {
        PROJECT_PATTERNS
    }

    /* TO DO: Fetch, GET project patterns from DB, eventually 
    Or should the fetch really go in the ListView??? 
    Determine which is best when creating interactive version.
    */

    render() {
       
        return (
            <>
                <SearchAdd 
                    name={'Add a project pattern'} 
                    route={'/add-project'} 
                    searchCopy={'Search project patterns...'}
                />

                <ListView 
                    data={this.state.PROJECT_PATTERNS}
                    listName='Project Patterns'
                    itemRoute='/project-patterns' 
                />
            </>
        )
    }
}