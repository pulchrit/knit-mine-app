import React from 'react';
import '../css/Form.css';

export default class Login extends React.Component {
    state = {
        email: '',
        password: ''
    }

    handleSubmit = (event) => {
        event.prevenDefault()
        /* fetch post 
        reset form fields*/

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
                    <h2 className="subhead">Login to your account</h2>
                    
                    <label htmlFor="email">
                        Email: *
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
                        Password: * 
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

                    <button className="button form-buttons" type="submit">Login</button>

                </form>
            </main>
        )
    }
}
