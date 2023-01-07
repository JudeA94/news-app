/**
 * @jest-environment jsdom
 */

const NewsView = require('./newsView')
const fs = require('fs');
const { callbackify } = require('util');
const { default: JSDOMEnvironment } = require('jest-environment-jsdom');
const { waitForDebugger } = require('inspector');


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


  it('has a search feature', () => {
    const html = fs.readFileSync('./index.html');
    document.body.innerHTML = html;
    const mockClient = {
      getNewsData: (search, callBack) => {
        expect(search).toEqual('sport')
        const data = { response: {results: [{fields: {thumbnail: 'sports image source'}, webTitle: 'sports web title', webUrl: 'sports web url'}]}};
        callBack(data);
      }
    }
    const mockModel = {
      setNewsData: jest.fn(),
      getNewsData: () => {
        return {response: {results: [{fields: {thumbnail: 'sports image source'}, webTitle: 'sports web title', webUrl: 'sports web url'}]}}
      }
    };
    const view = new NewsView(mockModel,mockClient);
    const inputEl = document.querySelector("#search-query");
    inputEl.value = "sport";
    const buttonEl = document.querySelector("#search");
    buttonEl.click();
    expect(mockModel.setNewsData).toHaveBeenCalledWith({ response: {results: [{fields: {thumbnail: 'sports image source'}, webTitle: 'sports web title', webUrl: 'sports web url'}]}})
  });

 
 
})
