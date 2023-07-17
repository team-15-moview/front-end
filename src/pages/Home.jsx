import BannerSlider from "../components/home/BannerSlider";
import MovieSlider from "../components/home/MovieSlider";
import { MovieSliderWarpper } from "../components/home/homeStyle";

function Home() {
  return (
    <>
      <BannerSlider />
      <MovieSliderWarpper>
        <MovieSlider>7월에 개봉한 영화</MovieSlider>
        <MovieSlider>액션 영화</MovieSlider>
        <MovieSlider>공포 영화</MovieSlider>
      </MovieSliderWarpper>
    </>
  );
}

export default Home;
