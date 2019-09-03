import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAsterisk } from '@fortawesome/free-solid-svg-icons';
import config from '../config';
import TokenService from '../services/token-service';
import '../css/Form.css';

export default class AddProjectPattern extends React.Component {

    state = {
        name: '',
        url: '',
        image_url: '',
        yarn: '',
        needles: '',
        notes: '', 
        error: null
    }

    handleSubmit = (event) => {
        event.preventDefault()

        const newProjectPattern = {
            name: this.state.name,
            url: this.state.url,
            image_url: this.state.image_url,
            yarn: this.state.yarn,
            needles: this.state.needles,
            notes: this.state.notes
        }

        // Reset error if there was one previously.
        this.setState({error: null})

        fetch(`${config.API_ENDPOINT}api/project-patterns/`, {
            method: 'POST',
            headers: {
                'Authorization': `bearer ${TokenService.getAuthToken()}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newProjectPattern)
        })
        .then(res => 
            (!res.ok)
            ? res.json().then(error => Promise.reject(error))
            : res.json()
        )
        .then((pattern) => {
            // reset form
            this.setState({
                name: '',
                url: '',
                image_url: '',
                yarn: '',
                needles: '',
                notes: '', 
            }) 
            // I know we set the Location header in the response object
            // from the api, but I couldn't get it to redirect properly. 
            // Therefore I'm just pushing the project pattern detail route instead. 
           this.props.history.push(`project-patterns/${pattern.id}`)
        })
        .catch(res => {
            this.setState({error: res.error})
        })
    }

    handleChangeName = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handleChangeUrl = (event) => {
        this.setState({
            url: event.target.value
        })
    }

    handleChangeImageUrl = (event) => {
        this.setState({
            image_url: event.target.value
        })
    }

    handleChangeYarn = (event) => {
        this.setState({
            yarn: event.target.value
        })
    }

    handleChangeNeedles = (event) => {
        this.setState({
            needles: event.target.value
        })
    }

    handleChangeNotes = (event) => {
        this.setState({
            notes: event.target.value
        })
    }

    render() {
        return (

                <form 
                    className="form" 
                    onSubmit={this.handleSubmit}
                >
    
                    <h2 className="subhead">Add a project pattern</h2>

                    <label htmlFor="name">
                        Name: <FontAwesomeIcon className='fa-asterisk' icon={faAsterisk} />
                    </label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required 
                        placeholder="Simple stripes baby blanket"
                        value={this.state.name}
                        onChange={this.handleChangeName}
                    />

                    <label htmlFor="url">
                        Link/URL: <FontAwesomeIcon className='fa-asterisk' icon={faAsterisk} />
                    </label>
                    <input 
                        type="url" 
                        id="url" 
                        name="url" 
                        required 
                        placeholder="http://knittingsite.com/examplepattern"
                        value={this.state.url}
                        onChange={this.handleChangeUrl}
                    /> 
                    
                    <label htmlFor="image-url">
                        Image Link/URL: 
                    </label>
                    <input 
                        type="url" 
                        id="image-url" 
                        name="image-url" 
                        placeholder="http://knittingsite.com/images/exampleimage.jpg"
                        value={this.state.image_url}
                        onChange={this.handleChangeImageUrl}
                    />

                    <label htmlFor="yarn">
                        Yarn: 
                    </label>
                    <input 
                        type="text" 
                        id="yarn" 
                        name="yarn" 
                        placeholder="Sock/sport weight"
                        value={this.state.yarn}
                        onChange={this.handleChangeYarn}
                    />

                    <label htmlFor="needles">
                        Needles: 
                    </label>
                    <input 
                        type="text" 
                        id="needles" 
                        name="needles" 
                        placeholder="US 5"
                        value={this.state.needles}
                        onChange={this.handleChangeNeedles}
                    />

                    <label htmlFor="notes">
                        Notes: 
                    </label>
                    <textarea 
                        id="notes" 
                        name="notes" 
                        rows="10" 
                        cols="100"
                        placeholder="Things to remember about this pattern."
                        value={this.state.notes}
                        onChange={this.handleChangeNotes}
                    >
                    </textarea>

                <button className="button form-buttons" type="submit">Add project</button>
                
                </form>
        )
    }
}