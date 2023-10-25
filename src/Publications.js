import React, { Component } from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import publications from './CV/PublicationsNew.json';
import { CVPublication } from './CV/CV_Utilities';
import styles from './Publications.module.css';
import { v4 as uuidv4 } from 'uuid';


export default class Publications extends Component {

    // {
    //     "title": "DETOXER: A Visual Debugging Tool with Multi-Scope Explanations for Temporal Multi-Label Classification",
    //     "authors": "<b class='highlighted-name'> Mahsan Nourani</b>, Chiradeep Roy, Donald Honeycutt, Eric Ragan, Vibhav Gogate",
    //     "journal": "IEEE Computer Graphics and Applications (CG&A). (To appear)",
    //     "year": "2022",
    //     "id": "J.4",
    //     "link": "https://ieeexplore.ieee.org/abstract/document/9866547",
    //     "nickname": "Nourani2022Detoxer"
    // },

    render() {
        let publicationList = publications.map((item, index) => {
            let pub = item.list.map((pub, idx) => {
                return (
                    <CVPublication key={uuidv4()} notCV={true} {...pub} />
                );
            })
            return (
                <React.Fragment key={uuidv4()}>
                    <h3 className='ml-4 mt-3 text-center'>{item.title}</h3>
                    <hr />
                    {pub}
                    <hr />
                </React.Fragment>
            )
        });

        // const publicationList = publications.map((publicationType, index) => {
        //     return (
        //         <React.Fragment key={index}>
        //             <h3 className="mt-2 pub-type-title">{publicationType.title}</h3>
        //             <ul className="list-group mt-2">
        //                 {publicationType.list.map((item, index) => {
        //                     return (
        //                         <li className="list-group-item" key={index}>
        //                             <h6 className={`${styles.title} mb-0 title-blues`}><b>{item.title}</b></h6>
        //                             <div className={styles.authors}>{ReactHtmlParser(item.authors)}</div>
        //                             <div className={`${styles.venue} mb-1`}>{item.journal} <span>({item.year})</span> {item.award && <b><i className="fas fa-award title-blues"></i> <span className='title-blues'>{item.award}</span></b>}</div>
        //                             {item.type && <button type="button" className="btn btn-info btn-sm mr-2 mt-2 mt-md-0 disabled publication-type">{item.type}</button>}
        //                             {item.nickname && <a className="btn btn-outline-primary btn-sm mr-2 mt-2 mt-md-0" target="_blank" href={require(`../public/pdfs/${item.nickname}.pdf`)}><i className="fas fa-file-pdf"></i> PDF</a>}
        //                             {item.link && <a className="btn btn-outline-primary btn-sm mr-2 mt-2 mt-md-0" target="_blank" href={item.link}><i className="fas fa-link"></i> Link</a>}
        //                             {item.video && <a className="btn btn-outline-danger btn-sm mr-2 mt-2 mt-md-0" target="_blank" href={item.video}><i className="fab fa-youtube"></i> Video</a>}
        //                         </li>
        //                     )
        //                 })}
        //             </ul>
        //         </React.Fragment>
        //     )
        // })
        return (
            <React.Fragment>
                {publicationList}
            </React.Fragment>
        )
    }
}
