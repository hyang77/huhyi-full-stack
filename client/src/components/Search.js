import React from "react";
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = { disableLink: false, searchInput: "" };
    this.handleSearchInput = this.handleSearchInput.bind(this);
    this.handleSearchSubmit = this.handleSearchSubmit.bind(this);
  }

  handleSearchSubmit(e) {
    if (this.state.searchInput === "") {
      e.preventDefault();
      alert("請輸入關鍵字(1-10字之間)");
    }
  }

  handleSearchInput(e) {
    this.setState({ searchInput: e.target.value });
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
        {/** 
        * <form className="search">
        <input
          className="search"
          type="text"
          placeholder="產品型號搜尋 Search.."
          onChange={this.handleSearchInput}
          value={this.state.searchInput}
        ></input>
        <button
          className="search"
          type="submit"
          onClick={this.handleSearchSubmit}
        >
          <i className="search fas fa-search"></i>
        </button>
        <button type="button" class="btn btn-outline-primary">Primary</button>
      </form>
       */}
        <div style={styles}>
          <form style={styles}>
            <div class="input-group mb-3">
              <input
                type="text"
                class="form-control"
                placeholder="Search products"
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
              />
              <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button">
                  <i className="search fas fa-search"></i>
                </button>
              </div>
            </div>
          </form>
        </div>
        
      </React.Fragment>
    );
  }
}
export default Search;
