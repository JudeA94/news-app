/**
 * @jest-environment jsdom
 */

const NewsView = require('./newsView')
const fs = require('fs');
const { callbackify } = require('util');
const { default: JSDOMEnvironment } = require('jest-environment-jsdom');


describe('NewsView', () => {
  it('Interacts with the api, stores in the model and sends to view to be displayed', () => {
    const html = fs.readFileSync('./index.html');
    document.body.innerHTML = html;
    const mockClient = {
      getNewsData: (search, callBack) => {
        const data = { response: {results: [{fields: {thumbnail: 'image source'}, webTitle: 'web title', webUrl: 'web url'}]}};
        callBack(data);
      }
    }
    const mockModel = {
      setNewsData: jest.fn(),
      getNewsData: () => {
        return {response: {results: [{fields: {thumbnail: 'image source'}, webTitle: 'web title', webUrl: 'web url'}]}}
      }
    };
    const view = new NewsView(mockModel,mockClient);
    view.display()
    expect(mockModel.setNewsData).toHaveBeenCalledWith({ response: {results: [{fields: {thumbnail: 'image source'}, webTitle: 'web title', webUrl: 'web url'}]}})
  })
})