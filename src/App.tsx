import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Layout} from "./components/layout/Layout";
import {HomePage} from "./pages/HomePage";
import {GameDetailPage} from "./pages/GameDetailPage";
import {FiltersProvider} from "./context/FiltersContext";
import {AnnouncementDetailPage} from "./pages/AnnouncementDetailPage.tsx";

export function App() {
  return (
    <BrowserRouter>
      <FiltersProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/announcements/:announcementId" element={<AnnouncementDetailPage />} />
            <Route path="/games/:gameId" element={<GameDetailPage />} />
          </Routes>
        </Layout>
      </FiltersProvider>
    </BrowserRouter>
  );
}
