import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import ProjectPatternItemDetails from '../components/ProjectPatternItemDetails';

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

it('renders without crashing', () => {
  
    const div = document.createElement('div');

    ReactDOM.render(
      <BrowserRouter>
        <ProjectPatternItemDetails projectPattern={patternExample} />
      </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  
});