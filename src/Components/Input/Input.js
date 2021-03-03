import React from "react";

import * as inputTypes from "./InputTypes/InputTypes";

const input = (props) => {
  let type = null;
  if (props.as) {
    switch (props.as) {
      case inputTypes.number:
        type = (
          <input type={inputTypes.number} {...props}>
            {props.children}
          </input>
        );
        break;
      case inputTypes.text:
        type = (
          <input type={inputTypes.text} {...props}>
            {props.children}
          </input>
        );
        break;
      case inputTypes.textArea:
        type = <textarea {...props}>{props.children}</textarea>;
        break;
      case inputTypes.email:
        type = (
          <input type={inputTypes.email} {...props}>
            {props.children}
          </input>
        );
        break;
      case inputTypes.password:
        type = (
          <input type={inputTypes.password} {...props}>
            {props.children}
          </input>
        );
        break;
      case inputTypes.select:
        type = (
          <select {...props}>
            {props.option
              ? props.option.map((input) => {
                  return (
                    <option key={input} value={input}>
                      {input}
                    </option>
                  );
                })
              : null}
          </select>
        );
        break;
      default:
        break;
    }
  }

  return type;
};

export default input;
