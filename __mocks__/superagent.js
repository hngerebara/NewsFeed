let mockDelay;
let mockError;
let mockResponse = {
  status() {
    return 200;
  },
  ok() {
    return true;
  },
  body: {
    sources: [{
      country: 'au',
      description: "Australia's most trusted source of local more.",
      id: 'abc-news-au',
      language: 'en,',
      name: 'ABC News (AU)',
      sortBysAvailable: ['top']
    }]
  },
  get: jest.genMockFunction(),
  toError: jest.genMockFunction()
};

const Request = {
  get() {
    return this;
  },
  send() {
    return this;
  },
  query() {
    return this;
  },
  set() {
    return this;
  },
  end: jest.genMockFunction().mockImplementation((callback) => {
    if (mockDelay) {
      this.delayTimer = setTimeout(callback, 0, mockError, mockResponse);
      return;
    }

    callback(mockError, mockResponse);
  }),
  __setMockDelay(boolValue) {
    mockDelay = boolValue;
  },
  __setMockResponse(mockRes) {
    mockResponse = mockRes;
  },
  __setMockError(mockErr) {
    mockError = mockErr;
  }
};

module.exports = Request;
