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
          I'm a Ph.D. candidate advised by <a href="https://www.cise.ufl.edu/~eragan/" className="title-blues link">
            <b>Eric Ragan</b>
          </a> at the University of Florida.
          <p className="mb-3"></p>
          My interdisciplinary research lies in the intersection of Human-Computer Interaction (HCI), Artificial Intelligence (AI) and Machine Learning (ML), social sciences, and psychology. I study people's interactions with and understanding of AI/ML systems, specifically those used for AI-assisted decision-making. Through my research, I have studied the impact of various human factors on effective collaborative decision-making, such as human-machine trust, cognitive and societal biases, and past experiences. Moreover, I study the effectiveness of designing and incorporating explainability and algorithmic transparency techniques in AI/ML systems and interactive tools. My research has implications for building ethical and responsible AI systems. As an advocated for building trustworthy AI systems, I've found and co-organized the Workshop on TRust and EXpertise in Visualization (<a href="https://trexvis.github.io/Workshop2022/" className="title-blues link"><b><i className="fas fa-users"></i> TREX VIS</b></a>) at IEEE VIS since 2020.
          <p className="mb-3"></p>
          Previously, I was a research intern at <i className="fab fa-apple logo"></i> <b className="title-blues">Apple</b> Technology Development Group, working on understanding CVML data workflows in extended reality systems. I was also a research intern at <i className="fab fa-microsoft logo"></i> <a href="https://www.microsoft.com/en-us/research/theme/fate/" className="title-blues link"><b>Microsoft Research FATE NYC</b></a>, working with <a href="http://users.umiacs.umd.edu/~hal/" className="title-blues link"><b>Hal Daumé III</b></a>, <a href="http://www.jennwv.com/" className="title-blues link"><b>Jenn Wortman Vaughan</b></a>, <a href="http://solon.barocas.org/" className="title-blues link"><b>Solon Barocas</b></a>, and <a href="https://foroughp.github.io/" className="title-blues link"><b>Forough Poursabzi</b></a> to study the explainability of human errors for bias mitigation. I received my B.E. in Computer Engineering from University of Tehran in 2017.
          <p className="mb-3"></p>
          If you are curious, my first name is pronounced as <i>'/mæhsʌn/'</i>.
          The 'h' is not silent, but I understand it can be challenging to
          pronounce. In Farsi, my mother tongue, Mahsan means '
          <i>beautiful, as the moon <i className="fas fa-moon title-blues"></i></i>'.

          <p className="mb-3"></p>
          I'm always more than happy to chat and collaborate on new (and fun) ideas. Feel free to reach out via email <i className="fas fa-hand-holding-heart title-blues"></i>!
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
