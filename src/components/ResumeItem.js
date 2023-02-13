import React from "react";
import { CSSTransition, SwitchTransition } from "react-transition-group";

const ResumeItem = ({ item }) => {
  return (
    <div className="resume-item">
      <SwitchTransition>
        <CSSTransition
          classNames="fade"
          key={item.duration}
          addEndListener={(node, done) =>
            node.addEventListener("transitionend", done, false)
          }
        >
          <p className="item-duration">{item.duration}</p>
        </CSSTransition>
      </SwitchTransition>
      <SwitchTransition>
        <CSSTransition
          classNames="fade"
          key={item.title}
          addEndListener={(node, done) =>
            node.addEventListener("transitionend", done, false)
          }
        >
          <h4 className="item-title">{item.title}</h4>
        </CSSTransition>
      </SwitchTransition>

      <SwitchTransition>
        <CSSTransition
          classNames="fade"
          key={item.subtitle}
          addEndListener={(node, done) =>
            node.addEventListener("transitionend", done, false)
          }
        >
          <p className="item-subtitle">{item.subtitle}</p>
        </CSSTransition>
      </SwitchTransition>

      {item.lines !== ""
        ? item.lines.map((line) => (
            <SwitchTransition>
              <CSSTransition
                classNames="fade"
                key={item.lines}
                addEndListener={(node, done) =>
                  node.addEventListener("transitionend", done, false)
                }
              >
                <p className="item-text">· {line}</p>
              </CSSTransition>
            </SwitchTransition>
          ))
        : null}
      {item.reference.text ? (
        <SwitchTransition>
          <CSSTransition
            classNames="fade"
            key={item.reference.text}
            addEndListener={(node, done) =>
              node.addEventListener("transitionend", done, false)
            }
          >
            <a className="item-text" target="_blank" href={item.reference.link}>
              {item.reference.text}
            </a>
          </CSSTransition>
        </SwitchTransition>
      ) : null}
    </div>
  );
};

export default ResumeItem;
