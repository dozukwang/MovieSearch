const axios = require('axios')

exports.handler = async function (event) {
  const {httpMethod, queryStringPrarameters} = event
  if (httpMethod === 'GET') {
    const {title} = queryStringPrarameters
    const url = `https://www.omdbapi.com?apikey=${process.env.API_KEY}&s=$${title}`
    const res = await axios.get(url)
    return res
  }
}