import React from 'react';
import { PROJECT_PATTERNS } from '../static-data';
import '../css/ItemDetails.css';

/* TO DO:  refactor ItemDetails to use for project patterns, stitches and my projects, 
instead of having separate components for each. 
- Pass in prop to determine which (projects, stitches, my projects) DB table to query?
- Use for (let [key,value] of Object.entries(object1) {} to create subheads for the 
varying details between project patterns, stitches and my projects. */

export default class ProjectPatternItemDetails extends React.Component {

    static defaultProps = {
        match: { params: { id: '' } },
    }

    /* state = {
        projectPattern: {},
    } */

    state = {
        PROJECT_PATTERNS
    }


    /* componentDidMount() {
        fetch to get pattern by id
        const {id} = this.props.match.params
    } */


    render() {

        const projectPattern = this.state.PROJECT_PATTERNS.find(project => 
            project.id.toString() === this.props.match.params.id) || this.props.projectPattern

        return (

                <section className="details-item">

                    <h2 className="details-subhead">{projectPattern.name}</h2>
                    <a className="details-img-a" target="_blank" rel="noopener noreferrer" href={projectPattern.url}>
                        <img src={projectPattern.image_url} className="thumbnail" alt={projectPattern.name} />
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

