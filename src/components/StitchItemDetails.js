import React from 'react';
import config from '../config';
import TokenService from '../services/token-service';
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

    state = {
        stitch: {},
        error: null
    }

    componentDidMount() {
        // Get stitch pattern id from route params
        const {id} = this.props.match.params
        
        fetch(`${config.API_ENDPOINT}/stitch-patterns/${id}`, {
            headers: {
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
        .then(res => 
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        )
        .then(stitch => this.setState({
            stitch
            })
        )
        .catch(this.setState)
    } 
    
    render() {

        const {stitch} = this.state

        const image_url = stitch.image_url === ""
                            ? "https://via.placeholder.com/300/000000/FFFFFF?text=no+photo+uploaded"
                            : stitch.image_url
        return (
                
                <section className="details-item">

                    <h2 className="details-subhead">{stitch.name}</h2>
                    <a className="details-img-a" target="_blank" rel="noopener noreferrer" href={stitch.url}>                        
                        <img src={image_url} className="thumbnail" alt={stitch.name}/>
                    </a>

                    <div className="details-copy">
                        <h4 className="details-type">Notes</h4>
                        <p className="details-info">{stitch.notes}</p>
                        
                        <button className="button details-button" type="button">
                            <a target="_blank" rel="noopener noreferrer" href={stitch.url}>View pattern</a>
                        </button> 
                    </div>
                    
                </section>
        )
    }
}

