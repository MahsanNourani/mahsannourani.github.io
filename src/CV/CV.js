import React, { Component } from 'react';
import './CV.css'
import { ContactItem, CVEducation, ResearchExperience, CVPerson, CVAwards, CVPublication, CVTalk, CVTeaching, CVService, CVMentoring } from './CV_Utilities';
import publications from './PublicationsNew.json';
import talks from './Talks.json';
import awards from './Awards.json';
import teaching from './Teaching.json';
import service from './Service.json';
import volunteer from './Volunteer.json';
import mentees from './Mentoring.json';
import { v4 as uuidv4 } from 'uuid';

class CV extends Component {
    state = {}
    render() {

        let cvName = "Mahsan Nourani"
        let researchInterests = "Human-centered AI/XAI . Responsible AI . Decision-making . Visual Analytics"

        let shortBio =
            (<p>
                My interdisciplinary research lies in the intersection of HCI, AI/ML, psychology, and social sciences. I study people's interactions with and understanding of AI/ML systems, specifically those used for AI-assisted decision-making. My research has implications for building ethical and responsible AI systems.

            </p>)

        let contactInfo = [
            { icon: "fa fa-home", link: "https://mahsan.page", value: "www.mahsan.page" },
            { icon: "fa fa-envelope", link: "mailto:mahsannourani@ufl.edu", value: "mahsannourani@ufl.edu" },
            { icon: "fa fa-graduation-cap", link: "https://scholar.google.com/citations?user=tf4o6WYAAAAJ&hl=en&oi=ao", value: "Google Scholar" },
            { icon: "fab fa-linkedin", link: "https://www.linkedin.com/in/mahsannourani", value: "LinkedIn" },
            { icon: "fab fa-github", link: "https://github.com/mahsannourani", value: "Github" },
        ]

        let contact = contactInfo.map((item, index) => {
            return (
                <ContactItem {...item} key={uuidv4()} />
            )
        })

        let researchExperience = [
            {
                startDate: "Aug 2018", endDate: "Present", role: "Research Assistant", institue: "University of Florida", location: "Gainesville, Florida",
                advisor: [{ name: "Eric D. Ragan", link: "https://www.cise.ufl.edu/~eragan/" }]
            },
            {
                startDate: "May 2022", endDate: "Aug 2022", role: "Research Intern, Technology Development Group", institue: "Apple Inc.", location: "Sunnyvale, California",
                mentor: [{ name: "Marco Cavallo", link: "http://mastercava.com/" }]
            },
            {
                startDate: "May 2021", endDate: "Aug 2021", role: "Research Intern, Fairness, Accountability, Transparency, & Ethics (FATE) team", institue: "Microsoft Research", location: "New York, New York",
                mentor: [
                    { name: "Hal Daumé III", link: "http://users.umiacs.umd.edu/~hal/" },
                    { name: "Jenn Wortman Vaughan", link: "http://www.jennwv.com/" },
                    { name: "Solon Barocas", link: "http://solon.barocas.org/" },
                    { name: "Forough Poursabzi", link: "https://foroughp.github.io/" }
                ]
            },
            {
                startDate: "Aug 2017", endDate: "Aug 2018", role: "Research Assistant", institue: "Texas A&M University", location: "College Station, Texas",
                advisor: [{ name: "Eric D. Ragan", link: "https://www.cise.ufl.edu/~eragan/" }]
            },
            {
                startDate: "Feb 2015", endDate: "Jun 2017", role: "Undergraduate Research Assistant", institue: "University of Tehran", location: "Tehran, Iran",
                advisor: [{ name: "Hadi Moradi", link: "https://www.linkedin.com/in/hadi-moradi-a72bb35/" }]
            },
        ]

        let researchExpList = researchExperience.map((item, index) => {
            return (
                <ResearchExperience key={uuidv4()} {...item} />
            )
        })

        let education = [
            {
                startDate: "Aug 2017", endDate: "May 2023", institue: "University of Florida (Transferred: Texas A&M University in 2018)", location: "Gainesville, Florida", degree: "Ph.D., Computer Science", thesis: "Shadows of the Past: The Effects of User\'s Past Experiences and Expectations on Human-AI Partnership",
                advisor: { name: "Eric D. Ragan", link: "https://www.cise.ufl.edu/~eragan/" },
                committee: [
                    { name: "Juan Gilbert", link: "https://www.cise.ufl.edu/gilbert-juan/" },
                    { name: "Jenn Wortman Vaughan", link: "http://www.jennwv.com/" },
                    { name: "Peter Kvam", link: "https://peterkvam.com/" },
                    { name: "Vincent Binschaedler", link: "https://vbinds.ch/" }]
            },
            { endDate: "Dec 2021", institue: "University of Florida", degree: "M.S., Computer Science", location: "Gainesville, Florida", GPA: "3.80/4.0" },
            { startDate: "Sep 2012", endDate: "Jun 2017", institue: "University of Tehran", degree: "B.E., Information Technology (Computer Engineering)", location: "Tehran, Iran", GPA: "3.70/4.0", thesis: "Teaching Turn-taking to Children with Autism", },
        ]

        let educationList = education.map((item, index) => {
            return (
                <CVEducation key={uuidv4()} {...item} />
            )
        })

        let awardList = awards.map((item, index) => {
            return (
                <CVAwards key={uuidv4()} {...item} />
            )
        })

        let publicationList = publications.map((item, index) => {
            let pub = item.list.map((pub, idx) => {
                return (
                    <CVPublication key={uuidv4()} {...pub} />
                );
            })
            return (
                <React.Fragment key={uuidv4()}>
                    <h4 className='ml-4 mt-1 subsectionTitle'>{item.title}</h4>
                    {pub}
                </React.Fragment>
            )
        });

        let talkList = talks.map((item, index) => {
            return (
                <CVTalk key={uuidv4()} {...item} />
            );
        })

        let teachingList = teaching.map((item, index) => {
            let teachings = item.courses.map((teachItem, idx) => {
                return (
                    <CVTeaching key={uuidv4()} role={item.role} {...teachItem} />
                );
            })
            return (
                <React.Fragment key={uuidv4()}>
                    {/* <h4 className='ml-4 mt-1 subsectionTitle'>{item.role}</h4> */}
                    {teachings}
                </React.Fragment>
            )
        })

        let services = service.map((item, index) => {
            let list = item.where.map((location, idx) => {
                return <CVService key={uuidv4()}  {...location} />
            })
            return (
                <React.Fragment key={uuidv4()}>
                    <h4 className='mb-1 subsectionTitle'>{item.title}</h4>
                    {/* {item.misc && <p>{item.misc}</p>} */}
                    {list}
                </React.Fragment>
            )
        })

        let volunteerList = volunteer.map((item, index) => {
            return (
                <CVAwards key={uuidv4()} {...item} />
            )
        })

        let menteeList = mentees.map((item, index) => {
            return (
                <CVMentoring key={uuidv4()} {...item} />
            )
        })

        return (
            <div id="cvMain">
                {/* Remove subtitle if you want. In such case, set #name 's mb-0 to mb-2. */}
                <h2 id="name" className='mb-0 mt-4'>{cvName}</h2>
                <p id="subtitle">
                    {researchInterests}
                </p>
                {shortBio}
                <div className='container'>
                    <div className='row'>
                        {contact}
                    </div>
                </div>

                {/* horizontal line after the contact */}
                <hr className="mt-3 mb-2" />
                <h3 className='mb-2 mt-2 sectionTitle eight'>Research Experience
                    {/* <span className='line'></span> */}
                </h3>
                {researchExpList}

                {/* <hr className="mt-3 mb-2" /> */}
                <h3 className='mb-2 mt-2 sectionTitle eight'>Education
                    {/* <span className='line'></span> */}
                </h3>
                {educationList}


                <h3 className='mb-2 mt-2 sectionTitle eight'>Honors and Awards
                    {/* <span className='line'></span> */}
                </h3>
                {awardList}

                <h3 className='mb-2 mt-2 sectionTitle eight'>Publications
                    {/* <span className='line'></span> */}
                </h3>
                {publicationList}

                <h3 className='mb-2 mt-2 sectionTitle eight'>Talks and Presentations
                    {/* <span className='line'></span> */}
                </h3>
                {talkList}

                <h3 className='mb-2 mt-2 sectionTitle eight'>Teaching Experience
                    {/* <span className='line'></span> */}
                </h3>
                {teachingList}

                <h3 className='mb-2 mt-2 sectionTitle eight'>Mentoring Experience
                    {/* <span className='line'></span> */}
                </h3>
                {menteeList}

                <h3 className='mb-2 mt-2 sectionTitle eight'>Service Activities
                    {/* <span className='line'></span> */}
                </h3>
                {services}


                <h3 className='mb-2 mt-2 sectionTitle eight'>Volunteer Experience
                    {/* <span className='line'></span> */}
                </h3>
                {volunteerList}

            </div>
        );
    }
}

export default CV;