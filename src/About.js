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
        <h3 className="mb-2 mt-4">Hey, I'm <b>Mahsan</b>!</h3>
        <div className="text-justify">
          I'm a Research Assistant Professor at <a href="https://www.khoury.northeastern.edu/" className="title-blues link">
            <b>Khoury College of Computer Science </b> </a> at Northeastern University and a member of <a href="https://roux.northeastern.edu/" className="title-blues link">
            <b>The Roux Institute</b></a> and <a href="https://vis.khoury.northeastern.edu/people/" className="title-blues link"><b>Khoury Visualization Lab</b></a>.
          {/* I'm a Ph.D. candidate advised by <a href="https://www.cise.ufl.edu/~eragan/" className="title-blues link">
            <b>Eric Ragan</b>
          </a> at the University of Florida. */}
          <p className="mb-2"></p>
          My interdisciplinary research lies at the intersection of Human-Computer Interaction (HCI), Artificial Intelligence (AI) and Machine Learning (ML), social sciences, and psychology. I study people's interactions with and understanding of AI/ML systems, specifically those used for AI-assisted decision-making. Through my research, I have studied the impact of various human factors on effective collaborative decision-making, such as human-machine trust, cognitive and societal biases, and past experiences. Moreover, I study the effectiveness of designing and incorporating explainability and algorithmic transparency techniques in AI/ML systems and interactive tools. My research has implications for building ethical and responsible AI systems. As an advocated for building trustworthy AI systems, I found and co-organized the Workshop on TRust and EXpertise (<a href="https://trexvis.github.io/Workshop2022/" className="title-blues link"><b><i className="fas fa-users"></i> TREX VIS</b></a>) at IEEE VIS Conference (2020&ndash;2022).
          <p className="mb-2"></p>
          Previously, I was a research intern at <i className="fab fa-apple logo"></i> <b className="title-blues">Apple</b> Technology Development Group, working on understanding CVML data workflows in extended reality systems. I was also a research intern at <i className="fab fa-microsoft logo"></i> <a href="https://www.microsoft.com/en-us/research/theme/fate/" className="title-blues link"><b>Microsoft Research FATE NYC</b></a>, studying the explainability of human errors for bias mitigation. I recevived my Ph.D. in Computer Science from University of Florida in 2023, under supervision of <a href="https://www.cise.ufl.edu/~eragan/" className="title-blues link"><b>Dr. Eric Ragan</b></a>, and my B.E. in Computer Engineering from University of Tehran in 2017.
          {/* working with <a href="http://users.umiacs.umd.edu/~hal/" className="title-blues link"><b>Hal Daumé III</b></a>, <a href="http://www.jennwv.com/" className="title-blues link"><b>Jenn Wortman Vaughan</b></a>, <a href="http://solon.barocas.org/" className="title-blues link"><b>Solon Barocas</b></a>, and <a href="https://foroughp.github.io/" className="title-blues link"><b>Forough Poursabzi</b></a>  */}
          <p className="mb-2"></p>
          <hr className="mb-2" />
          <b>Interested in my research?</b> Come work with me and my collegues at <a href="https://roux.northeastern.edu/" className="title-blues link"><b>The Roux Institute</b></a>. Particularly, I'm looking for <a href="https://northeastern.wd1.myworkdayjobs.com/careers/job/Portland-ME/Post-Doctoral-Research-Fellow_R124381" className="title-blues link"><b>Postdoctoral Researchers</b></a> to establish my lab. <b>Current Northeastern students</b>: I welcome the opportunity to discuss potential mentoring or advising. If you're interested in Human-Centered AI and related topics, let's chat!)

          <p className="mb-2"></p>
          <b>Interested in collaborating?</b> I'm always thrilled to engage in conversations and collaborate on exciting new ideas. The best way to contact me is through email.
          {/* <i className="fas fa-hand-holding-heart title-blues"></i> */}
          <p className="mb-2"></p>
          <hr className="mb-2" />
          If you are curious, my first name is pronounced as <i>'/mæhsʌn/'</i>.
          The 'h' is not silent, but I understand it can be challenging to
          pronounce. In Farsi, my mother tongue, Mahsan means '
          <i>beautiful, as the moon <i className="fas fa-moon title-blues"></i></i>'.


          {/* <br />
          In my free time, I enjoy playing video games{" "}
          <span className="fas fa-gamepad"></span>, practicing yoga{" "}
          <span className="fas fa-child"></span>, outdoor activities{" "}
          <span className="fas fa-hiking"></span>{" "}
          <span className="fas fa-campground"></span>, and rock climbing{" "}
          <span className="fas fa-mountain"></span>. */}
        </div>
      </div >
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
