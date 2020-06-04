import React from "react";
class Search extends React.Component {
    constructor(props){
        super(props);
        this.state = {test: "desks/desk-meeting/"}
    }
  render() {
    const meetingDeskList = [
      "CONF-D-N",
      "E1860",
      "FCT",
      "MY-1860-1_w",
      "MY-1860-5_w",
      "nc180",
    ];

    const pattern = this.props.searchInput;
    const newPattern = new RegExp(pattern, "i");
    const filtername = meetingDeskList.filter((str) => newPattern.test(str));
    return (
      <React.Fragment>
        <div className="title" style={{ borderLeftColor: "transparent" }}>
          "{this.props.searchInput}" 搜尋結果
        </div>
        <div className="items">
          {filtername.map((filtername) => (
            <div>
              <img
                key={filtername}
                src={require(`../assets/images/${this.state.test}${filtername}.jpg`)}
                alt={filtername}
              />
              <p>{filtername}</p>
            </div>
          ))}
        </div>
      </React.Fragment>
    );
  }
}
export default Search;
