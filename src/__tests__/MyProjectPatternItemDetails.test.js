import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import MyProjectPatternItemDetails from '../components/MyProjectPatternItemDetails';

const myProject = {
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

const stitches = [
    {
        id: 1,
        name: "Alsacian scallops",
        url: 'https://www.knittingstitchpatterns.com/2016/09/alsacian-scallops.html',
        image_url: "https://2.bp.blogspot.com/-j6cc2TrDBoI/WCrZ3cUI80I/AAAAAAAARC8/DUaxpPr3V_0N7WMgWzXVqj15SJfes-63gCLcB/s1600/Alsacian-Scallops-lace-knit-stitch.jpg",
        notes: "Nice lace pattern. Be sure to use the right yarn weight.",
        user_id: 1
    }
]

const projectPattern = {
    id: 2,
    name: "Project pattern - Toddler socks",
    url: "https://www.thesprucecrafts.com/learn-to-knit-simple-toddler-socks-4124374",
    image_url: "https://www.thesprucecrafts.com/thmb/CaQXcSjPfQMEh3-vLNPKycw-EIk=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/simple-toddler-socks-56a578ba5f9b58b7d0dd176d.JPG",
    yarn: "Sport weight",
    needles: "US 4",
    notes: "Fun socks for the little ones. A little tricky with the decreases.",
    user_id: 1 
}

it('renders without crashing', () => {
  
    const div = document.createElement('div');

    ReactDOM.render(
      <BrowserRouter>
        <MyProjectPatternItemDetails  
            projectPattern={projectPattern}
            myProject={myProject} 
            stitches={stitches}  
        />
      </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  
});
   
   