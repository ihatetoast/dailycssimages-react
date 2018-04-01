import React, { Component } from "react";
import Card from "./Card";
import imageData from "../imagedata.json";

class CardGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renderedCards: []
    };
    console.log("i am the card grid");
    console.log(imageData);
    this.renderCards = this.renderCards.bind(this);
  }
  componentWillMount() {
    this.renderCards();
  }
  renderCards = () => {
    //deep clone in case i want to mess with the data
    // const dataClone = { ...imageData };
    this.setState({
      renderedCards: imageData.map(item => (
        <Card
          id={item.id}
          challenge={item.challenge}
          day={item.day}
          title={item.title}
          image={item.image}
          url={item.url}
          desc={item.desc}
          date={item.date}
        />
      ))
    });
  };
  render() {
    return <div className="card">{this.state.renderedCards}</div>;
  }
}

export default CardGrid;
