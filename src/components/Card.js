import React, { Fragment } from 'react';

const Card = props => (
  <Fragment>
    <h2 className="prompt">
      Day {props.day} (Prompt: {props.prompt})
    </h2>
    <h3 className="title">{props.title}</h3>
    <h3 className="date">{props.date}</h3>
    <div>
      <a href={props.url}>
        <img alt={props.title} src={props.image} />
      </a>
      <p className="cssDesc">{props.desc}</p>
      <p className="code" />
    </div>

    <a href={props.url}>View on Codepen</a>
  </Fragment>
);
//i need to do all 50 on here and then do screenshots from codepen. THEN replace fillmurray
//<div><img alt={props.title} src={props.image} /></div>
export default Card;
