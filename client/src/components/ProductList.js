import React from "react";
import axios from 'axios';
class ProductList extends React.Component {
  constructor(props) {
    super(props);
  }
  componentDidMount() {
    fetch("http://localhost:3000/api/products")
      .then((result) => {
        return result.json();
      })
      .then((data) => console.log(data));

    const url = "http://localhost:3000/api/products";
    axios.get(url).then((response) => console.log(response.data[0]));
  }
  render() {
    return null;
  }
}

export default ProductList;
