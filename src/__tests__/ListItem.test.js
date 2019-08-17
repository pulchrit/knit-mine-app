import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import ListItem from '../components/ListItem';

it('renders without crashing', () => {
  const div = document.createElement('div');

    ReactDOM.render(
      <BrowserRouter>
        <ListItem item={1} itemRoute='/project-patterns'/>
      </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  
});