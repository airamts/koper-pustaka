import React from "react";
import { getBookData } from "../../utils/dataBuku.js";
import CardBookList from "./CardBookList.jsx";

class CardBookApp extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: getBookData(),
    };
  }

  render() {
    return (
        <CardBookList cards={this.state.cards} />
    )
  }
}

export default CardBookApp;
