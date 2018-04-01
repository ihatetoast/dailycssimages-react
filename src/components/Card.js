import React, { Fragment } from "react";

const Card = props => (
  <Fragment>
    <h1 className="title">
      {props.day}: {props.title}
    </h1>
    <h3 className="date">{props.date}</h3>
    <a href={props.url}>
      <img
        alt="placeholder of Bill Fkn Murray"
        src="https://www.fillmurray.com/300/200"
      />
    </a>

    <p className="cssDesc">{props.desc}</p>
    <p className="code">
      <a href={props.url}>View on Codepen</a>
    </p>
  </Fragment>
);
//i need to do all 50 on here and then do screenshots from codepen. THEN replace fillmurray
//<div><img alt={props.title} src={props.image} /></div>
export default Card;
