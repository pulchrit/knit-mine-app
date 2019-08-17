import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import AddProjectPattern from '../components/AddProjectPattern';

it('renders without crashing', () => {
  const div = document.createElement('div');

    ReactDOM.render(
      <BrowserRouter>
        <AddProjectPattern />
      </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  
});