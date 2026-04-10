import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { HomePage } from "./pages/HomePage";
import { GameDetailPage } from "./pages/GameDetailPage";
import { FiltersProvider } from "./context/FiltersContext";

export function App() {
  return (
    <BrowserRouter>
      <FiltersProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/games/:gameId" element={<GameDetailPage />} />
          </Routes>
        </Layout>
      </FiltersProvider>
    </BrowserRouter>
  );
}
