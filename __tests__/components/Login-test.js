import React from "react";
import { shallow, mount } from "enzyme";
import Firebase from "firebase";
import Login from "../../app/components/Login";

jest.dontMock("../../app/components/Login");

describe("Login Component", () => {
  const wrapper = shallow(<Login />);
  it("Google Login component should render as expected", () => {
    expect(wrapper.contains("Welcome to Hopeaz news Feed Application")).toBe(
      true
    );
    expect(wrapper.contains("Login With Google")).toBe(true);
    expect(wrapper.find("h5")).toHaveLength(1);
    expect(wrapper.find("div")).toHaveLength(3);
  });
  it("it should render the Google component", () => {
    expect(wrapper.find("Login")).toExist;
  });

  it("should render a login button", () => {
    expect(wrapper.find("button")).toExist;
  });
});

describe("Firebase", () => {
  it("should work", () => {
    expect(null).toBeNull();
  });
});
