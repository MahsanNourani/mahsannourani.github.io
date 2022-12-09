import React, { ReactFragment } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import styles from './CV_Utilities.module.css';
import { v4 as uuidv4 } from 'uuid';
import clsx from "clsx";
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';


// For CV - the contact items on the top.
export const ContactItem = (props) => {
    return (
        <div className='col-md-4'>
            <span className={`${props.icon} p-1 rounded ${styles.contactIcon}`}></span>
            <a className={clsx(styles.contact, styles.underline)} href={props.link} target="_blank">{props.value}</a>
        </div>
    );
}

// convert each name to link
export const CVPerson = (props) => {
    return (
        <span className={styles.lessHighlightedTextDark}>
            <a href={props.link} className={styles.underline} target="_blank">{props.name}</a>
        </span>
    );
}


// For CV - represents each item on the research experience list.
export const ResearchExperience = (props) => {
    let location = (
        <p className='mb-0'>
            <span className={styles.highlightedText}>{props.institue}</span>
            , <span className={styles.lessHighlightedText}>{props.location}</span>
        </p>
    )

    let mentor = props.mentor && props.mentor.map((item, index) => {
        return (
            <CVPerson name={item.name} link={item.link} key={uuidv4()} />
        )
    })

    let advisor = props.advisor && props.advisor.map((item, index) => {
        return (
            <CVPerson name={item.name} link={item.link} key={uuidv4()} />
        )
    })
    return (
        // <div className='container'>
        <div className='row'>
            <div className='col-md-3 px-0'>
                <p className={`${styles.dateRange} float-right`}>
                    {/* {props.startDate} &mdash; {props.endDate} */}
                    {props.startDate ? `${props.startDate} \u2014 ${props.endDate}` : `${props.endDate}`}
                </p>
            </div>
            <div className='col-md-9'>
                <div className='row'>
                    <div className='col-md-12'>
                        {location}
                    </div>
                    <div className='col-md-12'>
                        <p className={`mb-0 ${styles.subtitleText}`}>{props.role}</p>
                    </div>
                    {props.advisor ?
                        <div className={`col-md-12`}>
                            <p>
                                <span className={`${styles.lessHighlightedText}`}>Advisor: </span>
                                {/* separates names with commas */}
                                {advisor.map((item, index, advisor) => {
                                    return (
                                        (advisor.length !== index + 1) ?
                                            <span key={uuidv4()}>
                                                {item}
                                                {`, `}
                                            </span>
                                            : <span key={uuidv4()}>{item}</span>
                                    );
                                })}
                                {/* <span className={styles.lessHighlightedTextDark}>{props.advisor}</span> */}
                            </p>
                        </div> : undefined}
                    {props.mentor ?
                        <div className={`col-md-12`}>
                            <p>
                                <span className={`${styles.lessHighlightedText}`}>Mentor: </span>
                                {/* separates names with commas */}
                                {mentor.map((item, index, mentor) => {
                                    return (
                                        (mentor.length !== index + 1) ?
                                            <span key={uuidv4()}>
                                                {item}
                                                {`, `}
                                            </span>
                                            : <span key={uuidv4()}>{item}</span>
                                    );
                                })}
                                {/* <span className={styles.lessHighlightedTextDark}>{props.mentor}</span> */}
                            </p>
                        </div> : undefined}
                </div>
            </div>
        </div>
        // </div>
    );
}

