import React from 'react'
import {Link} from 'react-router-dom'
import config from '../config'
import TokenService from '../services/token-service'
import '../css/ItemDetails.css'

/* TO DO:  refactor ItemDetails to use for my-project patterns, stitches and my projects, 
instead of having separate components for each. 
- Pass in prop to determine which (projects, stitches, my projects) DB table to query?
- Use for (let [key,value] of Object.entries(object1) {} to create subheads for the 
varying details between project patterns, stitches and my projects. */

export default class MyProjectPatternItemDetails extends React.Component {

    static defaultProps = {
        match: { params: { id: '' } },
    }

    state = {
        myProject: {},
        error: null
    } 

    componentDidMount() {
        // Get my project id from route params
        const {id} = this.props.match.params
        
        fetch(`${config.API_ENDPOINT}api/my-projects/${id}`, {
            headers: {
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
        .then(res => 
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        )
        .then(project => this.setState({
            myProject: project
            })
        )
        .catch(res => { 
            this.setState({error: res.error})
        })
    } 


    render() {

        const {myProject} = this.state
        const {error} = this.state

        // Use placeholder image if user does not upload one.
        const image = !myProject.image
                        ? "https://via.placeholder.com/300/ebe8ea/69435b?text=no+photo+uploaded"
                        : myProject.image

        return (

                <section className="details-item">

                    {/* If there is an error, render it, otherwise 'display' empty string. */}
                    {error ? <p className='error' role='alert'>{error}</p> : ''}

                    <h2 className="details-subhead">My Project Details: {myProject.name}</h2>
                    <img src={image} className="details-thumbnail" alt={myProject.name} />
                
                    <div className="details-copy">
                        <h4 className="details-type">Description</h4>
                        <p className="details-info">{myProject.description}</p>

                        <h4 className="details-type">Gift Recipient</h4>
                        <p className="details-info">{myProject.gift_recipient}</p>

                        <h4 className="details-type">Gift Occasion</h4>
                        <p className="details-info">{myProject.gift_occasion}</p>

                        <h4 className="details-type">Yarn</h4>
                        <p className="details-info">{myProject.yarn}</p>

                        <h4 className="details-type">Needles</h4>
                        <p className="details-info">{myProject.needles}</p>

                        <h4 className="details-type">Pattern</h4>
                        <p className="details-info">
                            {myProject.pattern &&
                                <Link className="pattern-stitch-links" to={`/project-patterns/${myProject.pattern.pattern_id}`}>
                                    {myProject.pattern.pattern_name}
                                </Link>
                            }
                        </p>
                        
                        <h4 className="details-type">Stitches</h4>
                        <p className="details-info">
                            {myProject.stitches &&
                                myProject.stitches.map((stitch) => 
                                <Link className="pattern-stitch-links" key={`stitch-${stitch.stitches_id}`} to={`/stitch-patterns/${stitch.stitches_id}`}>
                                    {stitch.stitches_name}
                                </Link> 
                            )}
                        </p>

                    </div>

                </section>
        )
    }
}

