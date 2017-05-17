import sinon from 'sinon';
import request from 'superagent';

jest.dontMock('../../app/actions/NewsActions');

describe('Get Articles from api', () => {
  let getNewsArticles;

  beforeEach(() => {
    getNewsArticles = sinon.spy();
    const stubRequest = {
      set() {
        return this;
      },
      query() {
        return this;
      },
      end() {
        return this;
      }
    };
    sinon
      .stub(request, 'get')
      .returns(stubRequest);
    getNewsArticles = sinon.stub(stubRequest, 'end');
  });

  it('calls the success callback', () => {
    getNewsArticles('cnn', 'top');
    expect(getNewsArticles.callCount).toEqual(1);
  });
});
