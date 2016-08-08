import React from "react";

const Note = (props) => {
  return (
    <div className="note">
      <span>
        <button className="btn btn-primary glyphicon glyphicon-pencil"/>
        <button className="btn btn-danger glyphicon glyphicon-trash"/>
      </span>
    </div>
  );
};

export default Note;