import React from "react";

const ResumeItem = ({ item }) => {
  return (
    <div>
      <h3>{item.title}</h3>
      <p>{item.subtitle}</p>
      <p>{item.duration}</p>
    </div>
  );
};

export default ResumeItem;
