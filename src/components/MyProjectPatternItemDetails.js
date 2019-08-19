import React from 'react';
import {Link} from 'react-router-dom';
import { MY_PROJECTS, PROJECT_PATTERNS, STITCH_PATTERNS } from '../static-data';
import PetersHat from './images/peters_hat.JPG';
import '../css/ItemDetails.css';

/* TO DO:  refactor ItemDetails to use for my-project patterns, stitches and my projects, 
instead of having separate components for each. 
- Pass in prop to determine which (projects, stitches, my projects) DB table to query?
- Use for (let [key,value] of Object.entries(object1) {} to create subheads for the 
varying details between project patterns, stitches and my projects. */

export default class MyProjectPatternItemDetails extends React.Component {

    static defaultProps = {
        match: { params: { id: '' } },
    }

    /* state = {
        projectPattern: {},
    } */

    state = {
        MY_PROJECTS,
        PROJECT_PATTERNS,
        STITCH_PATTERNS
    }


    /* componentDidMount() {
        fetch to get pattern by id
        const {id} = this.props.match.params
    } */


    render() {

        const myProject = this.state.MY_PROJECTS.find(project => 
            project.id.toString() === this.props.match.params.id) || this.props.myProject

        const projectPattern = this.state.PROJECT_PATTERNS.find(project => 
            project.id === myProject.pattern_id) || this.props.projectPattern
        
        const stitches = myProject.stitch_id.map((myProjectStitchId) => {
            return this.state.STITCH_PATTERNS.find(pattern => pattern.id === myProjectStitchId)
        }) || this.props.stitches
        

        return (

                <section className="details-item">

                    <h2 className="details-subhead">{myProject.name}</h2>
                    <img src={PetersHat} className="details-thumbnail" alt={myProject.name} />
                
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
                            <Link className="pattern-stitch-links" to={`/project-patterns/${myProject.pattern_id}`}>
                                {projectPattern.name}
                            </Link>
                        </p>
                        
                        <h4 className="details-type">Stitches</h4>
                        <p className="details-info">
                            {stitches.map((stitch) => 
                                <Link className="pattern-stitch-links" key={`stitch-${stitch.id}`} to={`/stitch-patterns/${stitch.id}`}>
                                    {stitch.name}
                                </Link> 
                            )}
                        </p>

                    </div>

                </section>
        )
    }
}

