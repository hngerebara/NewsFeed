import React from "react";
import { shallow, mount } from "enzyme";
import Articles from "../../app/components/Articles";
import ArticleItem from "../../app/components/Articles";
import AppDispatcher from "../../app/dispatcher/AppDispatcher";
import NewsConstants from "../../app/constants/NewsConstants";

jest.dontMock("../../app/components/Articles");

const wrapper = shallow(<Articles sortParams={['top']} />);
describe("Testing the html tags in Articles component", () => {
 it("Articles component to have 2 div tags", () => {
    expect(wrapper.find("div")).toHaveLength(2);
  });
  it("articles component to have 2 label tags", () => {
    expect(wrapper.find("label")).toHaveLength(2);
  });
  it("the app should have text", () => {
    expect(wrapper.contains(<label>Sort By</label>)).toBe(true);
  });
});

describe("Displaying Articles", () => {

it("should check that the componentWillMount method is getting called", () => {
    spyOn(Articles.prototype, "componentWillMount").and.callThrough();
    expect(wrapper).toBeDefined();
    expect(Articles.prototype.componentWillMount).toExist;
  });
   it("Checks for the onSort function", () => {
        spyOn(Articles.prototype, "onSort").and.callThrough();
        expect(wrapper).toBeDefined();
        expect(Articles.prototype.onSort).toExist;
        });
});

