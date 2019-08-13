import React from 'react';
import '../css/Form.css';

export default class AddProjectPattern extends React.Component {

    state = {
        name: '',
        url: '',
        image_url: '',
        yarn: '',
        needles: '',
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
            <main role="main">

                <form 
                    className="form" 
                    onSubmit={this.handleSubmit}
                >
    
                    <h2 className="subhead">Add a project pattern</h2>

                    <label htmlFor="name">
                        Name: *
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
                        Link/URL: *
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
            </main>
        )
    }
}