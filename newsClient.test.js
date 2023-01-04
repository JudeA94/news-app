const NewsClient = require('./newsClient');

// This makes `fetch` available to our test
// (it is not by default, as normally `fetch` is only
// available within the browser)
require('jest-fetch-mock').enableMocks()

describe('NewsClient class', () => {
  it('calls fetch and loads news data', (done) => {
    const client = new NewsClient();
    fetch.mockResponseOnce(JSON.stringify({
      headline: 'News',
      description: 'Good news'
    }));

    client.getNewsData('news url', (newsData) => {
      expect(newsData.headline).toBe('News');
      expect(newsData.description).toBe('Good news');
      done();
    });
  });
});