import React from 'react'
import {Link} from 'react-router-dom'
import AddButton from './AddButton'
import '../css/LandingPage.css'

const LandingPage = () => {

    return (

       
        <div className="landing-page">

            <section>
                <p className="intro-copy">Store knitting project and stitch patterns 
                and post your own knit projects here. View them later when you 
                need to remember exactly what yarn you used in that hat you made 
                your friend for the holidays.</p>

                <div className="landing-page-button-div">
                    <AddButton name="Register" route="/register" otherClassName="landing-page-button" />
                    <AddButton name="Login" route="/login" otherClassName="landing-page-button" />
                </div>
            </section>

            <section className="landing-page-section">

                <section className="copy">
                    <h2 className="landing-page-subhead">Save project and stitch patterns</h2>

                    <p>
                        Having trouble finding that daisy stitch pattern or that beautiful 
                        lace scarf pattern in your long list of knitting bookmarks? Save 
                        those patterns here in Knit Mine and you can easily browse or 
                        search for them. 
                    </p>

                    <p>
                        A project pattern contains instructions for knitting a particular 
                        thing&mdash;like a scarf, hat, or sweater. The project pattern 
                        lives on another website and you store reference to it in Knit Mine.
                    </p>

                    <p>
                        A stitch pattern contains instructions for knitting a particular 
                        stitch&mdash;like daisy stitch or stockinette stitch. The stitch 
                        pattern also lives on another site and you store reference to 
                        it in Knit Mine. 
                    </p>

                    <ul> 
                        <li className="landing-page-li">To get started {' '}
                            <Link to="/register">register</Link> {' '}
                            and <Link to="/login">login</Link>.
                        </li>

                        <li className="landing-page-li">Then {' '}
                            <Link to="/add-project">add a project pattern</Link> {' '}
                            or <Link to="/add-stitch">add a stitch pattern</Link>.
                        </li>

                        <li className="landing-page-li">Then you can view the {' '}
                            <Link to="/project-patterns">project patterns</Link> 
                            {' '} and <Link to="/stitch-patterns">stitch patterns</Link>
                            {' '} you've saved.
                        </li>
                    </ul>
                </section>

                <section className="patterns-projects-preview">
                    <figure>
                        <img className="screen-shot" src="https://knit-mine-uploads.s3-us-west-2.amazonaws.com/projectPatterns.png" alt="Project patterns" />
                        <figcaption className="caption">View Project Patterns</figcaption>
                    </figure>

                    <figure>
                        <img className="screen-shot" src="https://knit-mine-uploads.s3-us-west-2.amazonaws.com/stitchPatterns.png" alt="Stitch patterns" />
                        <figcaption className="caption">View Stitch Patterns</figcaption>
                    </figure>
                </section>
            </section>

            

            <section className="landing-page-section">

                <section className="copy">
                    <h2 className="landing-page-subhead">Save your own creations</h2>

                    <p>
                        What kind of hat did you make for Grandma's last birthday again? 
                        You know you changed the needle size on your daughter's scarf, but 
                        you can't recall what you changed it to. Find the answers and 
                        keep a record of your beautiful work by saving your projects 
                        to Knit Mine.  
                    </p>

                    <p>
                        You can save information about projects you’ve made and upload 
                        a photo of the finished piece. Include information about the 
                        yarn, needle size, who you made it for, and which project 
                        or stitch patterns you used.
                    </p>
                    
                        <ul>
                        <li className="landing-page-li"> To get started {' '}
                        <Link to="/register">register</Link> {' '}
                            and <Link to="/login">login</Link>. </li>
                        <li> Then {' '} <Link to="/add-project">add one of your own projects</Link>.
                        </li>

                        <li className="landing-page-li">Then you can {' '}
                            <Link to="/my-projects">view all of your projects here</Link>.
                        </li>
                            
                            
                    </ul>
                </section>

                <section className="patterns-projects-preview">
                    <figure>
                        <img className="screen-shot" src="https://knit-mine-uploads.s3-us-west-2.amazonaws.com/myProjects.png" alt="View my projects"/>
                        <figcaption className="caption">View My Projects</figcaption>
                    </figure>
                    
                </section>
            </section>
        </div>
    )
}

export default LandingPage;