import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import StitchPatterns from '../components/StitchPatterns';


it('renders without crashing', () => {

    const state = {
        STITCH_PATTERNS: [
            {
                id: 1,
                name: "Alsacian scallops",
                url: 'https://www.knittingstitchpatterns.com/2016/09/alsacian-scallops.html',
                image_url: "https://2.bp.blogspot.com/-j6cc2TrDBoI/WCrZ3cUI80I/AAAAAAAARC8/DUaxpPr3V_0N7WMgWzXVqj15SJfes-63gCLcB/s1600/Alsacian-Scallops-lace-knit-stitch.jpg",
                notes: "Nice lace pattern. Be sure to use the right yarn weight.",
                user_id: 1
            },
            {
                id: 2,
                name: "Daisy stitch",
                url: 'https://www.knittingstitchpatterns.com/2014/08/daisy-stitch.html',
                image_url: "https://4.bp.blogspot.com/-S_HevcA4TPY/Vh5RytTPbJI/AAAAAAAAKfw/d2VdcpOXK_c/s1600/Daisy%2Bknitting%2BStitch.jpg",
                notes: "Be sure to knit loosely!!!",
                user_id: 1
            }
        ]
    }
  
    const div = document.createElement('div');

    ReactDOM.render(
      <BrowserRouter>
        <StitchPatterns  
            data={state.STITCH_PATTERNS}
        />
      </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  
});