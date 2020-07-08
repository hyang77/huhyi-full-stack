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
    this.validate = this.validate.bind(this);
  }

  handleOnChange = (e) => this.setState({ [e.target.name]: e.target.value });

  handleOnUploadFile = (e) => this.setState({ image: e.target.files[0] });

  validate = () => {
    const form = document.querySelector("#product-form");
    if (form.checkValidity()) {
      return true
    }
  }

  handleSubmit = (evt) => {
    evt.preventDefault();
    const formData = new FormData();
    formData.append("name", this.state.name);
    formData.append("category", this.state.category);
    formData.append("image", this.state.image);
    formData.append("description", this.state.description);

    for (var [key, value] of formData.entries()) {
      console.log(key, value);
    }

    axios
      .post("http://localhost:4000/api/products", formData)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });

    //user input validation

    if(this.validate()) {
      alert("資料提交完成");
      //reset the form
      document.getElementById("product-form").reset();
      this.setState({
        name: "",
        category: "",
        image: "",
        description: "",
      });
    }
    

    
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

          <form id="product-form" style={styles} onSubmit={this.handleSubmit}>
            <div className="form-group">
              <label className="visible">產品名稱 Product Name*</label>
              <input
                type="text"
                className="form-control"
                name="name"
                required
                value={this.state.name}
                onChange={this.handleOnChange}
              />
            </div>
            <div className="form-group">
              <label className="visible">產品種類 Category*</label>
              <input
                type="text"
                className="form-control"
                name="category"
                required
                value={this.state.category}
                onChange={this.handleOnChange}
              />
            </div>
            <div className="form-group">
              <label className="visible">註解 Description</label>
              <input
                type="text"
                className="form-control"
                name="description"
                value={this.state.description}
                onChange={this.handleOnChange}
              />
            </div>
            <div className="form-group">
              <label className="visible">上傳檔案 .jpg .png only*</label>
              <input
                type="file"
                name="image"
                required
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
