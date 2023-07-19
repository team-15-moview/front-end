import { ReactComponent as EmptyStar } from "../assets/icons/stars/emptyStar.svg";
import { ReactComponent as HalfStar } from "../assets/icons/stars/halfStar.svg";
import { ReactComponent as FillStar } from "../assets/icons/stars/fillStar.svg";

export const renderStars = (rate) => {
  const movieRate = +rate * 2;
  const stars = [];
  const totalStars = 5;

  const filledStars = Math.floor(movieRate);
  const hasHalfStar = movieRate % 1 !== 0;

  for (let i = 0; i < totalStars; i++) {
    if (i < filledStars) {
      // 채워진 별
      stars.push(<FillStar key={i} fill="yellow" />);
    } else if (i === filledStars && hasHalfStar) {
      // 반 채워진 별
      stars.push(<HalfStar key={i} fill="yellow" />);
    } else {
      // 빈 별
      stars.push(<EmptyStar key={i} fill="yellow" />);
    }
  }

  return stars;
};
