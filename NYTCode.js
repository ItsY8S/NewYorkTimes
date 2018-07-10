const apiKey = '667c11f5b3ba4e6cabb53f8ceab9e20d'

const queryURLBase =
  'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=' +
  apiKey +
  '&q='

function runQuery(queryURL) {
  $.ajax({ url: queryURL, method: 'GET' }).done(function(NYTData) {
    console.log('URL: ' + queryURL)
    console.log(NYTData)
  })
}
