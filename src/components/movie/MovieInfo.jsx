import { MovieInfoContainer, PosterBox, PubInfoContainer, TextInfo, TextInfoContainer, TitleBox } from "./style";

function MovieInfo({movie_id, title, open_date, director, genre, thumbnail, rate, star}) {
  return (
    <MovieInfoContainer>
      <PosterBox src={thumbnail}/>
      <TextInfoContainer>
        <TitleBox>{title}</TitleBox>
        <PubInfoContainer>
          <TextInfo>
            <div>{open_date}</div>
            <div>{genre}</div>
            <div>{director}</div>
          </TextInfo>
  
        </PubInfoContainer>
      </TextInfoContainer>
    </MovieInfoContainer>
  )
}

export default MovieInfo