import React from 'react';
import ListView from './ListView';
import SearchAdd from './SearchAdd';
import DataService from '../services/data-api-service';

export default class ProjectsStitchesPatterns extends React.Component {

    state = {
        'my-projects': [],
        'stitch-patterns': [],
        'project-patterns': [],
        searchTermEntered: '',
        error: null
    }

    getCurrentPath = () => {
        return this.props.match.path
    }

    getRenderData = (currentPath) => {
        if (currentPath === '/my-projects') {
            return {
                name: 'Add my project',
                route: '/add-my-project',
                searchCopy: 'Search my projects...',
                listName: 'My Projects',
                data: this.state['my-projects']
            }
        } else if (currentPath === '/stitch-patterns') {
            return {
                name: 'Add a stitch pattern',
                route: '/add-stitch',
                searchCopy: 'Search stitch patterns...',
                listName: 'Stitch Patterns',
                data: this.state['stitch-patterns']

            }
        } else if (currentPath === '/project-patterns') {
            return {
                name: 'Add a project pattern',
                route: '/add-project',
                searchCopy: 'Search project patterns...',
                listName: 'Project Patterns',
                data: this.state['project-patterns']
            }
        }
    }

    handleChangeSearchTermEntered = (searchTermEntered) => {
        this.setState({
            searchTermEntered
        })
    }

    //Attribution: https://github.com/christianalfoni/formsy-react/issues/360
    onKeyPress = (event) => {
        if (event.which === 13 /* Enter key */) {
            event.preventDefault();
          }
    }

    handleClearSearch = (event) => {
        event.preventDefault()
        this.setState({
            searchTermEntered: ''
        })
    } 

   
    componentDidMount() {
        
        const pathNames = ['stitch-patterns', 'project-patterns', 'my-projects']
        
        pathNames.forEach((pathName) => DataService.getData(pathName)
            .then((data) => {
                this.setState({
                    [pathName]: data,
                })
            })
            .catch(this.setState) 
        )
    }


    render() {
        
        const renderData = this.getRenderData(this.getCurrentPath())
        const {error} = this.state
        
        return (
            <>
                {/* If there is an error, render it, otherwise 'display' empty string. */}
                {error ? <p className='error' role='alert'>{error}</p> : ''}

                <SearchAdd 
                    name={renderData.name} 
                    route={renderData.route} 
                    searchCopy={renderData.searchCopy}
                    onKeyPress={this.onKeyPress} 
                    handleChangeSearchTermEntered={this.handleChangeSearchTermEntered}
                    searchTermEntered={this.state.searchTermEntered}
                    handleClearSearch={this.handleClearSearch}
                />

                <ListView 
                    data={renderData.data}
                    searchTermEntered={this.state.searchTermEntered}
                    listName={renderData.listName} 
                    itemRoute={this.getCurrentPath()}
                />
            </>
        )
    }
}