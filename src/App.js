import { Route, Routes } from "react-router-dom";
import PageLayout from "./layout/PageLayout";
import Movie from "./pages/Movie";
import Review from "./pages/Review";
import Home from "./pages/Home";
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<PageLayout />}>
          <Route path="" element={<Home />} />
          <Route path="movies/:id" element={<Movie />} />
          <Route path="reviews/:id" element={<Review />} />
        </Route>
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
