import React, { ReactFragment } from 'react';
import 'font-awesome/css/font-awesome.min.css';
import styles from './Utilities.module.css';
// import { v4 as uuidv4 } from 'uuid';
// import clsx from "clsx";
// import ReactHtmlParser, { processNodes, convertNodeToElement, htmlparser2 } from 'react-html-parser';


export const LinkIcon = (props) => {
	return (
		<div className="col-lg-2 col-md-2 col-sm-3 col-2 p-0">
			<a href={props.href} datatoggle="tooltip" dataplacement="top" target="_blank" title={props.title}>
				<span className={`${props.icon} p-1 rounded ${styles.iconStyle}`}></span>
			</a>
		</div>
	);
}

export const ResearchInterests = (props) => {
	return (
		<li className={`list-group-item p-0 ${styles.items}`}>{props.item}</li>
	);
}
