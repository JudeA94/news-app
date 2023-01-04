class NewsModel {
  constructor() {
    this.newsData = null
  }

  setNewsData(newsData) {
    this.newsData = newsData;
    return newsData;
  }

  getNewsData() {
    return this.newsData;
  }
}

module.exports = NewsModel;
