import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  NavLink,
  Redirect,
} from "react-router-dom";
import Screenseries from "./Screenseries";
import { FoldingChair, PublicLineChair, Chairseries } from "./Chairseries";
import {
  Deskseries,
  ExecutiveDesk,
  MeetingDesk,
  OfficeDesk,
} from "./Deskseries";
import Search from "./Search";

class Product extends React.Component {
  constructor(props) {
    super(props);
    this.state = { active: 0 };
    this.isSelected = this.isSelected.bind(this);
  }

  isSelected(number) {
    this.setState({ active: number });
    console.log(this.state.active);
  }

  render() {
    return (
      <React.Fragment>
        <div className="product-page-container">
          <div className="product-page-boxes">
            <div className="rounded-corner-container">
            <nav className="product-nav">
              <ul>
                
                <li>
                  <NavLink
                    exact
                    to="/product/screens"
                    activeclassname="active"
                  >
                    屏風 Screens
                  </NavLink>
                </li>
                <li
                  className="product-sub-menu"
                  onClick={() => this.isSelected(2)}
                >
                  <NavLink activeclassname="active" to="/product/chairs">
                    椅子系列 Chairs
                    <div className="fa fa-caret-down right"></div>
                  </NavLink>
                  <ul
                    className={`collapsible ${
                      this.state.active === 2 ? "open" : null
                    }`}
                  >
                    <li>
                      <Link activeclassname="active" to="/product/chairs/folding-chair">折合椅</Link>
                    </li>
                    <li>
                      <Link activeclassname="active" to="/product/chairs/public-line-chair">排椅</Link>
                    </li>
                  </ul>
                </li>
                <li
                  className="product-sub-menu"
                  onClick={() => this.isSelected(3)}
                >
                  <NavLink activeclassname="active" to="/product/desks">
                    桌子系列 Desks<div className="fa fa-caret-down right"></div>
                  </NavLink>
                  <ul
                    className={`collapsible ${
                      this.state.active === 3 ? "open" : null
                    }`}
                  >
                    <li>
                      <Link activeclassname="active" to="/product/desks/executive">主管桌</Link>
                    </li>
                    <li>
                      <Link activeclassname="active" to="/product/desks/meeting">會議桌</Link>
                    </li>
                    <li>
                  <Link activeclassname="active" to="/product/desks/office/cd-desk">CD型辦公桌</Link>
                    </li>
                  </ul>
                </li>
              </ul>
            </nav>
            </div>
          </div>
          <div className="product-page-boxes">
        
            <Switch>
              <Route path="/product/screens">
                <Screenseries />
              </Route>
              <Route exact path="/product/chairs">
                <Chairseries />
              </Route>
              <Route exact path="/product/desks">
                <Deskseries />
              </Route>

              <Route path="/product/chairs/folding-chair">
                <FoldingChair />
              </Route>
              <Route path="/product/chairs/public-line-chair">
                <PublicLineChair />
              </Route>

              <Route path="/product/desks/executive">
                <ExecutiveDesk />
              </Route>
              <Route path="/product/desks/meeting">
                <MeetingDesk />
              </Route>
              <Route path="/product/desks/office/cd-desk">
                <OfficeDesk />
              </Route>
              <Route path="/product/search">
                <Search searchInput={this.props.searchInput}/>
              </Route>

              <Redirect from="/product" to="/product/screens" />
            </Switch>
          </div>
        </div>
      </React.Fragment>
    );
  }
}

export default Product;
