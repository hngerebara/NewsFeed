/* eslint-disable no-unused-expressions */
import NewsStore from '../../app/stores/NewsStore';

jest.dontMock('../../app/dispatcher/AppDispatcher');
jest.dontMock('../../app/stores/NewsStore');

describe('Sources component', () => {
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
  it('it should initialize with no data', () => {
    const noData = NewsStore.getAll();
    expect(noData).tobeNull;
  });
});
