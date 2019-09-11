import React from 'react'
import Menu from './Menu'
import MenuButton from './MenuButton'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import TokenService from '../services/token-service'
import '../css/Nav.css'

export default class Nav extends React.Component {

   state = {
        showPatterns: false,
        showMyProjects: false,
        showMyAccount: false,
        isExpanded: false,
    };

    handleBurgerToggle = (event) => {
        event.preventDefault();
        this.setState({
          isExpanded: !this.state.isExpanded
        })
    }

    setShowPatterns = (showPatterns) => {
        this.setState({
            showPatterns
        })
    } 

    setShowMyAccount = (showMyAccount) => {
        this.setState({
            showMyAccount
        })
    } 

    setShowMyProjects = (showMyProjects) => {
        this.setState({
            showMyProjects
        })
    }

    handleLogoutClick = (event) => {
        event.stopPropagation()
        TokenService.clearAuthToken()
        this.setShowMyAccount(false)
        this.props.changeAccountName()
    }

    handleToggleSetShowAndBurger = (setShow) => {
        setShow(false)
        this.setState({
            isExpanded: !this.state.isExpanded
        })

    }
    
    passLogoutRouteOption = () => {
        return (
                {
                    route: '/',
                    option: 'Logout',
                }
        )
    }

    passLoginRouteOption = () => {
        return (
            {
                route: '/login',
                option: 'Login', 
            }
        )
    }

    render() {

        const menuRouteOptionsLogInOut = TokenService.hasAuthToken()
                                        ? this.passLogoutRouteOption()
                                        : this.passLoginRouteOption()
        
        const { isExpanded } = this.state

        return (
            <nav role="navigation" className="nav">
                
                {/* burger menu based on: https://codesandbox.io/s/mq48rlj0pp */}
                {isExpanded 
                    ?   <FontAwesomeIcon 
                            className='fa-times-bars' 
                            aria-hidden={!isExpanded}
                            icon={faTimes}
                            tabIndex="0"
                            onClick={this.handleBurgerToggle} 
                            onKeyPress={this.handleBurgerToggle}
                        />
                    :   <FontAwesomeIcon 
                            className='fa-times-bars' 
                            aria-hidden={!isExpanded}
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
                            name={this.props.accountName}
                            setShow={this.setShowMyAccount}
                            show={this.state.showMyAccount}
                        />



                        {this.state.showMyAccount && 
                            <Menu 
                                setShow={this.setShowMyAccount}
                                toggleSetShowAndBurger={this.handleToggleSetShowAndBurger}
                                clickLogout={this.handleLogoutClick}
                                handleBurgerToggle={this.handleBurgerToggle}
                                menuRoutesOptions={[
                                    menuRouteOptionsLogInOut,
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
                                setShow={this.setShowPatterns}
                                toggleSetShowAndBurger={this.handleToggleSetShowAndBurger}
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
                                setShow={this.setShowMyProjects}
                                toggleSetShowAndBurger={this.handleToggleSetShowAndBurger}
                                menuRoutesOptions={[
                                    {
                                        route: '/my-projects',
                                        option: 'View My Projects'
                                    },
                                    {
                                        route: '/add-my-project',
                                        option: 'Add Project'
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