import React from 'react';
import ListView from './ListView';
import AddButton from './AddButton';
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
                <AddButton 
                    name={'Add a stitch pattern'} 
                    route={'/add-stitch'} 
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