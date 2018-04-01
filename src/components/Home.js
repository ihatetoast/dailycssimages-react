import React,{Fragment}from "react";

const Home = () => (
  <Fragment>
    <h1>Daily Challenges</h1>
    <div className="textPara">
    <p>
      In 2017, I did a full round of The Coding Artist's Daily CSS Images followed briefly by Daily SVG Images. The challenges ran Monday to Friday with the weekends off for 10 weeks. I participated in Daily CSS Images first, took a week off, and started daily SVGs; however, Coding Artist could not continue and the daily SVGs were not completed.
    </p>
    <p>After my first round, I quickly built a static HTML site to showcase my finished works. It was a lot of repetition of the same stuff, so ... DIY with ReactJS. </p>
    <p>Once I finish building this site with ReactJS, I plan to participate in another round to keep my Sass and SVG skills up. I also plan allowing comments and likes, and persisting this on Firebase. </p>
    </div>
  <ul>
  <a href="https://medium.com/coding-artist" target="_blank" rel="noopener noreferrer" ><li>The Coding Artist</li></a>
  <a href="http://dailycssimages.com/" target="_blank" rel="noopener noreferrer" ><li>Daily CSS Images Challenge</li></a>
  <a href="https://medium.com/coding-artist/a-beginners-guide-to-vector-graphic-design-815cb1cb4d70" target="_blank" rel="noopener noreferrer" ><li>Daily SVG Images info</li></a>
  </ul>
  </Fragment>
);

export default Home;
