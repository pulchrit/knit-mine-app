import React from 'react';
import AuthApiService from '../services/auth-api-service';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAsterisk } from '@fortawesome/free-solid-svg-icons';
import '../css/Form.css';

export default class Register extends React.Component {
    state = {
        name: '',
        email: '',
        password: '',
        error: null
    }

    handleSubmit = (event) => {
        event.preventDefault()
        const { name, email, password } = this.state
    
        // Reset error if there was one previously.
        this.setState({error: null})
    
        // Post the new user to the server for validation and,
        // if validated, for adding to the database
        AuthApiService.postUser({
          name,
          email,
          password
        })
        // If the user was validated and added to the database,
        // reset the form and redirect to the login form component.
        .then(user => {
          // reset form
          this.setState({
            name: '',
            email: '',
            password: ''
          })
          this.props.history.push('/login') // will redirect to login page
        })
        // If validation and therefore registration are not successful,
        // save the error in state and conditionally render it to the page.
        .catch(res => {
          this.setState({error: res.error})
        })

    }

    handleChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleChangeEmail = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    handleChangePassword = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    render() {
        return (
                <form 
                    className="form" 
                    onSubmit={this.handleSubmit}
                >
                    <h2 className="subhead">Create an account</h2>

                    <label htmlFor="name">
                    Name: <FontAwesomeIcon className='fa-asterisk' icon={faAsterisk} />
                    </label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name"
                        placeholder="First and last name" 
                        required 
                        value={this.state.name}
                        onChange={this.handleChangeName}
                    />

                    <label htmlFor="email">
                    Email: <FontAwesomeIcon className='fa-asterisk' icon={faAsterisk} />
                    </label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="your@email.com"
                        required 
                        value={this.state.email}
                        onChange={this.handleChangeEmail}
                    />
                    
                    <label htmlFor="password">
                    Password:  <FontAwesomeIcon className='fa-asterisk' icon={faAsterisk} /> 
                    (8 or more characters, one number)                     
                    </label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password"
                        placeholder="your password" 
                        required 
                        value={this.state.password}
                        onChange={this.handleChangePassword}
                    />

                    <button className="button form-buttons" type="submit">Register</button>

                </form>
        )
    }
}
