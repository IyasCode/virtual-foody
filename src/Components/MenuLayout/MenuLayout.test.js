import React from "react";

import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

import MenuLayout from "./MenuLayout";
import MenusOutput from "./MenusOutput/MenusOutput";

configure({ adapter: new Adapter() });

describe("<MenuLayout />", () => {
  it("should render all the compenent", () => {
    const wrapper = shallow(<MenuLayout />);
    expect(wrapper.find(MenusOutput));
  });
});
