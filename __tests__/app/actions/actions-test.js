import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import request from "superagent";
import NewsActions from '../../../app/actions/NewsActions';

jest.dontMock('../../../app/actions/NewsActions');

describe('Get Articles from api', () => {
  let getNewsArticles;

  beforeEach(() => {
    getNewsArticles = sinon.spy();
    let stubRequest = {
       set: function() {return this},
       query: function(source, sortBy) {return this},
       end: function() { return this},
    };
    sinon.stub(request, 'get').returns(stubRequest);
    getNewsArticles = sinon.stub(stubRequest, 'end');
  });

  it('calls the success callback', () => {
    getNewsArticles('cnn', 'top');
    expect(getNewsArticles.callCount).toEqual(1);
  });
})

