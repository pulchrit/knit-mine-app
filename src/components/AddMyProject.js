import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAsterisk } from '@fortawesome/free-solid-svg-icons'
import config from '../config'
import TokenService from '../services/token-service'
import DataService from '../services/data-api-service'
import S3Service from '../services/s3-service'
import '../css/Form.css'

export default class AddMyProject extends React.Component {

    constructor(props) {
        super(props)
        this.image = React.createRef()
        this.state = {
            name: '',
            image: '',
            image_status: 'no image',
            description: '',
            gift_recipient: '',
            gift_occasion: '',
            yarn: '',
            needles: '',
            project_pattern: '',
            stitch_patterns: [],
            projectPatternOptions: [],
            stitchPatternOptions: [],
            error: null
        }
    }

    componentDidMount() {
        // Get project patterns for select input.
        DataService.getData('project-patterns')
            .then(projectPatterns => this.setState({
                projectPatternOptions: projectPatterns
            }))
            .catch(res => {
                this.setState({error: res.error})
            })

        // Get stitch patterns for select input.
        DataService.getData('stitch-patterns')
            .then(stitchPatterns => this.setState({
                stitchPatternOptions: stitchPatterns
            }))
            .catch(res => {
                this.setState({error: res.error}) 
            })
    }

    handleSubmit = (event) => {
        event.preventDefault()

        // Reset error if there was one previously.
        this.setState({error: null})

        const newProject = {
            name: this.state.name,
            image: this.state.image,
            description: this.state.description,
            gift_recipient: this.state.gift_recipient,
            gift_occasion: this.state.gift_occasion,
            yarn: this.state.yarn,
            needles: this.state.needles,
            project_pattern: this.state.project_pattern,
            stitch_patterns: this.state.stitch_patterns
        }

        fetch(`${config.API_ENDPOINT}api/my-projects/`, {
            method: 'POST',
            headers: {
                'Authorization': `bearer ${TokenService.getAuthToken()}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newProject)
        })
        .then(res => 
            (!res.ok)
            ? res.json().then(error => Promise.reject(error))
            : res.json()
        )   
        .then((project) => {
            // reset form
            this.setState({
                name: '',
                image: '',
                description: '',
                gift_recipient: '',
                gift_occasion: '',
                yarn: '',
                needles: '',
                project_pattern: '',
                stitch_patterns: [], 
            }) 
            // I know we set the Location header in the response object
            // from the api, but I couldn't get it to redirect properly. 
            // Therefore I'm just pushing the project pattern detail route instead. 
            this.props.history.push(`my-projects/${project.id}`)
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

    // When image has been added, this function initiates
    // a call to the function that uploads to s3 thru the 
    // callback. I made it like this so that the image_status 
    // state could be updated and rendered for the user while
    // the image is being uploaded.
    handleChangeImage = (event) => {
        const file = this.image.current.files[0]
        this.setState({
            image_status: 'uploading'
        }, this.uploadThenSetImageState(file))
    }

    // This function initiates the upload to S3 and then 
    // sets the image state to the S3 url where the image
    // can be retrieved. We'll only store this S3 url in the
    // database.
    uploadThenSetImageState = (file) => {
        S3Service.uploadToS3(file)
        .then(url => 
            this.setState({
                image: url,
                image_status: 'upload complete'
            }))
        .catch(res => { 
            this.setState({error: res.error})
        })
    }

    handleChangeUrl = (event) => {
        this.setState({
            url: event.target.value
        })
    }

    handleChangeDescription = (event) => {
        this.setState({
            description: event.target.value
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
        
        // Attribution: https://tinyurl.com/yxbkr4at
        // Filter select options for only those where selected is true,
        // then map those filtered options and get the values for each
        // Note: you have to put event.target.options into an array to use
        // array methods on it because it isn't an array to begin with!!! 
        // Hence the use of the spread operator below to turn it into an array.

        const selectedStitches = [...event.target.options]
            .filter(({selected}) => selected)
            .map(({value}) => value)
        
        this.setState({
            stitch_patterns: selectedStitches
        })
    }

    render() {
        
        // Get current image status to render to page, so that user doesn't click 
        // submit until image has been uploaded. 
        // Submit will also be disabled while the state is 'uploading'.
        let current_image_status
        let disableButton = false
        if (this.state.image_status === 'no image') {
            current_image_status = ''
        } else if (this.state.image_status === 'uploading') {
            current_image_status = "Uploading image...This may take a minute or two. Please wait."
            disableButton = true
        } else if (this.state.image_status === 'upload complete') {
            current_image_status = "Success! Image has been uploaded."
            disableButton = false
        }

        const {error} = this.state

        return (
           
                <form 
                    className="form" 
                    onSubmit={this.handleSubmit}
                >
                    
                    <h2 className="subhead">Add a project</h2>

                    {/* If there is an error, render it, otherwise 'display' empty string. */}
                    {error ? <p className='error' role='alert'>{error}</p> : ''}

                    <label htmlFor="name">
                        Name: <FontAwesomeIcon className='fa-asterisk' icon={faAsterisk} />
                    </label>
                    <input 
                        type="text" 
                        id="name" 
                        name="name" 
                        placeholder="enter name for this project"
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
                        ref={this.image}
                        onChange={this.handleChangeImage}
                    />
                    <p className="current-image-status">{current_image_status}</p>

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
                        {this.state.projectPatternOptions.map((patternOption, i) =>
                            <option 
                                key={`patternOption-${i}`} 
                                value={patternOption.id}
                            >
                                {patternOption.name}
                            </option>
                        )}
                    </select>


                    <label htmlFor="stitch_pattern">
                        Stitch pattern(s):
                    </label>
                    <select 
                        id="stitch_pattern" 
                        multiple={true}
                        value={this.state.stitches}
                        onChange={this.handleChangeStitches}
                    >
                        <option value="">Select one or more stitches</option>
                        {this.state.stitchPatternOptions.map((stitchOption, i) => 
                            <option 
                                key={`stitchOption-${i}`}
                                value={stitchOption.id}
                            >
                                {stitchOption.name}
                            </option>
                        )}
                    </select>

                <button 
                    className="button form-buttons" 
                    type="submit"
                    disabled={disableButton}
                >
                        Add my project
                </button>
                </form>
          
        )
    }
}