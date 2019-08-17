import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAsterisk } from '@fortawesome/free-solid-svg-icons';
import '../css/Form.css';

export default class AddMyProject extends React.Component {

    state = {
        name: '',
        url: '',
        image: '', /* byte array?? */
        description: '',
        gift_recipient: '',
        gift_occasion: '',
        yarn: '',
        needles: '',
        project_pattern: '',
        stitch_patterns: []
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

    handleChangeImage = (event) => {
        this.setState({
            image: event.target.value /* with byte array???*/
        })
    }

    handleChangeDescription = (event) => {
        this.setState({
            notes: event.target.value
        })
    }

    handleChangeGiftRecipient = (event) => {
        this.setState({
            gift_recipient: event.target.value
        })
    }

    handleChangeGiftOccasion = (event) => {
        this.setState({
            gift_occasion: event.target.value
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

    handleChangePattern = (event) => {
        this.setState({
            project_pattern: event.target.value
        })
    }

    handleChangeStitches = (event) => {
        this.setState({
            stitch_pattern: event.target.value
        })
    }

    render() {
        return (
           
                <form 
                    className="form" 
                    onSubmit={this.handleSubmit}
                >
                    
                    <h2 className="subhead">Add my project</h2>

                    <label htmlFor="name">
                        Name: <FontAwesomeIcon className='fa-asterisk' icon={faAsterisk} />
                    </label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder="your@email.com"
                        required
                        value={this.state.name}
                        onChange={this.handleChangeName}
                    />

                    <label htmlFor="image">
                        Image: 
                    </label>
                    <input 
                        type="file" 
                        id="image" 
                        name="image" 
                        accept="image/*"
                        value={this.state.image}
                        onChange={this.handleChangeImage}
                    />

                    <label htmlFor="description">
                        Description: 
                    </label>
                    <textarea 
                        id="description" 
                        name="description" 
                        rows="10" 
                        cols="100"
                        placeholder="Interesting things about this project."
                        value={this.state.description}
                        onChange={this.handleChangeDescription}
                    >
                    </textarea>  
                    
                    <label htmlFor="gift_recipient">
                        Gift Recipient: 
                    </label>
                    <input 
                        type="text" 
                        id="gift_recipient" 
                        name="gift_recipient"
                        placeholder="Aunt Lucy"
                        value={this.state.gift_recipient}
                        onChange={this.handleChangeGiftRecipient}
                    />
                    
                    <label htmlFor="gift_occasion">
                        Gift Occasion: 
                    </label>
                    <input 
                        type="text" 
                        id="gift_occasion" 
                        name="gift_occasion"
                        placeholder="Holiday 2019"
                        value={this.state.gift_occasion}
                        onChange={this.handleChangeGiftOccasion}
                    />
                    
                    <label htmlFor="yarn">
                        Yarn: 
                    </label>
                    <input 
                        type="text" 
                        id="yarn" 
                        name="yarn"
                        placeholder="Malabrigo Rio, Azure"
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
                        placeholder="US 4"
                        value={this.state.needles}
                        onChange={this.handleChangeNeedles}
                    />

                    <label htmlFor="project_pattern">
                        Project pattern: 
                    </label>
                    <select 
                        id="project_pattern"
                        value={this.state.pattern}
                        onChange={this.handleChangePattern}
                    >
                    <option value="">Select a pattern</option>
                    <option value="1">Malt baby blanket</option>
                    <option value="2">Ribbed adult hat</option>
                    <option value="3">Easy lace scarf</option>
                    </select>

                    <label htmlFor="stitch_pattern">
                        Stitch pattern(s):
                    </label>
                    <select 
                        id="stitch_pattern" 
                        multiple
                        value={this.state.stitches}
                        onChange={this.handleChangeStitches}
                    >
                    <option value="">Select one or more stitches</option>
                    <option value="1">Alsacian scallops</option>
                    <option value="2">Daisy stitch</option>
                    <option value="3">Moss stitch</option>
                    </select>

                <button className="button form-buttons" type="submit">Add my project</button>
                
                </form>
          
        )
    }
}