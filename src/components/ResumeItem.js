import React from "react";

const ResumeItem = ({ item }) => {
  return (
    <div className="resume-item">
      <p className="item-duration">{item.duration.en}</p>
      <h4 className="item-title">{item.title.en}</h4>
      <p className="item-subtitle">{item.subtitle}</p>
      {item.lines !== ""
        ? item.lines.en.map((line) => <p className="item-text">· {line}</p>)
        : null}
      {item.reference.text ? (
        <a className="item-text" target="_blank" href={item.reference.link}>
          {item.reference.text.en}
        </a>
      ) : null}
    </div>
  );
};

export default ResumeItem;