// For CV - represents each item for the education section
export const CVEducation = (props) => {
    let location = (
        <p className={`mb-0 ${styles.subtitleText}`}>
            {props.institue}
            , <span className={styles.lessHighlightedText}>{props.location}</span>
        </p>
    )

    let committee = props.committee && props.committee.map((item, index) => {
        return (
            <CVPerson name={item.name} link={item.link} key={uuidv4()} />
        )
    })
    return (
        <div className='row'>
            <div className='col-md-3 px-0'>
                <p className={`${styles.dateRange} float-right`}>
                    {/* {props.startDate} &mdash; {props.endDate} */}
                    {/* The above commented codde generates a simple date range. The one below creates a range or single date depending one whether there's a start date or not.*/}
                    {props.startDate ? `${props.startDate} \u2014 ${props.endDate}` : `${props.endDate}`}
                </p>
            </div>
            <div className='col-md-9'>
                <div className='row'>
                    <div className={`col-md-12 ${styles.highlightedText}`}>
                        {props.degree}
                    </div>
                    <div className='col-md-12'>
                        {location}
                    </div>
                    {props.thesis ?
                        <div className={`col-md-12`}>
                            <p className='mb-0'>
                                <span className={`${styles.lessHighlightedText}`}>Thesis: </span>
                                <span className={`${styles.lessHighlightedTextDark}`}>{`"${props.thesis}"`}</span>
                            </p>
                        </div> : undefined}
                    {props.advisor ?
                        <div className={`col-md-12`}>
                            <p className='mb-0'>
                                <span className={`${styles.lessHighlightedText}`}>Advisor: </span>
                                <CVPerson {...props.advisor} />
                            </p>
                        </div> : undefined}
                    {props.committee ?
                        <div className={`col-md-12`}>
                            <p>
                                <span className={`${styles.lessHighlightedText}`}>Committee: </span>
                                {committee.map((item, index, committee) => {
                                    return (
                                        (committee.length !== index + 1) ?
                                            <span key={uuidv4()}>
                                                {item}
                                                {`, `}
                                            </span>
                                            : <span key={uuidv4()}>{item}</span>
                                    );
                                })}
                            </p>
                        </div> : undefined}
                    {props.GPA ?
                        <div className={`col-md-12`}>
                            <p>
                                <span className={`${styles.lessHighlightedText}`}>GPA: </span>
                                <span className={styles.lessHighlightedTextDark}>{props.GPA}</span>
                            </p>
                        </div> : undefined}
                </div>
            </div>
        </div>
    );
}


