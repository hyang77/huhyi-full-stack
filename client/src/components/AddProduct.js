import React from "react";

class AddProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      category: "",
      description: "",
    };

    //setting up functions
    this.onChangeProductName = this.onChangeProductName.bind(this);
    this.onChangeProductCategory = this.onChangeProductCategory.bind(this);
    this.onChangeProductDescription = this.onChangeProductDescription.bind(
      this
    );
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChangeProductName(e) {
    this.setState({ name: e.target.value });
  }

  onChangeProductCategory(e) {
    this.setState({ category: e.target.value });
  }

  onChangeProductDescription(e) {
    this.setState({ description: e.target.value });
  }

  onSubmit(e) {
    e.preventDefault();

    console.log(`Product successfully created!`);
    console.log(`Name: ${this.state.name}`);
    console.log(`Category: ${this.state.category}`);
    console.log(`Description: ${this.state.description}`);

    this.setState({ name: "", category: "", description: "" });
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
          <h1>Add Product</h1>
          <form style={styles}>
            <div className="form-group">
              <label className="visible">Product Name</label>
              <input
                type="text"
                className="form-control "
                value={this.state.name}
                onChange={this.onChangeProductName}
              />
            </div>
            <div className="form-group">
              <label className="visible">Category</label>
              <input
                type="text"
                className="form-control"
                value={this.state.category}
                onChange={this.onChangeProductCategory}
              />
            </div>
            <div className="form-group">
              <label className="visible">Description</label>
              <input
                type="text"
                className="form-control"
                value={this.state.description}
                onChange={this.onChangeProductDescription}
              />
            </div>
            <button
              type="submit"
              className="btn btn-primary"
              onChange={this.onSubmit}
            >
              Create
            </button>
          </form>
          {/**
           * testing f the value has been updated
           * <div>
            {this.state.name}{this.state.category}{this.state.description}
          </div>
        
           */}
        </div>
      </React.Fragment>
    );
  }
}

export default AddProduct;
