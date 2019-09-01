import React from 'react';
import {Link} from 'react-router-dom';
import ProjectPatternItemDetails from './ProjectPatternItemDetails';
import MyProjectPatternItemDetails from './MyProjectPatternItemDetails';
import StitchItemDetails from './StitchItemDetails'
import AddButton from './AddButton'
import '../css/LandingPage.css';

const LandingPage = () => {

    const patternExample = {
        id: 2,
        name: "Project pattern - Toddler socks",
        url: "https://www.thesprucecrafts.com/learn-to-knit-simple-toddler-socks-4124374",
        image_url: "https://www.thesprucecrafts.com/thmb/CaQXcSjPfQMEh3-vLNPKycw-EIk=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/simple-toddler-socks-56a578ba5f9b58b7d0dd176d.JPG",
        yarn: "Sport weight",
        needles: "US 4",
        notes: "Fun socks for the little ones. A little tricky with the decreases.",
        user_id: 1 
    }

    const stitchExample = {
        id: 1,
        name: "Stitch pattern - Alsacian scallops",
        url: 'https://www.knittingstitchpatterns.com/2016/09/alsacian-scallops.html',
        image_url: "https://2.bp.blogspot.com/-j6cc2TrDBoI/WCrZ3cUI80I/AAAAAAAARC8/DUaxpPr3V_0N7WMgWzXVqj15SJfes-63gCLcB/s1600/Alsacian-Scallops-lace-knit-stitch.jpg",
        notes: "Nice lace pattern. Be sure to use the right yarn weight.",
        user_id: 1
    }

    const myProjectExamples = [
        {
            id: 1,
            name: "My Project - Peter's hat",
            image: "paters_hat.JPG",
            description: "A hat for Uncle Peter.",
            gift_recipient: "Uncle Peter",
            gift_occasion: "Just because",
            yarn: "Cascade Fibers, Superwash 220, Green Heather",
            needles: "US 8, circular",
            pattern_id: 2,
            stitch_id: [1]
        }
    ]

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

                <section className="patterns-projects-preview">
                    <ProjectPatternItemDetails projectPattern={patternExample} />
                    <StitchItemDetails stitch={stitchExample} />
                </section>
            </section>

            <section className="landing-page-section">
                <h2 className="landing-page-subhead">Save your own creations</h2>

                <p>
                    What kind of hat did you make for Jim's last birthday again? 
                    You know you changed the needle size on Laura's scarf, but 
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
                        and <Link to="/login">login</Link>. {' '} Then {' '}
                        <Link to="/add-project">add one of your own projects</Link>.
                    </li>

                    <li className="landing-page-li">Then you can {' '}
                        <Link to="/my-projects">view all of your projects here</Link>.
                    </li>
                        
                        
                </ul>

                <section className="patterns-projects-preview">
                    {myProjectExamples.map((project, i) => 
                        <MyProjectPatternItemDetails 
                            key={`patternDetails-${i}`}
                            myProject={project} 
                            projectPattern={patternExample}
                            stitches={stitchExample}
                        />
                    )}
                </section>
            </section>
        </div>
    )
}

export default LandingPage;