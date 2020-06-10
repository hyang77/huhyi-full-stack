import React from "react";
import "./App.css";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
} from "react-router-dom";
import logo from "./assets/images/logo.jpg";

import ScrollToTop from "./components/ScrollToTop";
import HomePage from "./components/HomePage";
import Product from "./components/Product";
import Contact from "./components/Contact";
import Search from "./components/Search";
import AddProduct from "./components/AddProduct";
import EditProduct from "./components/EditProduct";
import ProductList from "./components/ProductList";
class App extends React.Component {
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
    const companyName = {
      english: "HUH-YI Enterprise Co.,Ltd",
      mandarin: "互怡企業",
    };
    /*
    const product = {
      english: {chair:["Folding Chair","Public Line Chair"],desk:["Executive","Meeting", Office["CD Desk"],"screen"]
    };
    */
    const product = {
      chair: ["Folding Chair", "Public Line Chair"],
      desks: ["Office Desk", "Meeting Table", "Executive Desk"],
      screens: ["Screens"],
    };

    return (
      <React.Fragment>
        <Router basename={process.env.PUBLIC_URL}>
          <ScrollToTop>
            <div className="App">
              <header>
                <nav className="nav-container">
                  <img className="App-logo" src={logo} alt="logo" />
                  <div className="companyName">
                    <span>{companyName.mandarin}</span>
                    <span>{companyName.english}</span>
                  </div>
                  <nav className="nav-flex">
                    <label id="" htmlFor="toggle">
                      &#9776;
                    </label>
                    <input type="checkbox" id="toggle" />
                    <ul id="menu">
                      <li className="menu-list">
                        <NavLink exact activeClassName="active" to="/">
                          <span>關於互怡</span>
                          <span>About us</span>
                        </NavLink>
                      </li>
                      <li className="menu-list">
                        <NavLink activeClassName="active" to="/product">
                          <span>產品型錄</span>
                          <span>Products</span>
                        </NavLink>
                      </li>
                      <li className="menu-list">
                        <NavLink activeClassName="active" to="/contact">
                          <span>聯絡我們</span>
                          <span>Contact us</span>
                        </NavLink>
                      </li>
                    </ul>
                  </nav>
                  <form className="search">
                    <input
                      className="search"
                      type="text"
                      placeholder="產品型號搜尋 Search.."
                      onChange={this.handleSearchInput}
                      value={this.state.searchInput}
                    ></input>
                    <Link to="/product/search">
                      <button
                        className="search"
                        type="submit"
                        onClick={this.handleSearchSubmit}
                      >
                        <i className="search fas fa-search"></i>
                      </button>
                    </Link>
                  </form>
                </nav>

                <Switch>
                  <Route path="/product">
                    <Product searchInput={this.state.searchInput} />
                  </Route>
                  <Route path="/contact">
                    <Contact />
                  </Route>
                  >
                  <Route exact path="/">
                    <HomePage />
                  </Route>
                  {/* route for create, edit, delete and show product */}
                  <Route exact path="/add">
                    <AddProduct />
                  </Route>
                  <Route exact path="/edit">
                    <EditProduct />
                  </Route>
                  <Route exact path="/list">
                    <ProductList />
                  </Route>
                </Switch>
              </header>
            </div>
            <Footer />
          </ScrollToTop>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
