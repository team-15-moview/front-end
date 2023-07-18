import BannerSlider from "../components/home/BannerSlider";
import MovieSlider from "../components/home/MovieSlider";
import { MovieSliderWarpper } from "../components/home/homeStyle";

function Home() {
  return (
    <>
      <BannerSlider />
      <MovieSliderWarpper>
        <MovieSlider genre='애니메이션'>애니메이션</MovieSlider>
        <MovieSlider  genre='액션'>액션 영화</MovieSlider>
        <MovieSlider genre='범죄'>범죄 영화</MovieSlider>
      </MovieSliderWarpper>
    </>
  );
}

export default Home;