export const CVAwards = (props) => {
    return (
        <div className='row'>
            <div className='col-md-2 px-0'>
                <p className={`${styles.dateRange} float-right`}>
                    {/* {props.startDate} &mdash; {props.endDate} */}
                    {/* The above commented codde generates a simple date range. The one below creates a range or single date depending one whether there's a start date or not.*/}
                    {props.startDate ? `${props.startDate} \u2014 ${props.endDate}` : `${props.endDate}`}
                </p>
            </div>
            <div className='col-md-10 mb-2'>
                <div className='row'>
                    <div className={`col-md-12 ${styles.lessHighlightedTextDark}`}>
                        <span className={`${styles.highlightedTextDark}`}>{props.award} </span>
                        {props.paper && <span className={styles.dateRangeRed}> {`(${props.paper})`}</span>}
                    </div>
                    <div className={`col-md-12 ${styles.lessHighlightedTextDark}`}>
                        <span>{props.location}</span>
                        {props.awardType &&
                            <span>{`, `}</span>}
                        <span className={styles.lessHighlightedText}>{props.awardType}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

// Best Paper: <i className="fas fa-award"></i>
// Honorable Mention: <i className="fal fa-award"></i>

export const CVPublication = (props) => {
    return (
        <div className='row mt-1'>
            <div className='col-md-1'>
                <p className={`${styles.dateRange} float-right`}>
                    {props.award && <i className={`fas fa-award ${styles.paperAward}`}></i>}
                    {' '}
                    {props.id}
                </p>
            </div>
            <div className='col-md-11 mb-2 pl-0 pr-0'>
                <div className='row'>
                    <div className={`col-md-12 ${styles.highlightedTextDark}`}>
                        {props.title}
                    </div>
                    <div className={`col-md-12 ${styles.lessHighlightedTextDark}`}>
                        {ReactHtmlParser(props.authors)}
                    </div>
                    <div className={`col-md-12 ${styles.lessHighlightedTextDark}`}>
                        {props.journal} <span className={`${styles.dateRangeRed}`}>({props.year})</span>
                    </div>
                    {props.award &&
                        <div className={`col-md-12 ${styles.lessHighlightedTextDark}`}>
                            <i className="fas fa-trophy"></i> {props.award}
                        </div>
                    }
                </div>
            </div>
        </div>
    );
}

export const CVTalk = (props) => {
    let locations = props.where.map((item, index) => {
        return (
            <div className='row' key={uuidv4()}>
                <div className='col-md-1'>
                    <p className={`${styles.dateRangeRed} float-right mb-0`}>
                        {item.year}
                    </p>
                </div>
                <div className='col-md-11 pl-1'>
                    <p className={`${styles.lessHighlightedTextDark} mb-0`}>
                        {item.location}
                        {item.invited && <span className={styles.lessHighlightedText}>{' \u2014 '}<i className="fas fa-envelope-open-text"></i> Invited Talk</span>}
                    </p>
                </div>
            </div>
        )
    })
    return (
        <div className='container mt-1 mb-2'>
            <div className='row'>
                <div className='col-md-1'>
                    {' '}
                </div>
                <div className={`col-md-11 ${styles.highlightedTextDark} ml-6 px-0`}>
                    {props.title}
                </div>
            </div>
            {locations}
        </div>
    );
}

export const CVTeaching = (props) => {
    return (
        <div className='container mt-1'>
            <div className='row'>
                <div className='col-md-12 container mb-2 px-0'>
                    <div className={`col-md-12 ${styles.highlightedTextDark}`}>
                        <span className={styles.dateRangeRed}>{props.role}{': '} </span>{props.title}
                    </div>
                    <div className={`col-md-12 ${styles.highlightedTextDark}`}>

                    </div>
                    <div className={`col-md-12 ${styles.lessHighlightedTextDark}`}>
                        {props.location}{` \u2014 `}{props.startDate ? `${props.startDate} \u2014 ${props.endDate}` : `${props.endDate}`}
                    </div>
                    <div className={`col-md-12 ${styles.lessHighlightedText}`}>
                        {ReactHtmlParser(props.misc)}
                    </div>
                </div>
            </div>
        </div>
    );
}

export const CVService = (props) => {
    return (
        <div className='container mb-1'>
            <div className='row'>

                <div className='col-md-12 container mb-0 px-0'>
                    <div className={`col-md-12 ${styles.highlightedTextDark}`}>
                        {props.link ? <CVPerson name={ReactHtmlParser(props.location)} link={props.link} /> : <span className={styles.lessHighlightedTextDark}>{props.location}</span>}
                        <span className={styles.lessHighlightedText}>{' \u2014 '} {props.year}</span>
                    </div>
                    <div className={`col-md-12 ${styles.lessHighlightedText}`}>
                        {ReactHtmlParser(props.misc)}
                    </div>
                </div>
            </div>
        </div>
    )
}

export const CVMentoring = (props) => {
    return (

        <div className='row'>
            <div className='col-md-2 px-0'>
                <p className={`${styles.dateRange} float-right`}>
                    {/* {props.startDate} &mdash; {props.endDate} */}
                    {/* The above commented codde generates a simple date range. The one below creates a range or single date depending one whether there's a start date or not.*/}
                    {props.startDate ? `${props.startDate} \u2014 ${props.endDate}` : `${props.endDate}`}
                </p>
            </div>
            <div className='col-md-10 mb-2'>
                <div className='row'>
                    <div className={`col-md-12 ${styles.lessHighlightedTextDark}`}>
                        <span className={`${styles.highlightedTextDark}`}>{props.mentee}{props.position &&
                            <span>{`, `}</span>}
                            <span className={styles.lessHighlightedText}>{props.position}</span>
                        </span>
                    </div>
                    <div className={`col-md-12 ${styles.lessHighlightedTextDark}`}>
                        <span>{props.info}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}
