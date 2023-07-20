import UserStar from "./UserStar";
import { MovieInfoContainer, PosterBox, PubInfoContainer, TextInfo, TextInfoContainer, TitleBox } from "./movieStyle";

function MovieInfo({movie_id, title, open_date, director, genre, thumbnail, rate, star, review_id}) {
  return (
    <MovieInfoContainer>
      <PosterBox src={thumbnail} loading="lazy"/>
      <TextInfoContainer>
        <TitleBox>{title}</TitleBox>
        <PubInfoContainer>
          <TextInfo>
            <div>{open_date}</div>
            <div>{genre}</div>
            <div>{director}</div>
          </TextInfo>
          <UserStar max={5} userStar={star} title={title} movie_id={movie_id} review_id={review_id}/>
        </PubInfoContainer>
      </TextInfoContainer>
    </MovieInfoContainer>
  )
}

export default MovieInfo