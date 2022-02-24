const url = `https://www.omdbapi.com?apikey=${process.env.API_KEY}&s=$`
export async function fetchMovie(title) {
    const res = await fetch(`${url}${title}`);
    const data = res.json();
    return data;
}