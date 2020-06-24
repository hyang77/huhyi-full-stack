import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class AddProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      category: "",
      image: "",
      description: "",
    };

    this.handleOnChange = this.handleOnChange.bind(this);
    this.handleOnUploadFile = this.handleOnUploadFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleOnChange = e => this.setState({ [e.target.name]: e.target.value });

  handleOnUploadFile = e => this.setState({ image: e.target.files[0] });

  handleSubmit = (evt) => {
    evt.preventDefault();
    const formData = new FormData();
    formData.append('name', this.state.name);
    formData.append('category', this.state.category);
    formData.append('image', this.state.image);
    formData.append('description', this.state.description);

    axios
      .post("http://localhost:4000/api/products", formData)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  render() {
    const styles = {
      margin: "0 auto",
      padding: "2em",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
    };

    return (
      <React.Fragment>
        <div style={styles}>
          <h1>新增產品 Add Product</h1>
          <div className="d-flex justify-content-end">
            <Link to="/list">
              <button type="button" className="btn btn-success btn-sm ">
                <i className="fa fa-list-ul mr-2" aria-hidden="true"></i>
                瀏覽產品
              </button>
            </Link>
          </div>

          <form style={styles} onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label className="visible">Product Name</label>
              <input
                type="text"
                className="form-control"
                name="name"
                value={this.state.name}
                onChange={this.handleOnChange}
              />
            </div>
            <div className="form-group">
              <label className="visible">Category</label>
              <input
                type="text"
                className="form-control"
                name="category"
                value={this.state.category}
                onChange={this.handleOnChange}
              />
            </div>
            <div className="form-group">
              <label className="visible">Description</label>
              <input
                type="text"
                className="form-control"
                name="description"
                value={this.state.description}
                onChange={this.handleOnChange}
              />
            </div>
            <div className="form-group files">
              <label>Image Upload</label>
              <input
                type="file"
                name="image"
                className="form-control-file"
                id="exampleFormControlFile1"
                onChange={this.handleOnUploadFile}
              />
            </div>
            <button type="submit" className="btn btn-primary">
              Create
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default AddProduct;
