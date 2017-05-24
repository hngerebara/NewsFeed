/* eslint-disable no-unused-expressions */
import SourceStore from '../../app/stores/SourceStore';
import AppDispatcher from '../../app/dispatcher/AppDispatcher';
import NewsConstants from '../../app/constants/NewsConstants';

jest.dontMock('../../app/dispatcher/AppDispatcher');
jest.dontMock('../../app/stores/SourceStore');

describe('Sources Store', () => {
  it('should exists', () => {
    expect(SourceStore).toExist;
  });

  it('should instantiate correctly', () => {
    expect(typeof SourceStore).toBe('object');
  });

  test('check if there is a change listener method',
  () =>
    expect(SourceStore.addChangeListener).toExist);

  test('check if there is a remove change listener method',
  () =>
    expect(SourceStore.removeChangeListener).toExist);

  test('check if there is a Click listener method',
  () =>
    expect(SourceStore.removeClickListener).toExist);

  test('check if there is a CLick listener method',
  () =>
    expect(SourceStore.addClickListener).toExist);
});


describe('change listener functions', () => {
  const callback = () => 'news';

  SourceStore.addChangeListener(callback);
  SourceStore.removeChangeListener(callback);
  expect(SourceStore.on).toExist;
});

describe('source store', () => {
  it('it should initialize with no data', () => {
    const noData = SourceStore.getAll();
    expect(noData).tobeNull;
  });
});

describe('Source store', () => {
  const sources = [
    {
      country: 'au',
      description: "Australia's most trusted source of local more.",
      id: 'abc-news-au',
      language: 'en,',
      name: 'ABC News (AU)',
      sortBysAvailable: ['top']
    },
  ];

  it('should receive some fetched sources from Dispatcher', () => {
    AppDispatcher.dispatch({
      actionType: NewsConstants.GET_NEWS_SOURCES,
      response: sources,
    });
    const actual = SourceStore.getAll()[0];
    const expected = sources;
    expect(actual).toEqual(expected);
  });
});
