import React, { Component, Fragment } from "react";
import ReactHtmlParser, {
  processNodes,
  convertNodeToElement,
  htmlparser2,
} from "react-html-parser";
import News from "./News";
import NewsConent from "./News.json";

export default class About extends Component {
  render() {
    const about = (
      <div>
        <h3 className="mb-2 mt-4">Hi! My name is Mahsan Nourani!</h3>
        <p className="text-justify">
          I am a Ph.D. Student in Computer Science, advised by{" "}
          <a href="https://www.cise.ufl.edu/~eragan/" className="title-blues">
            <b>Dr. Eric D. Ragan</b>
          </a>
          . I prefer to identify myself as an HCI/HCC researcher, although my
          work has spanned across multiple topics. Through research, I tend to
          learn more about user behaviours with computer systems, specifically,
          those powered by Artificial Intelligence and Machine Learning
          algorithms. I am interested in learning and exploring human factors
          such as user trust and mental models, as well as learning about and
          exposing human biases that can affect user experiences. Although I am
          interested in decision-support systems in general, I have mainly
          focused on eXplainable AI (XAI) systems and Visual Analytics tools. My
          preferred research methods are qualitative and quantitative user
          studies and empirical human evaluations for systems and techniques.
          Previously, I received my Bachelor's Degree in Computer Engineering
          and Information Technology from University of Tehran in 2017.
          <p className="mb-2"></p>
          If you are curious, my first name is pronounced as <i>'/mæhsʌn/'</i>.
          The 'h' is not silent, but I understand it can be challenging to
          pronounce. In Farsi, my mother tongue, Mahsan means '
          <i>beautiful, as the moon</i>'.
          <br />
          In my free time, I enjoy playing video games{" "}
          <span className="fas fa-gamepad"></span>, practicing yoga{" "}
          <span className="fas fa-child"></span>, outdoor activities{" "}
          <span className="fas fa-hiking"></span>{" "}
          <span className="fas fa-campground"></span>, and rock climbing{" "}
          <span className="fas fa-mountain"></span>.
        </p>
      </div>
    );
    const news = NewsConent.map((newsItem, index) => {
      return (
        newsItem.show && (
          <News
            key={index}
            date={newsItem.date}
            newsText={ReactHtmlParser(newsItem.text)}
          />
        )
      );
    });
    return (
      <React.Fragment>
        {about}
        {news}
      </React.Fragment>
    );
  }
}
