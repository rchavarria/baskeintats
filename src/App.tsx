import {BrowserRouter, Route, Routes} from "react-router-dom";
import {Layout} from "./components/layout/Layout";
import {HomePage} from "./pages/HomePage";
import {GameDetailPage} from "./pages/GameDetailPage";
import {FiltersProvider} from "./context/FiltersContext";
import {AnnouncementDetailPage} from "./pages/AnnouncementDetailPage.tsx";
import {ScoutingDetailPage} from "./pages/ScoutingDetailPage.tsx";

export function App() {
  return (
    <BrowserRouter basename="/baskeintats">
      <FiltersProvider>
        <Layout>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/announcements/:announcementId" element={<AnnouncementDetailPage />} />
            <Route path="/games/:gameId" element={<GameDetailPage />} />
            <Route path="/scouting/:scoutingId" element={<ScoutingDetailPage />} />
          </Routes>
        </Layout>
      </FiltersProvider>
    </BrowserRouter>
  );
}
