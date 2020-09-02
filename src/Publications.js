import React, { Component } from 'react';
import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';
import publications from './publications.json';

export default class Publications extends Component {

    render() {
        const publicationList = publications.map((publicationType, index) => {
            return (
                <React.Fragment key={index}>
                    <h3 className="mt-2 pub-type-title">{publicationType.title}</h3>
                    <ul className="list-group mt-2">
                        {publicationType.list.map((item, index) => {
                            return (
                                <li className="list-group-item" key={index}>
                                    <h6>{ReactHtmlParser(item.harvardCitation)}</h6>
                                    {(item.type!="" && item.type!=undefined) && <button type="button" className="btn btn-info btn-sm mr-2 mt-2 mt-md-0 disabled publication-type">{item.type}</button>}
                                    {item.nickname!="" && <a className="btn btn-outline-primary btn-sm mr-2 mt-2 mt-md-0" target = "_blank" href={require(`../public/pdfs/${item.nickname}.pdf`)}><i className="fas fa-file-pdf"></i> PDF</a>}
                                    {item.link!="" && <a className="btn btn-outline-primary btn-sm mr-2 mt-2 mt-md-0" target = "_blank" href={item.link}><i className="fas fa-link"></i> Link</a>}
                                    {(item.video!="" && item.video!=undefined) && <a className="btn btn-outline-danger btn-sm mr-2 mt-2 mt-md-0" target = "_blank" href={item.video}><i className="fab fa-youtube"></i> Video</a>}
                                </li>
                            )
                        })}
                    </ul>
                </React.Fragment>
            )
        })
        return (
            <React.Fragment>
                {publicationList}
            </React.Fragment>
        )
    }
}
