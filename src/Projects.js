import React, { Component } from 'react';
import projects from './projects.json';
import ProjectInfo from './ProjectInfo';

export default class Projects extends Component{
    constructor(props) {
        super(props);
        this.state = {
            modalShow: false,
            selectedProject: 0,
        }
    }
    // const [modalShow, setModalShow] = React.useState(false);
    // const [selectedProject, setSelectedProject] = React.useState(0);

    loginModalRef = (obj) => {
        this.showModal = obj && obj.handleShow;
     }
     
    // onLoginClick = () => {
    //    this.showModal();
    //  }

    clickProjectInfo = (index) => {
        this.setState({modalShow:true, selectedProject:index});
        // setSelectedProject(index);
        this.showModal();
    }

    createButtons = (links) => {
        return (
            links.map((link, index) => {
                const iconType = 
                        (link.type == "Demo") ? <i className="fas fa-laptop"></i> :
                        (link.type == "Video") ? <i className="fab fa-youtube"></i> :
                        (link.type == "Code") ? <i className="fab fa-github"></i> :
                        (link.type == "PDF") ? <i className="fas fa-file-pdf"></i> :
                        (link.type == "Presentation") ? <i className="fas fa-film"></i> :
                        <i className="fas fa-users"></i>
                const linkHref = link.source.includes(".pdf") ? require(`../public/pdfs/${link.source}`) : link.source;
                return (
                    link.source != "" &&
                    <a className={`btn btn-sm btn-outline-${link.color} mr-2 mb-2`} target="_blank" href={linkHref} key={index}> {iconType} {link.type} </a>
                )
            })
        )
        

    }

    render() {
        const projectDeck = projects.map((project, index) => {
            const buttons = this.createButtons(project.links);

            return (
                <div className="card" key={index}>
                    <img className="card-img-top" src={require(`../public/images/${project.image}`)}/>
                    <div className="card-bofy">
                        <h5 className="card-title mt-2">{project.title}</h5>
                        <p className="card-text">{project.about}</p>
                        {buttons}
                        <button className="btn btn-sm btn-outline-dark mr-2 mb-2" onClick={() => this.clickProjectInfo(index)}><i className="fas fa-info-circle"></i> info</button>

                    </div>
                </div>
            )
        });

        return (
            <React.Fragment>
                <div className="card-columns">
                    {projectDeck}
                </div>
                <ProjectInfo ref={this.loginModalRef} project={projects[this.state.selectedProject]} 
                    links={this.createButtons} show={this.state.modalShow}/>
            </React.Fragment>
        )
    }
}


// {
//     "title": "Analytical Provenance Visualization and Segmentation",
//     "about": "",
//     "image": "Vis_1.png",
//     "links": [
//         {
//             "type":"Demo",
//             "source": "",
//             "color": "primary"
//         },
//         {
//             "type":"PDF",
//             "source":"",
//             "color": "primary"
//         },
//         {
//             "type":"Github",
//             "source":"",
//             "color": "primary"
//         }
//     ]
// },