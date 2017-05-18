import sinon from 'sinon';
import request from 'superagent';

jest.dontMock('../../app/actions/NewsActions');

let getNewsSources;
describe('Get Sources from api', () => {
  beforeEach(() => {
    getNewsSources = sinon.spy();
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
    sinon.stub(request, 'get').returns(stubRequest);
    getNewsSources = sinon.stub(stubRequest, 'end');
  });
  afterEach(() => {
    getNewsSources.restore();
  });

  it('calls the success callback', () => {
    getNewsSources();
    expect(getNewsSources.callCount).toEqual(1);
  });
});
