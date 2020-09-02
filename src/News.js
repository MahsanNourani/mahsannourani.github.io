import React, { Component } from 'react'
import styles from './News.module.css';

export default class News extends Component {
	constructor(props) {
		super(props)

		this.state = {
			date: props.date,
			// newsText = <span>this is a test <a  href="https://trexvis.github.io/Workshop2020/index.html"> website</a>.</span>
			newsText: props.newsText
		}
	}

	render() {
		return (
			<div className={`p-0 mb-2 rounded ${styles.newsItem} row m-0 d-flex align-items-center`}>
				<div className={`${styles.pointer} pt-lg-2 pl-2`}><b>{this.state.date}</b></div>
				<div className={`${styles.newsText} col-lg-9 col-md-8 col-sm-8 col-8 p-0 pt-2 pb-2`}>{this.state.newsText}</div>
			</div>
		)
	}
}
