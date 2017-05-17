/* eslint-disable no-unused-expressions */
import SourceStore from '../../app/stores/SourceStore';

jest.dontMock('../../app/dispatcher/AppDispatcher');
jest.dontMock('../../app/stores/SourceStore');

describe('Sources component', () => {
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

  describe('change listener functions', () => {
    const callback = () => 'news';

    SourceStore.addChangeListener(callback);
    SourceStore.removeChangeListener(callback);
    expect(SourceStore.on).toExist;
  });
});
describe('source store', () => {
  it('it should initialize with no data', () => {
    const noData = SourceStore.getAll();
    expect(noData).tobeNull;
  });
});
