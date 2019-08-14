import React from 'react';
import {STITCH_PATTERNS} from '../static-data';
import '../css/ItemDetails.css';

/* TO DO:  refactor ItemDetails to use for project patterns, stitches and my projects, 
instead of having separate components for each. 
- Pass in prop to determine which (projects, stitches, my projects) DB table to query?
- Use for (let [key,value] of Object.entries(object1) {} to create subheads for the 
varying details between project patterns, stitches and my projects. */

export default class StitchItemDetails extends React.Component {

    static defaultProps = {
        match: { params: {id: ''} },
    }

    /* state = {
        stitch: {},
    } */

    state = {
        STITCH_PATTERNS
    }
    

    /* componentDidMount() {
        fetch to get pattern by id
        const {id} = this.props.match.params
    } */

    
    render() {

        const stitch = STITCH_PATTERNS.find(stitch => stitch.id.toString() === this.props.match.params.id) || {}
        console.log('stitch object after find:', stitch) //return empty object
        console.log("params.id, expect 1:", this.props.match.params.id) //string
        return (
            <main role="main">
                
                <section className="details-item">

                    <h2 className="details-subhead">{stitch.name}</h2>
                    <a className="details-img-a" href={stitch.url}>
                        <img src={stitch.image_url} className="thumbnail" alt={stitch.name}/>
                    </a>

                    <div className="details-copy">
                        <h4 className="details-type">Notes</h4>
                        <p className="details-info">{stitch.notes}</p>
                        
                        <button className="button details-button" type="button">
                            <a href={stitch.url}>View pattern</a>
                        </button> 
                    </div>
                    
                </section>
            </main>
        )
    }
}

