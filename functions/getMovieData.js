const axios = require('axios')

exports.handler = async function (event) {
  const {keyword} = event.queryStringParameters
  const url = `https://www.omdbapi.com?apikey=${process.env.API_KEY}&s=$${keyword}`
  const res = await axios.get(url)
  return {
    statusCode: 200,
    body: JSON.stringify(res.data)
  }
}