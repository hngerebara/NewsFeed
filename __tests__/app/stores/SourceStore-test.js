import React from "react";
import { shallow } from "enzyme";
import sinon from "sinon";
import NewsActions from "../../../app/actions/NewsActions";
import Sources from "../../../app/components/Sources";
import SourceStore from "../../../app/stores/SourceStore";
import NewsConstants from "../../../app/constants/NewsConstants";
import AppDispatcher from "../../../app/dispatcher/AppDispatcher";

jest.dontMock("../../../app/dispatcher/AppDispatcher");
jest.dontMock("../../../app/stores/SourceStore");

describe("Sources component", () => {
  const SourceList = [
    { id: "abc-news-au", name: "ABC News (AU)" },
    { id: "yahoo", name: "Yahoo news" },
  ];

  test("check if there is a change listener method", () => {
    expect(SourceStore.addChangeListener).toExist;
  });
  test("check if there is a remove change listener method", () => {
    expect(SourceStore.removeChangeListener).toExist;
  });
  test("check if there is a Click listener method", () => {
    expect(SourceStore.removeClickListener).toExist;
  });
  test("check if there is a CLick listener method", () => {
    expect(SourceStore.addClickListener).toExist;
  });

  describe("change listener functions", () => {
    let onChange;
    let removeChange;
    let callback = () => {
      return "news";
    };

    SourceStore.addChangeListener(callback);
    SourceStore.removeChangeListener(callback);
    expect(SourceStore.on).toExist;
  });
});
describe("source store", () => {
  it("it should initialize with no data", () => {
    const noData = SourceStore.getAll();
    expect(noData).tobeNull;
  });
});
