import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from 'react-router-dom';
import MenuButton from '../components/MenuButton';


const name = 'My project pattern'
const myMock = jest.fn()
const show =  true

it('renders without crashing', () => {
  
    const div = document.createElement('div');

    ReactDOM.render(
      <BrowserRouter>
        <MenuButton 
            name={name} 
            setShow={myMock}
            show={show}
        />
      </BrowserRouter>, div);
    ReactDOM.unmountComponentAtNode(div);
  
});