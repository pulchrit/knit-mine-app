import React from 'react';
import ListView from './ListView';
import SearchAdd from './SearchAdd';
import DataService from '../services/data-api-service';

export default class StitchPatterns extends React.Component {

    state = {
        stitchPatterns: [],
        error: null
    }

    componentDidMount() {
        DataService.getAllStitchPatterns()
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