import './scss/main.scss'
import { activeControl } from './utils/liClickCheck'

const keyword = document.querySelector('.keyword')
const doSearch = document.querySelector('.searchBtn')
const posterImage = document.querySelector('.poster')
const movieTitle = document.querySelector('.title')
const ulEl = document.querySelector('ul')

const url = `https://www.omdbapi.com?apikey=${process.env.API_KEY}&s=$`
async function fetchMovie(title) {
    const res = await fetch(`${url}${title}`);
    const data = res.json();
    return data;
}

// 영화 타이틀 검색
doSearch.addEventListener('click', async event => {
  event.preventDefault()
  const prevList = document.querySelectorAll('.list')
  if (prevList) { 
    ulEl.textContent = ''    
    prevList.forEach(li => li.remove() )
  }
  
  let newKeyword = keyword.value
  const movieData = await fetchMovie(newKeyword);

  //검색된 영화 정보(포스터 및 제목) 출력
  if (movieData.Response === "True") {
    posterImage.src = `${movieData.Search[0].Poster.replace('300.jpg', '350.jpg')}`
    movieTitle.textContent = movieData.Search[0].Title

    //검색된 영화 목록들 출력
    movieData.Search.forEach((movie, index) => {
      const liEl = document.createElement('li')
      liEl.classList.add('list', index)
      liEl.innerHTML = `<b>${movie.Title}</b> (${movie.Year})<span class="index">${index + 1}</span>`
      if (index === 0) liEl.classList.add('active')
      ulEl.appendChild(liEl)

      // 영화 목록 클릭 시 영화 정보(포스터 및 제목) 교체
      liEl.addEventListener('click', () => {
        posterImage.src = `${movie.Poster.replace('300.jpg', '350.jpg')}`
        movieTitle.textContent = movie.Title
        liEl.classList.add('active')
        activeControl(liEl)
      })
    })
  
  } else if (movieData.Response === "False") {
    ulEl.textContent = "There's no moive"
    posterImage.src = ''
    movieTitle.textContent = 'MOVIE FINDER'
  }
})
