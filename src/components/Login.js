import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAsterisk } from '@fortawesome/free-solid-svg-icons'
import TokenService from '../services/token-service'
import AuthApiService from '../services/auth-api-service'
import '../css/Form.css'

export default class Login extends React.Component {
    state = {
        email: '',
        password: '',
        error: null
    }

    changeAccountNameAndRedirect = () => {
        this.props.changeAccountName()
        this.props.history.push('/') 
    }

    handleSubmit = (event) => {
        event.preventDefault()
        
        // Reset state to clear any previous errors.
        this.setState({error: null})
        
        // Get email and password from state, save to 
        // object to pass into auth service.
        const { email, password } = this.state

        // Posts login credentials to server for validation.
        // If valid, the server will respond with a JWT token
        // that should then be included in the authorization header
        // for each request to a protected endpoint (which are most 
        // endpoints for this app).
        // Submit email and pw from request body as object to
        // authentication method. 
        AuthApiService.postLogin({
            email,
            password 
        })
        .then(res => {
            // Reset the login form.
            this.setState({
                email: '',
                password: '',
            })
            // Save the authToken to session storage
            // for use in future request headers to protected
            // endpoints.
            TokenService.saveAuthToken(res.authToken)
            // Change Account to My Account in the <Nav> menu and
            // redirect to the landing page.
            this.changeAccountNameAndRedirect()
        })
        .catch(res => {
            this.setState({error: res.error})
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

        const {error} = this.state

        return (
                <form 
                    className="form" 
                    onSubmit={this.handleSubmit}
                >
                    <h2 className="subhead">Login to your account</h2>

                    {/* If there is an error, render it, otherwise 'display' empty string. */}
                    {error ? <p className='error' role='alert'>{error}</p> : ''}
                    
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
                        Password: <FontAwesomeIcon className='fa-asterisk' icon={faAsterisk} />
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
        )
    }
}
