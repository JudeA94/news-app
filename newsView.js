class NewsView {
  constructor(model, client) {
    this.model = model;
    this.client = client;
    this.mainContainerEl = document.querySelector('#main-container');  
  }

  display() {
    this.client.getNewsData((data) => this.model.setNewsData(data)).then((result) => {
      this.createElements()})
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
    }

    
    )
  }
}

module.exports = NewsView;


// {"response":
//   {"status":"ok","userTier":"developer","total":1,"content":
//     {"id":"books/2023/jan/03/sugar-street-by-jonathan-dee-review-on-the-run-and-off-the-grid","type":"article","sectionId":"books","sectionName":"Books","webPublicationDate":"2023-01-03T07:00:37Z","webTitle":"Sugar Street by Jonathan Dee review – on the run and off the grid","webUrl":"https://www.theguardian.com/books/2023/jan/03/sugar-street-by-jonathan-dee-review-on-the-run-and-off-the-grid","apiUrl":"https://content.guardianapis.com/books/2023/jan/03/sugar-street-by-jonathan-dee-review-on-the-run-and-off-the-grid","isHosted":false,"pillarId":"pillar/arts","pillarName":"Arts"}}}


//     .response.content.webTitle