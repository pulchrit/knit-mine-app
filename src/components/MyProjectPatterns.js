import React from 'react';
import ListView from './ListView';
import SearchAdd from './SearchAdd';
import {MY_PROJECTS} from '../static-data';

export default class MYProjectPatterns extends React.Component {

    state = {
        MY_PROJECTS
    }

    /* TO DO: Fetch, GET my-project patterns from DB, eventually 
    Or should the fetch really go in the ListView??? 
    Determine which is best when creating interactive version.
    */

    render() {
       
        return (
            <>
                <SearchAdd 
                    name={'Add my project'} 
                    route={'/add-my-project'} 
                    searchCopy={'Search my projects...'}
                />

                <ListView 
                    data={this.state.MY_PROJECTS}
                    listName={'My Projects'} 
                    itemRoute={'/my-projects'}
                />
            </>
        )
    }
}