import React from "react";
import { shallow, mount } from "enzyme";
import sinon from "sinon";
import request from "superagent";
import NewsActions from "../../app/actions/NewsActions";
import AppDispatcher from "../../app/dispatcher/AppDispatcher";
import NewsConstants from "../../app/constants/NewsConstants";

jest.dontMock("../../app/actions/NewsActions");

let getNewsSources;
describe("Get Sources from api", () => {
  beforeEach(() => {
    getNewsSources = sinon.spy();
    let stubRequest = {
      set: function() {
        return this;
      },
      query: function() {
        return this;
      },
      end: function() {
        return this;
      }
    };
    sinon.stub(request, "get").returns(stubRequest);
    getNewsSources = sinon.stub(stubRequest, "end");
  });
  afterEach(() => {
    getNewsSources.restore();
  });

  it("calls the success callback", () => {
    getNewsSources();
    expect(getNewsSources.callCount).toEqual(1);
  });
});
