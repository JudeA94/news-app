const apiKey = require('./apiKey')


// const newsUrl = 'https://content.guardianapis.com/search?api-key=' + apiKey
const newsUrl =  "https://content.guardianapis.com/search?q=America&query-fields=headline&show-fields=thumbnail,headline,byline&order-by=newest&api-key=" + apiKey

class NewsClient {
  getNewsData(callback) {
    return fetch(newsUrl)
      .then(response => response.json())
      .then(data => {
        callback(data)
      });
  }
}

module.exports = NewsClient;