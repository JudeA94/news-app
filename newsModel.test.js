const NewsModel = require('./newsModel')

describe('NewsModel', () => {
  it('initially has an empty News list', () => {
    const model = new NewsModel();
    expect(model.getNewsData()).toEqual(null);
  })
})