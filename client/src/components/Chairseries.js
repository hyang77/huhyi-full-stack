import React from "react";
import { Link, NavLink } from "react-router-dom";

function Chairseries() {
  return (
    <React.Fragment>
      <div className="title chair-title">椅子系列</div>
      <div className="items chair-items">
        <div>
          <NavLink to="/product/chairs/folding-chair">
            <img
              key="899-P3"
              src={require("../assets/images/chairs/folding-chairs/899-P3.jpg")}
              alt="899-P3"
            />
            <p>折合椅</p>
          </NavLink>
        </div>
        <div>
          <Link to="/product/chairs/public-line-chair">
            <img
              key="262"
              src={require("../assets/images/chairs/public-line-chairs/262.jpg")}
              alt="262"
            />
            <p>排椅</p>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
}

//Chair list

function FoldingChair() {
  const foldingChairList = [
    "32-P72F",
    "33-P8",
    "899-P3",
    "FB322",
    "FC-211",
    "FC-705",
    "FC-714",
    "FC-802",
    "FD-121",
    "FS-006",
    "LM34-Pn_connect",
  ];
  const loadImage = foldingChairList.map((name) => {
    return (
      <div>
        <img
          key={name}
          src={require("../assets/images/chairs/folding-chairs/" +
            name +
            ".jpg")}
          alt={name}
        />
        <p>{name}</p>
      </div>
    );
  });
  return (
    <React.Fragment>
      <div className="title chair-title">折合椅</div>
      <div className="items chair-items">{loadImage}</div>
    </React.Fragment>
  );
}

function PublicLineChair() {
  const publicLineChairList = [
    "022b",
    "31T-P9",
    "32-P72F",
    "33A-P9",
    "33C-P7",
    "33-P5",
    "33-P8",
    "33T-P8",
    "262",
    "263a",
  ];
  const loadImage = publicLineChairList.map((name) => {
    return (
      <div>
        <img
          key={name}
          src={require("../assets/images/chairs/public-line-chairs/" +
            name +
            ".jpg")}
          alt={name}
        />
        <p>{name}</p>
      </div>
    );
  });
  return (
    <React.Fragment>
      <div className="title chair-title">排椅</div>
      <div className="items chair-items">{loadImage}</div>
    </React.Fragment>
  );
}
export { FoldingChair, PublicLineChair, Chairseries };
