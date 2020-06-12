import React, { useState } from "react";
import axios from "axios";

function AddProduct() {
  const [addProduct, setAddProduct] = useState({
    name: "",
    category: "",
    image: "",
    description: "",
  });

  const handleChange = (evt) => {
    setAddProduct({ ...addProduct, [evt.target.name]: evt.target.value });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    axios
      .post("http://localhost:3000/api/products", addProduct)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error);
      });
  };

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
        <h1>Add Product</h1>
        <form style={styles} onSubmit={handleSubmit}>
          <div className="form-group">
            <label className="visible">Product Name</label>
            <input
              type="text"
              className="form-control"
              name="name"
              value={addProduct.name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label className="visible">Category</label>
            <input
              type="text"
              className="form-control"
              name="category"
              value={addProduct.category}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label className="visible">Description</label>
            <input
              type="text"
              className="form-control"
              name="description"
              value={addProduct.description}
              onChange={handleChange}
            />
          </div>
          <div class="form-group">
            <label>Image Upload</label>
            <input
              type="file"
              class="form-control-file"
              id="exampleFormControlFile1"
              onChange={handleChange}
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

export default AddProduct;
