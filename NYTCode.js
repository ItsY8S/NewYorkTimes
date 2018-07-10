// API key
const authKey = '667c11f5b3ba4e6cabb53f8ceab9e20d'

// Based on the queryTerm we will create a queryURL
const queryURLBase =
  'https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=' +
  authKey +
  '&q=sports'

function runQuery(queryURL) {
  $.ajax({ url: queryURL, method: 'GET' }).done(function(NYTData) {
    console.log('URL: ' + queryURL)
    console.log(NYTData)
  })
}

$('#runSearch').on('click', function() {
  runQuery(queryURL)
})
