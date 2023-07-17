import MovieInfo from "../components/movie/MovieInfo"
import Reviews from "../components/movie/Reviews"
import StillBackground from "../components/movie/StillBackground"
import { LayoutMargin } from "../styles/commonStyle"

function Movie() {
  const movie={
    "movie_id": 1,
    "title": "하울의 움직이는 성",
    "open_date": "2004",
    "director": "미야자키 하야오",
    "genre": "애니메이션",
    "thumbnail": "https://upload.wikimedia.org/wikipedia/ko/4/4a/%ED%95%98%EC%9A%B8%EC%9D%98_%EC%9B%80%EC%A7%81%EC%9D%B4%EB%8A%94_%EC%84%B1_%ED%8F%AC%EC%8A%A4%ED%84%B0.jpg",
    "still": 'https://file3.instiz.net/data/file3/2020/10/30/c/2/3/c23e9cee7f2d6a145b509bc94493a6f6.jpg',
    "rate": "9.35",
    "star": 10
  }

  return (
    <>
      <StillBackground src={movie.still}/>
      <LayoutMargin>
        <MovieInfo {...movie}/>
        <Reviews/>
      </LayoutMargin>
    </>
  )
}

export default Movie