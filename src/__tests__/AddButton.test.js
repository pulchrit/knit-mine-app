import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import AddButton from '../components/AddButton';

it('renders without crashing', () => {
  const div = document.createElement('div');

    ReactDOM.render(
      <BrowserRouter>
        <AddButton name='Add a project pattern' route='/add-project'/>
      </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  
});