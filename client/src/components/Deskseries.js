import React from "react";
import { Link } from "react-router-dom";

function Deskseries() {
  return (
    <React.Fragment>
      <div className="title desk-title">桌子系列</div>
      <div className="items desk-items">
        <div>
          <Link to="/product/desks/office/cd-desk">
            <img
              key="AF-120-1-w"
              src={require("../assets/images/desks/office/cd-desks/AF-120-1-w.jpg")}
              alt="AF-120-1-w"
            />
            <p>CD型辦公桌</p>
          </Link>
        </div>
        <div>
          <Link to="/product/desks/executive">
            <img
              key="SD-021L"
              src={require("../assets/images/desks/desk-executive/SD-021L.jpg")}
              alt="SD-021L"
            />
            <p>主管桌</p>
          </Link>
        </div>
        <div>
          <Link to="/product/desks/meeting">
            <img
              key="CONF-D-N"
              src={require("../assets/images/desks/desk-meeting/CONF-D-N.jpg")}
              alt="CONF-D-N"
            />
            <p>會議桌</p>
          </Link>
        </div>
      </div>
    </React.Fragment>
  );
}

//Desk list

function ExecutiveDesk() {
  const executiveDeskList = ["SD-01_SD-03", "SD-021"];
  const loadImage = executiveDeskList.map((name) => {
    return (
      <div>
        <img
          key={name}
          src={require("../assets/images/desks/desk-executive/" +
            name +
            ".jpg")}
          alt={name}
        />
        <p>{name}</p>
      </div>
    );
  });
  /*
  //import images from folder
  function importAll(r) {
    return r.keys().map(r);
  }

  const images = importAll(
    require.context(
      "../assets/images/desks/desk-executive",
      false,
      /\.(png|jpe?g|svg)$/
    )
  );
  //loading image
  console.log(images);
  const loadImages = images.map((image) => {
    return <img key={image} src={image} alt="" />;
  });


import(`assets/images/${imageName}.jpg`).then( src => console.log(src) )
*/

  return (
    <React.Fragment>
      <div className="title executive-desk-title">主管桌</div>
      <div className="items executive-desk-items">{loadImage}</div>
    </React.Fragment>
  );
}

function MeetingDesk() {
  const meetingDeskList = [
    "CONF-D-N",
    "E1860",
    "FCT",
    "MY-1860-1_w",
    "MY-1860-5_w",
    "nc180",
  ];
  const loadImage = meetingDeskList.map((name) => {
    return (
      <div>
        <img
          key={name}
          src={require("../assets/images/desks/desk-meeting/" + name + ".jpg")}
          alt={name}
        />
        <p>{name}</p>
      </div>
    );
  });
  return (
    <React.Fragment>
      <div className="title meeting-desk-title">會議桌</div>
      <div className="items meeting-desk-items">{loadImage}</div>
    </React.Fragment>
  );
}

function OfficeDesk() {
  const officeDeskList = ["AF-120-1-w", "AF-120-2-w", "AF-120-4-w"];
  const loadImage = officeDeskList.map((name) => {
    return (
      <div>
        <img
          key={name}
          src={require("../assets/images/desks/office/cd-desks/" +
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
      <div className="title office-desk-title">辦公桌</div>
      <div className="items office-desk-items">{loadImage}</div>
    </React.Fragment>
  );
}

export { Deskseries, ExecutiveDesk, MeetingDesk, OfficeDesk };
