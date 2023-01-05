class NewsView {
  constructor(model, client) {
    this.model = model;
    this.client = client;
    this.mainContainerEl = document.querySelector('#main-container');
    const searchForm = document.querySelector('.search-bar');
    searchForm.addEventListener('submit', (event) => {
      event.preventDefault();
      const search = document.querySelector('#search-query').value
      this.display(search);
    });
  }

  display(search) {
    this.clearPage()
    console.log(search)
    this.client.getNewsData(search, (data) => this.model.setNewsData(data)).then((result) => {
      this.createElements();
    });
  }

  createElements() {
    const data = this.model.getNewsData()
    data.response.results.forEach((newsData) => {
      const newsEl = document.createElement('div')
      newsEl.id = 'items'
      const newsP = document.createElement('p')
      const urlA = document.createElement('a')
      const img = document.createElement('img')
      img.src = newsData.fields.thumbnail
      newsP.innerText = newsData.webTitle
      urlA.href = newsData.webUrl
      urlA.innerText = 'View this article'
      newsEl.append(img,newsP,urlA)
      this.mainContainerEl.append(newsEl)
    })
  }

  clearPage() {
    const newsEls = this.mainContainerEl.querySelectorAll('#items')
    newsEls.forEach(newsEl => newsEl.remove())
  }
}

module.exports = NewsView;
