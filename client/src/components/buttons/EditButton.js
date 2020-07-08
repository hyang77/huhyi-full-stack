import React from "react";
import {Link} from 'react-router-dom'

function EditButton(props) {
  return (
    <Link to="/edit">
      <button
        type="button"
        className="btn btn-info btn-sm mr-2"
        onClick={props.handleUpdate}
      >
        <i className="fa fa-pencil" aria-hidden="true"></i>
      </button>
    </Link>
  );
}

export default EditButton;
