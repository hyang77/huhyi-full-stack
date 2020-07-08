import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

class EditProduct extends React.Component {
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
    // this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleOnChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
    console.log(this.state.name);
    console.log(this.state.category);
    console.log(this.state.image);
    console.log(this.state.description);
  };

  handleOnUploadFile = (e) => this.setState({ image: e.target.files[0] });

  // handleSubmit = (id) => {
  //   const formData = new FormData();
  //   formData.append("name", this.state.name);
  //   formData.append("category", this.state.category);
  //   formData.append("image", this.state.image);
  //   formData.append("description", this.state.description);

  //   axios
  //     .put(`http://localhost:4000/api/products/${id}`, formData)
  //     .then((res) => {
  //       console.log(res.data);

  //     })
  //     .catch((error) => {
  //       console.log(error);
  //     });
  //   //reset the form
  //   document.getElementById("product-form").reset();
  //   this.setState({
  //     name: "",
  //     category: "",
  //     image: "",
  //     description: "",
  //   });
  // };

  componentDidMount() {
    const fetchData = async () => {
      const id = "5f0577c6af2ce51c8cfa43ab";
      const { data } = await axios.get(
        `http://localhost:4000/api/products/${id}`
      );
      console.log(data);
      this.setState({
        name: data.name,
        category: data.category,
        image: data.image,
        description: data.description,
      });
    };
    fetchData();
  }

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
          <h1>更新產品 Update Product</h1>
          <div className="d-flex justify-content-end">
            <Link to="/list">
              <button type="button" className="btn btn-success btn-sm ">
                <i className="fa fa-list-ul mr-2" aria-hidden="true"></i>
                瀏覽產品
              </button>
            </Link>
          </div>

          <form id="product-form" style={styles}>
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
            <button
              type="button"
              className="btn btn-primary"
              // onClick={(e) => this.handleSubmit('5efd8c7d262dfe5828f652bb')}
            >
              更新 Update
            </button>
          </form>
        </div>
      </React.Fragment>
    );
  }
}

export default EditProduct;
