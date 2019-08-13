import React from 'react';
import {STITCH_PATTERNS} from '../static-data';
import '../css/ItemDetails.css';

/* can refactor ItemDetails to use for project patterns, stitches and my projects, 
instead of havin separate components for each 
- Pass in prop to determine which (projects, stitches, my projects) DB table to query?
- Use Object.entries() to create subheads for the varying details between project 
patterns, stitches and my projects. */

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
        
        const stitch = STITCH_PATTERNS.find(stitch => stitch.id === this.props.match.params.id)
        this.setState({
            stitch
        }) 
        
    }  */
    

    /* componentDidMount() {
        fetch to get pattern by id
        const {id} = this.props.match.params
    } */

       /*  id: 2,
        name: "Toddler socks",
        url: "https://www.thesprucecrafts.com/learn-to-knit-simple-toddler-socks-4124374",
        image_url: "https://www.thesprucecrafts.com/thmb/CaQXcSjPfQMEh3-vLNPKycw-EIk=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/simple-toddler-socks-56a578ba5f9b58b7d0dd176d.JPG",
        yarn: "Sport weight",
        needles: "US 4",
        notes: "Fun socks for the little ones. A little tricky with the decreases.",
        user_id: 1  */
    
    render() {

        const stitch = STITCH_PATTERNS.find(stitch => stitch.id === this.props.match.params.id) || {}

        return (
            <section className="item-detail">

                <h2 className="subhead-list">{stitch.name}</h2>
                <a href={stitch.url}><img src={stitch.image_url} className="thumbnail" alt={stitch.name}/></a>

                
                <h4 className="details-subheads">Notes</h4>
                <p className="item-detail-notes">{stitch.notes}</p>
                
                <button className="button details-button" type="button"><a href={stitch.url}>View pattern</a></button> 
                
            </section>
        )
    }
}

