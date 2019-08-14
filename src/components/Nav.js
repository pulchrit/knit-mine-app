import React from 'react';
import Menu from './Menu';
import MenuButton from './MenuButton';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import '../css/Nav.css';

export default class Nav extends React.Component {

   state = {
        showPatterns: false,
        showMyProjects: false,
        showMyAccount: false,
        isExpanded: false
    };

    handleBurgerToggle = (event) => {
        event.preventDefault();
        this.setState({
          isExpanded: !this.state.isExpanded
        });
    }

    setShowPatterns = (showPatterns) => {
        this.setState({
            showPatterns
        });
    } 

    setShowMyAccount = (showMyAccount) => {
        this.setState({
            showMyAccount
        });
    } 

    setShowMyProjects = (showMyProjects) => {
        this.setState({
            showMyProjects
        });
    }

    render() {

        const { isExpanded } = this.state;

        return (
            <nav role="navigation" className="nav">
                
                {/* burger menu based on: https://codesandbox.io/s/mq48rlj0pp */}
                {isExpanded 
                    ?   <FontAwesomeIcon 
                            className='fa-times-bars' 
                            area-hidden={!isExpanded}
                            icon={faTimes}
                            tabIndex="0"
                            onClick={this.handleBurgerToggle} 
                            onKeyPress={this.handleBurgerToggle}
                        />
                    :   <FontAwesomeIcon 
                            className='fa-times-bars' 
                            area-hidden={!isExpanded}
                            icon={faBars}
                            tabIndex="0"
                            onClick={this.handleBurgerToggle} 
                            onKeyPress={this.handleBurgerToggle}
                        />

                }

                <div className={`collapsed ${isExpanded ? 'is-expanded' : ''}`}>

                    <div className={`button-and-menu`}
                        onMouseLeave={event => this.setShowMyAccount(false)}
                    >
                        <MenuButton 
                            name="My Account"
                            setShow={this.setShowMyAccount}
                            show={this.state.showMyAccount}
                        />

                        {this.state.showMyAccount && 
                            <Menu 
                                menuRoutesOptions={[
                                    {
                                        route: '/login',
                                        option: 'Login'
                                    },
                                    {
                                        route: '/register',
                                        option: 'Register'
                                    }
                                ]}
                            />
                        }
                    </div>

                    <div className="button-and-menu"
                        onMouseLeave={ event => this.setShowPatterns(false)}
                    >
                        <MenuButton 
                            name="Patterns"
                            setShow={this.setShowPatterns}
                            show={this.state.showPatterns}
                        />

                        {this.state.showPatterns &&
                            <Menu 
                                menuRoutesOptions={[
                                    {
                                        route: '/stitch-patterns',
                                        option: 'Stitch Patterns'
                                    },
                                    {
                                        route: '/project-patterns',
                                        option: 'Project Patterns'
                                    },
                                    {
                                        route: '/add-stitch',
                                        option: 'Add Stitch'
                                    },
                                    {
                                        route: '/add-project',
                                        option: 'Add Project'
                                    }
                                ]}
                            />
                        }
                    </div>

                    <div className="button-and-menu"
                        onMouseLeave={ event => this.setShowMyProjects(false)}
                    >
                        <MenuButton 
                            name="My Projects"
                            setShow={this.setShowMyProjects}
                            show={this.state.showMyProjects}
                        />

                        {this.state.showMyProjects && 
                            <Menu 
                                menuRoutesOptions={[
                                    {
                                        route: '/my-projects',
                                        option: 'View My Projects'
                                    },
                                    {
                                        route: '/add-my-project',
                                        option: 'Add My Project'
                                    }
                                ]}
                            />
                        }
                    </div>
                </div>
            </nav>
        )
    }
}