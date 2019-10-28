import React, { Component } from "react";
// import axios from "axios";

class Home extends Component {
  state = {
    products: []
  };

  componentDidMount() {
    fetch(
      "https://api.musement.com/api/v3/venues/164/activities?limit=6&offset=0/application/json"
    )
      .then(response => response.text())
      // .then(data => this.setState({ products: data }));
      .then(data => {
        let parser = new DOMParser(),
          xmlDoc = parser.parseFromString(data, "text/html");
        console.log(xmlDoc.getElementsByTagName("BODY")[0]);
      });
  }

  render() {
    // console.log(this.state.products);
    return <div></div>;
  }
}

export default Home;
