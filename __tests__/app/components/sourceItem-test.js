import React from "react";
import { shallow, mount } from "enzyme";
import Sources from "../../../app/components/Sources";
import SourcesItem from "../../../app/components/SourceItems";

describe("SourceItem Component", () => {
  it("Component should render as expected", () => {
    const wrapper = shallow(<SourcesItem />);
    expect(wrapper.find("option")).toHaveLength(1);
  });
});
