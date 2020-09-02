import React, { Component } from 'react';
import {Route, HashRouter as Router, NavLink, Redirect} from 'react-router-dom';
import styles from './Navigation.module.css';
import About from './About';
import Publications from './Publications';
import Projects from './Projects';

export default class Navigation extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             showMenu: false,
             selected: this.getPath(), //main selected tab
             links: [
                 {linkName: <span>About Me</span>, linkRef:"About Me"},
                 {linkName: <span>Featured Projects</span>, linkRef:"Featured Projects"},
                 {linkName: <span>Publications</span>, linkRef:"Publications"},
             ]
        }

        this.toggleMenu = () => {
            this.setState({showMenu: !this.state.showMenu});
        }
    }
    getPath = () => {
        let URL = window.location.href;
        let path = URL.substring(URL.lastIndexOf('/')+1).replace("%20", " ");
        return path == ""? "About Me": path;
    }
    selectedLink = (elementID) => {
    //     var previousSelected = this.state.selected;
    //     // this.setState ({selected: elementID}, () => console.log(this.state.selected));
        this.setState({selected: elementID});
    //     // console.log(previousSelected);
    //     // console.log(this.state.selected);
    //     // console.log(elementID);

    //     // document.getElementById(previousSelected).classList.add('d-none');
    //     // document.getElementById(elementID).classList.remove('d-none');
    }
    

    render() {
        const show = (this.state.showMenu) ? "show" : "" ;

        const titles = this.state.links.map((link) => {
            return (
            <li className="nav-item" key={link.linkRef} onClick={this.toggleMenu}>
                {/* <a className={`nav-link ${this.state.selected === link.linkRef && styles.className}`} href={`/index.html#/${link.linkRef}`} onClick={() => this.selectedLink (link.linkRef)}> */}
                <NavLink className="nav-link" activeClassName={styles.className} to={`/${link.linkRef}`} onClick={() => this.selectedLink (link.linkRef)}>
                    {link.linkName}
                </NavLink>
            </li>
            )
        } )

        const navbar = (
            <nav className={`navbar navbar-expand-md navbar-dark ${styles.navbarColors} ${styles.sticky}`}>
                <a className={`navbar-brand ${styles.navbarText}`} href="#" >{this.state.selected}</a>
                <button className="navbar-toggler float-right" type="button" onClick={this.toggleMenu}>
                        <span className="navbar-toggler-icon"></span>
                </button>
                <div className={`collapse navbar-collapse justify-content-center ${show} ${styles.navbarText}`} id="collapsibleNavbar">
                    <ul className="navbar-nav">
                        {titles}
                    </ul>
                </div>
            </nav>
        )
        return (
            // <React.Fragment>
            //     {navbar}
            //     {/* <div id="about"><About /></div>
            //     <div id="projects" className="d-none"><Projects /></div>
            //     <div id="publications" className="d-none"><Publication /></div> */}
            // </React.Fragment>
                <Router>
                    <div>
                        {navbar}
                        <Route exact path="/" render={() => <Redirect to="/About me"/>}/>
                        <Route path="/about me" component={About} /> 
                        <Route path="/featured projects" component={Projects} /> 
                        <Route path="/publications" component={Publications} />
                    </div>
                </Router>
          
        )
    }
}
