/* eslint-disable no-unused-expressions */
import NewsStore from '../../app/stores/NewsStore';
import NewsConstants from '../../app/constants/NewsConstants';
import AppDispatcher from '../../app/dispatcher/AppDispatcher';

jest.dontMock('../../app/dispatcher/AppDispatcher');
jest.dontMock('../../app/stores/NewsStore');

describe('News store', () => {
  it('should exists', () => {
    expect(NewsStore).toExist;
  });

  it('it should initialize with no data', () => {
    const noData = NewsStore.getAll();
    expect(noData).tobeNull;
  });

  it('should have a get All function', () => {
    expect(typeof NewsStore.getAll).toBe('function');
  });

  test('check if there is a change listener method',
  () =>
    expect(NewsStore.addChangeListener).toExist);

  test('check if there is a remove change listener method',
  () =>
    expect(NewsStore.removeChangeListener).toExist);

  describe('change listener functions', () => {
    const callback = () => 'news';
    NewsStore.addChangeListener(callback);
    NewsStore.removeChangeListener(callback);
    expect(NewsStore.on).toExist;
  });
});

describe('News store', () => {
  const mockNewsApiResponse = {
    status: 'ok',
    source: 'cnn',
    sortBy: 'top',
    articles: [
      {
        author: 'Jeremy Diamond and Laura Jarrett, CNN',
        description: 'The Justice Department on Wednesday appointed officials.',
        publishedAt: '2017-05-18T03:58:22Z',
        title: 'Special counsel appointed in Russia probe',
        url: 'http://www.cnn.com/2017/05/17/bert-mueller/index.html',
        urlToImage: 'http://i2.cdn.cnn.com/cner-01-super-tease.jpg'
      },

      {
        author: 'Jeremy Herb, CNN',
        description: 'House Majority Leader Kevin McCart Russian President.',
        publishedAt: '2017-05-18T01:04:10Z',
        title: 'McCarthy: Putin comment was bad joke',
        url: 'http://www.cnn.com/2017/05/17/pol-putin-joke/index.html',
        urlToImage: 'http://i2.cdn.cnn.ctrump-0504-super-tease.jpg'
      }
    ]
  };

  it('should receive some fetched sources from Dispatcher', () => {
    AppDispatcher.dispatch({
      actionType: NewsConstants.GET_NEWS_ARTICLE,
      response: mockNewsApiResponse,
    });
    const actual = NewsStore.getAll()[0];
    const expected = mockNewsApiResponse.articles;
    expect(actual).toEqual(expected);
  });
});
