import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAsterisk } from '@fortawesome/free-solid-svg-icons';
import config from '../config';
import TokenService from '../services/token-service';
import DataService from '../services/data-api-service';
import '../css/Form.css';

export default class AddMyProject extends React.Component {

    constructor(props) {
        super(props)
        this.image = React.createRef()
        this.state = {
            name: '',
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
        DataService.getAllProjectPatterns()
            .then(projectPatterns => this.setState({
                projectPatternOptions: projectPatterns
            }))
            .catch(this.SetState)

        // Get stitch patterns for select input.
        DataService.getAllStitchPatterns()
            .then(stitchPatterns => this.setState({
                stitchPatternOptions: stitchPatterns
            }))
            .catch(this.SetState)
    }
   
    resetImage = () => {
        this.image.reset()
    }

    handleSubmit = (event) => {
        event.preventDefault()

        // Reset error if there was one previously.
        this.setState({error: null})

        const newProject = {
            name: this.state.name,
            image: this.image.current.files[0],
            description: this.state.description,
            gift_recipient: this.state.gift_recipient,
            gift_occasion: this.state.gift_occasion,
            yarn: this.state.yarn,
            needles: this.state.needles,
            project_pattern: this.state.project_pattern,
            stitch_patterns: this.state.stitch_patterns
        }

        // Attribution for using formData with Fetch and file uploads: 
        // https://upmostly.com/tutorials/upload-a-file-from-a-react-component
        // Create new FormData instance to use to upload file
        // and other form inputs as a Blob. 
        const formData = new FormData()
        // Append the key/value pairs from the newProject above to 
        // the formData object.
        for (let [key, value] of Object.entries(newProject)) {
            formData.append(key, value)
        }

        fetch(`${config.API_ENDPOINT}api/my-projects/`, {
            method: 'POST',
            headers: {
                'Authorization': `bearer ${TokenService.getAuthToken()}`,
            },
            body: formData
        })
        .then(res => 
            (!res.ok)
            ? res.json().then(error => Promise.reject(error))
            : res.json()
        )
       /*  .then((project) => {
            debugger;
            // Attribution for converting arrayBuffer to image: 
            //https://tinyurl.com/y68gvswc
            var arrayBufferView = new Uint8Array(project.image.data);
            // Can use spread operator instead of apply here, I think.
            const stringCharacters = String.fromCharCode(...arrayBufferView)
            //const STRING_CHAR = String.fromCharCode.apply(null, TYPED_ARRAY);
            // window.btoa() or just btoa() ????
            const base64String = window.btoa(STRING_CHAR);
            const imageUrl = `data:image/jpg;base64,${base64String}`
            //var blob = new Blob( [ arrayBufferView ], { type: "image/jpeg" } );
            //var urlCreator = window.URL || window.webkitURL;
            //var imageUrl = urlCreator.createObjectURL( blob );
            //var img = document.querySelector( "#photo" );
            //img.src = imageUrl;  })*/     
        .then((project) => {
            // reset form
            this.setState({
                name: '',
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
        //.then((project) => 
            //}, () => this.props.history.push(`my-projects/${project.id}`)) 
            // Attribution: https://tinyurl.com/y3khnh9c
            // Reset the image ref after submission???
            //this.image.reset()
            // I know we set the Location header in the response object
            // from the api, but I couldn't get it to redirect properly. 
            // Therefore I'm just pushing the project pattern detail route instead. 
          // this.props.history.push(`my-projects/${project.id}`)
        //)
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
        }, () => console.log("stitch_patterns from state:", this.state.stitch_patterns)
        )
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

                <button className="button form-buttons" type="submit">
                        Add my project
                </button>
                </form>
          
        )
    }
}