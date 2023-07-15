import { Route, Routes } from "react-router-dom";
import PageLayout from "./layout/PageLayout";
import Movie from "./pages/Movie";
import Review from "./pages/Review";
import Home from "./pages/Home";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PageLayout />}>
        <Route path="" element={<Home />} />
        <Route path="movies/:id" element={<Movie />} />
        <Route path="reviews/:id" element={<Review />} />
      </Route>
    </Routes>
  );
}

export default App;
