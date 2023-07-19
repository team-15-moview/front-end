import { useDispatch, useSelector } from "react-redux";
import { logout } from "../api/user";
import BannerSlider from "../components/home/BannerSlider";
import MovieSlider from "../components/home/MovieSlider";
import { MovieSliderWarpper } from "../components/home/homeStyle";
import { clearUserToken } from "../redux/modules/userTokenSlice";
import { useEffect } from "react";

function Home() {
  const dispatch = useDispatch();

  const hasToken = useSelector((state) => state.userToken);

  const handleLogout = async () => {
    try {
      await logout();
      dispatch(clearUserToken());
      alert("로그아웃되었습니다.");
      window.location.reload(); // 새로고침
    } catch (error) {
      console.error("로그아웃 에러:", error);
      // 에러 핸들링
      alert("로그아웃에 실패했습니다. 다시 시도해주세요.");
    }
  };

  useEffect(() => {
    console.log("현재 token 유무:", hasToken);
  }, [hasToken]);

  return (
    <>
      <BannerSlider />
      <button onClick={handleLogout}>로그아웃</button>
      <MovieSliderWarpper>
        <MovieSlider genre="애니메이션">애니메이션</MovieSlider>
        <MovieSlider genre="액션">액션 영화</MovieSlider>
        <MovieSlider genre="범죄">범죄 영화</MovieSlider>
      </MovieSliderWarpper>
    </>
  );
}

export default Home;
