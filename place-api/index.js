import axios from 'axios'

export const placeApi = apiKey => {
  //console.log('Place API')
  const places = []

  const callPlaceApi = (query, token = '') => {
    return axios({
      method: 'get',
      url: 'https://maps.googleapis.com/maps/api/place/textsearch/json',
      params: {
        key: apiKey,
        query,
        pagetoken: token
      }
    })
  }

  const searchAllPlaces = (query, token = '') => {
    if (places.length < 100) {
      callPlaceApi(query, token)
        .then(res => {
          const { results, next_page_token } = res.data
          if (results) {
            console.log(places.length)
            for (let i in results) {
              const place = results[i]
              places.push(place.name)
            }
          }
          if (next_page_token) {
            setTimeout(() => {
              searchAllPlaces(query, next_page_token)
            }, 3000)
          } else {
            console.log(places)
          }
        })
        .catch(console.log)
    } else {
      console.log(places.length)
    }
  }

  searchAllPlaces('restaurants+in+Bangsue')
}
