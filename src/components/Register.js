import React from 'react';
import '../css/Form.css';

export default class Register extends React.Component {
    state = {
        name: '',
        email: '',
        password: ''
    }

    handleSubmit = (event) => {
        event.prevenDefault()
        /* fetch post 
        reset form fields*/

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
            <main role="main">
                <form 
                    className="form" 
                    onSubmit={this.handleSubmit}
                >
                    <h2 className="subhead">Create an account</h2>

                    <label htmlFor="name">
                    Name: *
                    </label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name"
                        placeholder="First and last name" 
                        required 
                        onChange={this.handleChangeName}
                    />

                    <label htmlFor="email">
                    Email: *
                    </label>
                    <input 
                        type="email" 
                        id="email" 
                        name="email" 
                        placeholder="your@email.com"
                        required 
                        onChange={this.handleChangeEmail}
                    />
                    
                    <label htmlFor="password">
                    Password: (8 or more characters with a number and special character) *
                    </label>
                    <input 
                        type="password" 
                        id="password" 
                        name="password"
                        placeholder="your password" 
                        required 
                        onChange={this.handleChangePassword}
                    />

                    <button className="button form-buttons" type="submit">Register</button>

      </form>
            </main>
        )
    }
}
