import BannerSlider from "../components/home/BannerSlider";
import MovieSlider from "../components/home/MovieSlider";
import { MovieSliderWarpper } from "../components/home/homeStyle";

function Home() {
  return (
    <>
      <BannerSlider />
      <MovieSliderWarpper>
        <MovieSlider key={1} genre='애니메이션'>7월에 개봉한 영화</MovieSlider>
        <MovieSlider key={2} genre='공포'>액션 영화</MovieSlider>
        <MovieSlider key={3}>공포 영화</MovieSlider>
      </MovieSliderWarpper>
    </>
  );
}

export default Home;
