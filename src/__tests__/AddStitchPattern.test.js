import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import AddStitch from '../components/AddStitch';

it('renders without crashing', () => {
  const div = document.createElement('div');

    ReactDOM.render(
      <BrowserRouter>
        <AddStitch />
      </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  
});