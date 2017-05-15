import React from "react";
import { shallow, mount } from "enzyme";
import Articles from "../../app/components/Articles";
import ArticleItem from "../../app/components/ArticleItems";

jest.dontMock("../../app/components/ArticleItems");

describe("Displaying Articles", () => {
  const index = { sourceName: "cnn" };
  const item = {
    title: "donal trump",
    desciption: "he won the election",
    publishedate: "2017-05-01"
  };
  const wrapper = shallow(
    <ArticleItem key={[index]} index={index} item={item} />
  );
  it("renders 1 <ArticleItem/> component", () => {
    expect(
      wrapper.containsAnyMatchingElements([
        <h4>{item.description}</h4>,
        <h5>Published: {item.publisheddate}</h5>
      ])
    ).toBeDefined();
  });

  it("Articles component to have 1 articles tag", () => {
    expect(wrapper.find("article")).toHaveLength(1);
  });
  it("articles component to have 4label tags", () => {
    expect(wrapper.find("div")).toHaveLength(4);
  });
});