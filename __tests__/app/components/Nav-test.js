import React from "react";
import { shallow, mount } from "enzyme";
import NavBar from "../../../app/components/Header/Nav";

describe("Navigation component", () => {
  const wrapper = shallow(<NavBar />);
  it("it should render div elements", () => {
    expect(wrapper.find("NavBar")).toExist;
  });
  it("it should have a logout button", () => {
    expect(wrapper.find("button")).toExist;
  });
  it("it should have the home link ", () => {
    expect(wrapper.find("li")).toExist;
  });
  it("it should have 2 div tags ", () => {
    expect(wrapper.find("div")).toHaveLength(3);
  });
});
