import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAsterisk } from '@fortawesome/free-solid-svg-icons';
import '../css/Form.css';

export default class AddStitch extends React.Component {

    state = {
        name: '',
        url: '',
        image_url: '',
        notes: ''
    }

    handleSubmit = (event) => {
        /* fetch post
        reset form */
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
                    <h2 className="subhead">Add a stitch pattern</h2>

                    <label htmlFor="name">
                        Name: <FontAwesomeIcon className='fa-asterisk' icon={faAsterisk} />
                    </label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        required 
                        placeholder="Daisy stitch"
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
                        placeholder="http://knittingsite.com/examplestitch"
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
                    
                    <label htmlFor="notes">
                        Notes: 
                    </label>
                    <textarea 
                        id="notes" 
                        name="notes" 
                        rows="10"
                        placeholder="Things to remember about this stitch."
                        value={this.state.notes}
                        onChange={this.handleChangeNotes}
                    >
                    </textarea>

                    <button className="button form-buttons" type="submit">Add stitch</button>

                </form>
        )
    }
}