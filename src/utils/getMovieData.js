const axios = require('axios')

const url = `https://www.omdbapi.com?apikey=${process.env.API_KEY}&s=$`
export async function fetchMovie(title) {
    const res = await axios.get(`${url}${title}`);
    const data = res.json();
    return data;
}