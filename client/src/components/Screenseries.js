import React from "react";

function Screenseries() {
  const screenList = ["ty0023","ty0026","ty0030","ty0045","ty0048"]
  const loadImage = screenList.map((name) => {
    return (
      <div>
        <img
          key={name}
          src={require("../assets/images/screens/" + name + ".jpg")}
          alt={name}
        />
        <p>{name}</p>
      </div>
    );
  });
  return (
    <React.Fragment>
      <div className="title screen-title">屏風</div>
      <div className="items screen-items">
        {loadImage}
      </div>
  </React.Fragment>
  );
}

export default Screenseries;
