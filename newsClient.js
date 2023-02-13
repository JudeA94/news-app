const apiKey = process.env.API_KEY;

class NewsClient {
  getNewsData(search='', callback) {
    const url = `https://content.guardianapis.com/search?q=${search}&query-fields=headline&show-fields=thumbnail,headline,byline,standfirst&order-by=newest&api-key=${apiKey}`;
    return fetch(url)
      .then((response) => response.json())
      .then((data) => callback(data));
  }
}

module.exports = NewsClient;
