const sources = [
  {
    country: 'au',
    description: "Australia's most trusted source of local more.",
    id: 'abc-news-au',
    language: 'en,',
    name: 'ABC News (AU)',
    sortBysAvailable: ['top']
  },
  ],
  mockNewsApiResponse = {
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

export { sources, mockNewsApiResponse };
