import React from "react";
import { Link } from "react-router-dom";

function AddButton() {
  return (
    <React.Fragment>
      <Link to="/add">
        <button type="button" className="btn btn-success btn-sm mr-0">
          <i className="fa fa-plus mr-2" aria-hidden="true"></i>新增產品
        </button>
      </Link>
    </React.Fragment>
  );
}

export default AddButton;
