import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import ProjectPatterns from '../components/ProjectPatterns';


it('renders without crashing', () => {

    const state = {
        PROJECT_PATTERNS: [
            {
                id: 1,
                name: "Malt baby blanket",
                url: "http://tincanknits.com/pattern-SC-malt.html",
                image_url: "http://tincanknits.com/images/SC-malt-00.jpg",
                yarn: "Worsted weight",
                needles: "US 8",
                notes: "This is easy to make, but produces a refined looking blanket.",
                user_id: 1
            },
            {
                id: 2,
                name: "Toddler socks",
                url: "https://www.thesprucecrafts.com/learn-to-knit-simple-toddler-socks-4124374",
                image_url: "https://www.thesprucecrafts.com/thmb/CaQXcSjPfQMEh3-vLNPKycw-EIk=/960x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/simple-toddler-socks-56a578ba5f9b58b7d0dd176d.JPG",
                yarn: "Sport weight",
                needles: "US 4",
                notes: "Fun socks for the little ones. A little tricky with the decreases.",
                user_id: 1 
            }
        ]
    }
  
    const div = document.createElement('div');

    ReactDOM.render(
      <BrowserRouter>
        <ProjectPatterns  
            data={state.PROJECT_PATTERNS}
        />
      </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  
});