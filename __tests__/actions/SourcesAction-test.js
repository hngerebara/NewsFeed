import sinon from 'sinon';
import mocksuperagent from '../../__mocks__/superagent';
import NewsActions from '../../app/actions/NewsActions';
import AppDispatcher from '../../app/dispatcher/AppDispatcher';
import NewsConstants from '../../app/constants/NewsConstants';


describe('Get Sources from api', () => {
  let getNewsSources;
  beforeEach(() => {
    jest.mock('superagent', () => mocksuperagent);
    getNewsSources = sinon.spy();
  });

  it('calls the success callback', () => {
    getNewsSources();
    expect(getNewsSources.callCount).toEqual(1);
  });
});


describe('Dispatcher for sources', () => {
  let dispatchSpy;

  beforeEach(() => {
    jest.mock('superagent', () => mocksuperagent);
    dispatchSpy = sinon.spy(AppDispatcher, 'dispatch');
  });

  it('should dispatch news sources', () => {
    NewsActions.getNewsSources('cnn', 'top');
    expect(dispatchSpy.called).toEqual(true);
    const [{ actionType }] = dispatchSpy.getCall(0).args;
    expect(actionType).toEqual(NewsConstants.GET_NEWS_SOURCES);
  });
});
