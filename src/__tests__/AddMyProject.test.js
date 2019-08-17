import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import AddMyProject from '../components/AddMyProject';

it('renders without crashing', () => {
  const div = document.createElement('div');

    ReactDOM.render(
      <BrowserRouter>
        <AddMyProject />
      </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  
});