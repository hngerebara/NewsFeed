  import React from 'react';
import { shallow, mount } from 'enzyme';
import Articles from '../../../app/components/Sources';

jest.dontMock('../../../app/components/Sources');

describe("Displaying Sources and Articles", () => {
  test('Articles renders inside this component', () => {
  const sourceName = { sourceName: 'CNN' };
  const sourceId = { sourceId: 'cnn' }
  const sortParams ={ sortParams: 'Top' }
  const wrapper = mount(
    <Articles sourceName={sourceName} sourceId={sourceId} sortParams={sortParams} />
  );
});
});

