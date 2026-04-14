import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import { HomePage } from "./pages/HomePage";
import { GameDetailPage } from "./pages/GameDetailPage";
import { FiltersProvider } from "./context/FiltersContext";
import {AdvancedGameDetailPage} from "./pages/AdvancedGameDetailPage.tsx";

export function App() {
  return (
    <BrowserRouter>
      <FiltersProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/games/:gameId" element={<GameDetailPage />} />
            <Route path="/games/advanced/:gameId" element={<AdvancedGameDetailPage />} />
          </Routes>
        </Layout>
      </FiltersProvider>
    </BrowserRouter>
  );
}
