const axios = require('axios')

exports.handler = async function (event) {
  const {queryStringParameters} = event
  const { keyword } = queryStringParameters
  const url = `https://www.omdbapi.com?apikey=${process.env.API_KEY}&s=$${keyword}`
  const res = await axios.get(url)
  console.log(res)
  return {
    statusCode: 200,
    body: JSON.stringify(res.data)
  }
}