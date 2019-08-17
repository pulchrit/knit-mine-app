import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import MyProjectPatterns from '../components/MyProjectPatterns';


it('renders without crashing', () => {

    const state = {
        MY_PROJECTS: [
            {
                id: 1,
                name: "Peter's hat",
                image: "peters_hat.JPG",
                description: "A hat for Uncle Peter.",
                gift_recipient: "Uncle Peter",
                gift_occasion: "Just because",
                yarn: "Cascade Fibers, Superwash 220, Green Heather",
                needles: "US 8, circular",
                pattern_id: 5,
                stitch_id: [1, 3, 5]
            },
            {
                id: 2,
                name: "Andrew's hat",
                image: "peters_hat.JPG",
                description: "A hat for husband, dear.",
                gift_recipient: "Andrew",
                gift_occasion: "Birthday 2019",
                yarn: "Malabrigo, Rio, Azul",
                needles: "US 4, circular",
                pattern_id: 4,
                stitch_id: [2]
            }
        ]
    }
  
    const div = document.createElement('div');

    ReactDOM.render(
      <BrowserRouter>
        <MyProjectPatterns  
            data={state.MY_PROJECTS}
        />
      </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  
});