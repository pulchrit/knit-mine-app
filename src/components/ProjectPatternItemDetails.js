import React from 'react'
import config from '../config'
import TokenService from '../services/token-service'
import '../css/ItemDetails.css'

/* TO DO:  refactor ItemDetails to use for project patterns, stitches and my projects, 
instead of having separate components for each. 
- Pass in prop to determine which (projects, stitches, my projects) DB table to query?
- Use for (let [key,value] of Object.entries(object1) {} to create subheads for the 
varying details between project patterns, stitches and my projects. */

export default class ProjectPatternItemDetails extends React.Component {

    static defaultProps = {
        match: { params: { id: '' } },
    }

    state = {
        projectPattern: {},
        error: null
    } 

    componentDidMount() {
        // Get project pattern id from route params
        const {id} = this.props.match.params
        
        fetch(`${config.API_ENDPOINT}api/project-patterns/${id}`, {
            headers: {
                'Authorization': `bearer ${TokenService.getAuthToken()}`
            }
        })
        .then(res => 
            (!res.ok)
                ? res.json().then(e => Promise.reject(e))
                : res.json()
        )
        .then(pattern => this.setState({
            projectPattern: pattern
            })
        )
        .catch(res => { 
            this.setState({error: res.error})
        })
    } 

    render() {

        const {projectPattern} = this.state
        const {error} = this.state

        const image_url = projectPattern.image_url === ""
        ? "https://via.placeholder.com/300/000000/FFFFFF?text=no+photo+uploaded"
        : projectPattern.image_url

        return (

                <section className="details-item">

                    {/* If there is an error, render it, otherwise 'display' empty string. */}
                    {error ? <p className='error' role='alert'>{error}</p> : ''}

                    <h2 className="details-subhead">{projectPattern.name}</h2>
                    <a className="details-img-a" target="_blank" rel="noopener noreferrer" href={projectPattern.url}>
                        <img src={image_url} className="thumbnail" alt={projectPattern.name} />
                    </a>

                    <div className="details-copy">
                        <h4 className="details-type">Notes</h4>
                        <p className="details-info">{projectPattern.notes}</p>

                        <h4 className="details-type">Yarn</h4>
                        <p className="details-info">{projectPattern.yarn}</p>

                        <h4 className="details-type">Needles</h4>
                        <p className="details-info">{projectPattern.needles}</p>

                        <button className="button details-button" type="button">
                            <a target="_blank" rel="noopener noreferrer" href={projectPattern.url}>View pattern</a>
                        </button>
                    </div>

                </section>
        )
    }
}

