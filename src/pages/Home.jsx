import HomeBanner from "../components/home/HomeBanner";
import { LayoutMargin } from "../styles/common";

function Home() {
  return (
    <LayoutMargin>
      <HomeBanner />
      <main>메인공간</main>
    </LayoutMargin>
  );
}

export default Home;
