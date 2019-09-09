import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import ProjectsStitchesPatterns from '../components/ProjectsStitchesPatterns';


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
                pattern: 5,
                stitches: [1, 3, 5]
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
                pattern: 4,
                stitches: [2]
            }
        ]
    }

    const props = {
        match: {
            path: '/my-projects'
        }
    }

    // Help with providing proper data for withRouter:
    // https://stackoverflow.com/questions/44204828/testing-react-component-enclosed-in-withrouter-preferably-using-jest-enzyme
    const prevProps = {
        location: {
            pathname: "/my-projects"
        }
    }
  
    const div = document.createElement('div');

    ReactDOM.render(
      <BrowserRouter>
        <ProjectsStitchesPatterns.WrappedComponent props={prevProps}
            data={state.MY_PROJECTS}
            match={props.match}
        />
      </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  
});