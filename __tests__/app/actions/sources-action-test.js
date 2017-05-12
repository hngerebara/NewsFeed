import React from 'react';
import { shallow, mount } from 'enzyme';
import sinon from 'sinon';
import request from "superagent";
import NewsActions from '../../../app/actions/NewsActions';

jest.dontMock('../../../app/actions/NewsActions');

describe('Get Sources from api', () => {
  let getNewsSources;

  beforeEach(() => {
    getNewsSources = sinon.spy();
    let stubRequest = {
       set: function() {return this},
       query: function() {return this},
       end: function() { return this},
    };
    sinon.stub(request, 'get').returns(stubRequest);
    getNewsSources = sinon.stub(stubRequest, 'end');
  });

  it('calls the success callback', () => {
    getNewsSources();
    expect(getNewsSources.callCount).toEqual(1);
  });
})

