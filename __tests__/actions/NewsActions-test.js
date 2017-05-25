import sinon from 'sinon';
import mocksuperagent from '../../__mocks__/superagent';
import NewsActions from '../../app/actions/NewsActions';
import AppDispatcher from '../../app/dispatcher/AppDispatcher';
import NewsConstants from '../../app/constants/NewsConstants';


describe('Get Articles from api', () => {
  let getNewsArticles;

  beforeEach(() => {
    jest.mock('superagent', () => mocksuperagent);
    getNewsArticles = sinon.spy();
  });

  it('calls the success callback', () => {
    getNewsArticles('cnn', 'top');
    expect(getNewsArticles.callCount).toEqual(1);
  });
});

describe('Get Articles from api', () => {
  let dispatchSpy;

  beforeEach(() => {
    jest.mock('superagent', () => mocksuperagent);
    dispatchSpy = sinon.spy(AppDispatcher, 'dispatch');
  });

  it('should dispatch news article', () => {
    NewsActions.getNewsArticles('cnn', 'top');
    expect(dispatchSpy.called).toEqual(true);
    const [{ actionType }] = dispatchSpy.getCall(0).args;
    expect(actionType).toEqual(NewsConstants.GET_NEWS_ARTICLE);
  });
});
