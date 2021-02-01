import NewsStore from '../../app/stores/NewsStore';
import NewsConstants from '../../app/constants/NewsConstants';
import AppDispatcher from '../../app/dispatcher/AppDispatcher';
import { mockNewsApiResponse } from '../../__mocks__/testData';

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
