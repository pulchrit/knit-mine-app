import React from 'react';
import ListView from './ListView';
import SearchAdd from './SearchAdd';
import {STITCH_PATTERNS} from '../static-data';

export default class StitchPatterns extends React.Component {

    state = {
        STITCH_PATTERNS
    }

    /* Fetch, GET stitch patterns from DB, eventually 
    Or should the fetch really go in the ListView??? 
    Determine which is best when creating interactive version.
    */

    render() {
       
        return (
            <>
                <SearchAdd
                    name={'Add a stitch pattern'} 
                    route={'/add-stitch'} 
                    searchCopy={'Search stitch patterns...'}
                />

                <ListView 
                    data={this.state.STITCH_PATTERNS}
                    listName='Stitch Patterns' 
                    itemRoute='/stitch-patterns'
                />
            </>
        )
    }
}