import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import MenuOutput from "./MenuOutput";

configure({ adapter: new Adapter() });

describe("<MenusOutput />", () => {
  it("should render <MenuOutput /> with data from props.choiceOfMenu", () => {
    const wrapper = shallow(<MenuOutput />);
    expect(wrapper);
  });
});
