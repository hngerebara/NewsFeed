import React from "react";
import { shallow, mount } from "enzyme";
import Sources from "../../../app/components/Sources";
import SourceItem from "../../../app/components/SourceItems";
import Articles from "../../../app/components/Sources";
import AppDispatcher from "../../../app/dispatcher/AppDispatcher";
import NewsConstants from "../../../app/constants/NewsConstants";

jest.dontMock("../../../app/components/Sources");

describe("Displaying Sources and Articles", () => {
  const sourceName = { sourceName: "CNN" };
  const sourceId = { sourceId: "cnn" };
  const sortParams = { sortParams: "Top" };

  const source = [
    { id: "abc-news-au", name: "ABC News (AU)" },
    { id: "yahoo", name: "Yahoo news" }
  ];

  test("Sources renders inside this component", () => {
    const wrapper = mount(
      <SourceItem sourceName={sourceName} sourceId={sourceId} />
    );
  });

  test("Articles renders inside this component", () => {
    const wrapper = mount(
      <Articles
        sourceName={sourceName}
        sourceId={sourceId}
        sortParams={sortParams}/>
    );
  });

  it("the app should have text", () => {
    const app = shallow(<Sources />);
    expect(app.contains(<h5>Please select News Source </h5>)).toBe(true);
  });

  it("should render children when passed in", () => {
    const wrapper = shallow(<Sources><div className="col-lg-12" /></Sources>);
    expect(wrapper.contains(<div className="col-lg-12" />)).toEqual(false);
  });

  it("Source component to have 4 div tags", () => {
    const wrapper = shallow(<Sources />);
    expect(wrapper.find("div")).toHaveLength(4);
  });

  it("it should recieve dispached data", () => {
    AppDispatcher.dispatch({
      actionType: NewsConstants.GET_NEWS_SOURCES,
      source
    });
  });

  it("should check that the componentDidMount method is getting called", () => {
    spyOn(Sources.prototype, "componentDidMount").and.callThrough();
    const wrapper = mount(<Sources />);
    expect(wrapper).toBeDefined();
    expect(Sources.prototype.componentDidMount).toHaveBeenCalledTimes(1);
  });

  it("calls `onload` function", () => {
    spyOn(Sources.prototype, "onLoad").and.callThrough();
    const wrapper = mount(<Sources />);
    expect(wrapper).toBeDefined();
    expect(Sources.prototype.onLoad).toExist;
  });
  it("calls onchange function when source is changed", () => {
    spyOn(Sources.prototype, "onChange").and.callThrough();
    const wrapper = mount(<Sources />);
    expect(wrapper).toBeDefined();
    expect(Sources.prototype.onChange).toExist;
  });
});
