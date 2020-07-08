import React from "react";
import axios from "axios";

class DeleteButton extends React.Component {
  render() {
    return (
      <React.Fragment>
        <button
          type="button"
          className="btn btn-danger btn-sm"
          onClick={this.props.handleDelete}
        >
          <i className="fa fa-trash-o" aria-hidden="true"></i>
        </button>
      </React.Fragment>
    );
  }
}

export default DeleteButton;
