import React from 'react';
import StitchItemDetails from './StitchItemDetails'
import '../css/LandingPage.css';

const LandingPage = () => {

    const patternExample = {
        id: 2,
        name: "Toddler socks",
        url: "https://www.thesprucecrafts.com/learn-to-knit-simple-toddler-socks-4124374",
        image_url: "https://www.thesprucecrafts.com/thmb/CaQXcSjPfQMEh3-vLNPKycw-EIk=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/simple-toddler-socks-56a578ba5f9b58b7d0dd176d.JPG",
        yarn: "Sport weight",
        needles: "US 4",
        notes: "Fun socks for the little ones. A little tricky with the decreases.",
        user_id: 1 
    }

    const stitchExample = {
        id: 1,
        name: "Alsacian scallops",
        url: 'https://www.knittingstitchpatterns.com/2016/09/alsacian-scallops.html',
        image_url: "https://2.bp.blogspot.com/-j6cc2TrDBoI/WCrZ3cUI80I/AAAAAAAARC8/DUaxpPr3V_0N7WMgWzXVqj15SJfes-63gCLcB/s1600/Alsacian-Scallops-lace-knit-stitch.jpg",
        notes: "Nice lace pattern. Be sure to use the right yarn weight.",
        user_id: 1
    }

    const myProjectExamples = [
        {
            id: 1,
            name: "Peter's hat",
            image: "https://cdn.instructables.com/F3C/8FDS/GGMMFCFS/F3C8FDSGGMMFCFS.LARGE.jpg",
            description: "A hat for Uncle Peter.",
            gift_recipient: "Uncle Peter",
            gift_occasion: "Just because",
            yarn: "Cascade Fibers, Superwash 220, Green Heather",
            needles: "US 8, circular",
            pattern_id: 1,
            stitch_id: [1, 3]
        },
        {
            id: 2,
            name: "Andrew's hat",
            image: "https://cdn.instructables.com/F3C/8FDS/GGMMFCFS/F3C8FDSGGMMFCFS.LARGE.jpg",
            description: "A hat for husband, dear.",
            gift_recipient: "Andrew",
            gift_occasion: "Birthday 2019",
            yarn: "Malabrigo, Rio, Azul",
            needles: "US 4, circular",
            pattern_id: 1,
            stitch_id: [1, 3]
        }
    ]

    return (
        <main role="main">

            <section>
                <p className="intro-copy">Store knitting project and stitch patterns 
                and post your own knit projects here. Mine them later when you 
                need to remember exactly what yarn you used in that hat you made 
                your friend for the holidays.</p>
            </section>

            <section>
                <h2 className="subhead">Save project and stitch patterns</h2>

                <p>Having trouble finding that daisy stitch pattern or that beautiful 
                    lace scarf pattern in your long list of knitting bookmarks? Save 
                    those patterns here in Knit Mine and you can easily browse or 
                    search for them.</p>

                <section className="patterns-projects-preview">
                    <StitchItemDetails data={patternExample} />
                    <StitchItemDetails data={stitchExample} />
                </section>
            </section>

            <section>
                <h2 className="subhead">Save your own creations</h2>

                <p>What kind of hat did you make for Jim's last birthday again? 
                    You know you changed the needle size on Laura's scarf, but 
                    you can't recall what you changed it to. Find the answers and 
                    keep a record of your beautiful work by saving your projects 
                    to Knit Mine.</p>

                <section className="patterns-projects-preview">
                    {myProjectExamples.map((project, i) => 
                        <StitchItemDetails key={i} data={project} />
                    )}
                </section>
            </section>
        </main>
    )
}

export default LandingPage;