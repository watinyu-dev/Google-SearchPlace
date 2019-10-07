const apiKey = 'AIzaSyAwsx49Zn89ylzKW3QDcltrM8tPzpEvxTc'

$(document).ready(() => {
  console.log('ready')

  searchPlace('restaurants+in+Bangsue')
})

const searchPlace = query => {
  console.log('search place')
  axios({
    method: 'get',
    url: 'https://maps.googleapis.com/maps/api/place/textsearch/json',
    params: {
      key: apiKey,
      query
    }
  })
    .then(console.log)
    .catch(console.log)
}
