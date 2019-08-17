
import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import StitchItemDetails from '../components/StitchItemDetails';

const stitchExample = {
  id: 1,
  name: "Stitch pattern - Alsacian scallops",
  url: 'https://www.knittingstitchpatterns.com/2016/09/alsacian-scallops.html',
  image_url: "https://2.bp.blogspot.com/-j6cc2TrDBoI/WCrZ3cUI80I/AAAAAAAARC8/DUaxpPr3V_0N7WMgWzXVqj15SJfes-63gCLcB/s1600/Alsacian-Scallops-lace-knit-stitch.jpg",
  notes: "Nice lace pattern. Be sure to use the right yarn weight.",
  user_id: 1
}

it('renders without crashing', () => {
  
    const div = document.createElement('div');

    ReactDOM.render(
      <BrowserRouter>
        <StitchItemDetails stitch={stitchExample} />
      </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  
});