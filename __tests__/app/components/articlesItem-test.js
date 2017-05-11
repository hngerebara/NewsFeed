import React from "react";
import { shallow, mount } from "enzyme";
import Articles from "../../../app/components/Articles";
import ArticleItem from "../../../app/components/ArticleItems";

jest.dontMock("../../../app/components/Articles");

describe("Displaying Articles", () => {
  it("renders 1 <ArticleItem /> component", () => {
    const index = { sourceName: "cnn" };
    const item = { sourceId: "cnn" };
    const articlesComponent = mount(
      <ArticleItem key={index} index={index} item={item} />);
  });
});
