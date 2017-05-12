import React from "react";
import { shallow } from "enzyme";
import sinon from "sinon";
import NewsActions from "../../../app/actions/NewsActions";
import Articles from "../../../app/components/Articles";
import NewsStore from "../../../app/stores/NewsStore";
import NewsConstants from "../../../app/constants/NewsConstants";
import AppDispatcher from "../../../app/dispatcher/AppDispatcher";

jest.dontMock("../../../app/dispatcher/AppDispatcher");
jest.dontMock("../../../app/stores/NewsStore");

describe("Sources component", () => {
  test("check if there is a change listener method", () => {
    expect(NewsStore.addChangeListener).toExist;
  });
  test("check if there is a remove change listener method", () => {
    expect(NewsStore.removeChangeListener).toExist;
  });

  describe("change listener functions", () => {
    let callback = () => {
      return "news";
    };

    NewsStore.addChangeListener(callback);
    NewsStore.removeChangeListener(callback);
    expect(NewsStore.on).toExist;
  });
});
describe("News store", () => {
  it("it should initialize with no data", () => {
    const noData = NewsStore.getAll();
    expect(noData).tobeNull;
  });
});
