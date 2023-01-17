import React from "react";

const ResumeItem = ({ item }) => {
  return (
    <div className="resume-item">
      <p className="item-duration">{item.duration}</p>
      <h4 className="item-title">
        <span className="green-span">{item.title}</span>{" "}
      </h4>
      <p className="item-subtitle">{item.subtitle}</p>
      {item.text !== "" ? <p className="item-text">{item.text}</p> : null}
    </div>
  );
};

export default ResumeItem;
