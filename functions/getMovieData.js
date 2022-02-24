const axios = require('axios')

exports.handler = async function (event) {
  console.log('실행됨')
  console.log(event)
  const params = JSON.parse(event.body)
  const {keyword} = params
  const url = `https://www.omdbapi.com?apikey=${process.env.API_KEY}&s=$${keyword}`
  const res = await axios.get(url)
  return {
    statusCode: 200,
    body: JSON.stringify(res.data)
  }
}