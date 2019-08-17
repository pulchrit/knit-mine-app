import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import Menu from '../components/Menu';


const menuRoutesOptions = [
        {
            route: '/login',
            option: 'Login'
        },
        {
            route: '/register',
            option: 'Register'
        }
    ]

it('renders without crashing', () => {
  
    const div = document.createElement('div');

    ReactDOM.render(
      <BrowserRouter>
        <Menu menuRoutesOptions={menuRoutesOptions} />
      </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  
});