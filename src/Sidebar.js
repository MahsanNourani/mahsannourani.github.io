import React, { Component } from 'react';
import { ResearchInterests, LinkIcon } from "./Utilities.js";
import Image from 'react-bootstrap/Image';

export default class Sidebar extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             imageSource: "/me_new.jpg",
             name: "Mahsan Nourani",
             position: "Graduate Research Assistant",
             education: "Ph.D. Student in Computer Science",
             location: <span><span className="fa fa-university"></span> University of Florida</span>,
             researchInterests: [
                 "Human-Computer Interaction",
                 "Explainable AI",
                 "Visual Analytics",
                 "Human-Centered AI"
             ],
             linkIcons: [
                 {
                     title: "E-mail",
                     icon: "fa fa-envelope",
                     href: "mailto:mahsannourani@ufl.edu"
                 },
                 {
                    title: "Linkedin",
                    icon: "fab fa-linkedin",
                    href: "https://linkedin.com/in/mahsannourani"
                },
                {
                    title: "Github",
                    icon: "fab fa-github",
                    href: "https://github.com/MahsanNourani"
                },
                {
                    title: "Google Scholar",
                    icon: "fa fa-graduation-cap",
                    href: "https://scholar.google.com/citations?user=tf4o6WYAAAAJ&hl=en&oi=ao"
                },
                {
                    title: "Twitter",
                    icon: "fab fa-twitter",
                    href: "https://twitter.com/MahsanNourani"
                },

             ]
        }
    }

    render() {
        const listOfIcons = this.state.linkIcons;
        const icons = listOfIcons.map((item) => 
            <LinkIcon key={item.title} {...item}/>
		  );
		  const researchInterests = this.state.researchInterests;
		  const researchInterestsList = researchInterests.map((item, index) =>
		  		<ResearchInterests key={index} item={item}/>
		  );
        const cv = "Mahsan_CV";
        return (
            <div className="row justify-content-center sticky sidebar-div">
					<div className="col-lg-10 py-lg-3 col-md-12 py-md-1 col-sm-12 py-sm-2 col-10 py-4 align-items-center" id="image-div">
						<Image className="w-100" src={this.state.imageSource} rounded fluid/>
					</div>
					<div className="col-lg-12 py-lg-1 col-md-12 py-md-1 col-sm-12 py-sm-1 col-12 py-4 pl-sm-0 pr-sm-0">
						<div className="container-fluid">
							<h4>{this.state.name}</h4>
							<h5>{this.state.position}</h5>
							<h5>{this.state.education}</h5>
							<h5 className="mb-3">{this.state.location}</h5>
							<h5 className="text-body">Research Interests:</h5>
							<ul className="list-group list-group-flush mb-3">
								{researchInterestsList}
							</ul>
							<div className="row m-0 justify-content-center">
								{icons}
							</div>
                            <hr/>
                            <div>
                                <a id="cv-btn" className="btn btn-block btn-primary" target = "_blank" href={require(`../public/pdfs/${cv}.pdf`)}><i className="fas fa-address-card"></i> My Curriculum Vitae</a>
                            </div>
						</div>
					</div>
            </div>
        )
    }
}
