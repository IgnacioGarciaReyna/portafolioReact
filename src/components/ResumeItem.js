import React from "react";

const ResumeItem = ({ item }) => {
  return (
    <div className="resume-item">
      <h4>{item.title}</h4>
      <p>{item.subtitle}</p>
      <p>{item.duration}</p>
    </div>
  );
};

export default ResumeItem;
