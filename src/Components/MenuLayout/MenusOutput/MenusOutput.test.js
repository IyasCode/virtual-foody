import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import MenusOutput from "./MenusOutput";
import MenuOutput from "./MenuOutput/MenuOutput";

// configure({ adapter: new Adapter() });

const setUp = (props = {}) => {
  return shallow(<MenusOutput choiceOfMenu />);
};

describe("<MenusOutput />", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("should render <MenuOutput /> with data from props.choiceOfMenu", () => {
    const wrapper = component.find(MenuOutput);
    expect(wrapper.length).toBe(0);
  });
});
