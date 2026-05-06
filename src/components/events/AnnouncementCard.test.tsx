import { render, screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { describe, it, expect } from "vitest";
import { AnnouncementCard } from "./AnnouncementCard";
import type { Announcement } from "../../model/AnnouncementSchema";
import {announcement_2026_01_01_torneo_reyes} from "../../data/games/2026-01-01-torneo-reyes.ts";
import {announcement_2025_12_26_torneo_cyl} from "../../data/games/2025-12-26-torneo-cyl.ts";
import {announcement_2025_12_19_torneo_teruel} from "../../data/games/2025-12-19-torneo-teruel.ts";
import {announcement_2025_12_17_convocatoria_fbm_1} from "../../data/games/2025-12-17-convocatoria-fbm-1.ts";
import {announcement_2025_11_18_torneo_fll} from "../../data/games/2025-11-18-torneo-fll.ts";
import {announcement_2025_08_26_comienzo_temporada} from "../../data/games/2025-08-26-comienzo-temporada.ts";
import {announcement_2024_08_31_orbita_pro_camp_5} from "../../data/games/2024-08-31-orbita-pro-camp-j5.ts";
import {announcement_2024_08_30_orbita_pro_camp_4} from "../../data/games/2024-08-30-orbita-pro-camp-j4.ts";
import {announcement_2024_08_29_orbita_pro_camp_3} from "../../data/games/2024-08-29-orbita-pro-camp-j3.ts";
import {announcement_2024_08_28_orbita_pro_camp_2} from "../../data/games/2024-08-28-orbita-pro-camp-j2.ts";
import {announcement_2024_08_27_orbita_pro_camp_j1} from "../../data/games/2024-08-27-orbita-pro-camp-j1.ts";
import {announcement_2024_08_26_comienzo_temporada} from "../../data/games/2024-08-26-comienzo-temporada.ts";
import {announcement_2025_08_15_season_end} from "../../data/games/2025-08-15-season-end.ts";
import {announcement_2025_06_01_cec_presentacion} from "../../data/games/2025-06-01-cec-presentacion.ts";
import {announcement_2025_04_17_mhl_zaragoza} from "../../data/games/2025-04-17-mhl-zaragoza.ts";
import {announcement_2024_12_05_copa_ahorramas} from "../../data/games/2024-12-05-copa-ahorramas.ts";
import {announcement_2024_11_19_torneo_fll} from "../../data/games/2024-11-19-torneo-fll.ts";
import {announcement_2024_09_06_torneig_nord} from "../../data/games/2024-09-06-torneig-nord.ts";
import {announcement_2025_07_22_fbm_final_temporada} from "../../data/games/2025-07-22-fbm-final-temporada.ts";
import {announcement_2024_12_23_convocatoria_fbm_final} from "../../data/games/2024-12-23-convocatoria-fbm-final.ts";
import {announcement_2024_12_17_convocatoria_fbm_4} from "../../data/games/2024-12-17-convocatoria-fbm-4.ts";
import {announcement_2024_12_10_convocatoria_fbm_3} from "../../data/games/2024-12-10-convocatoria-fbm-3.ts";
import {announcement_2024_11_07_convocatoria_fbm_2} from "../../data/games/2024-11-07-convocatoria-fbm-2.ts";
import {announcement_2024_10_09_convocatoria_fbm_1} from "../../data/games/2024-10-09-convocatoria-fbm-1.ts";
import {announcement_2024_10_02_convocatoria_fbclm_2} from "../../data/games/2024-10-02-convocatoria-fbclm-2.ts";
import {announcement_2024_09_18_convocatoria_fbclm_1} from "../../data/games/2024-09-18-convocatoria-fbclm-1.ts";

const fakeAnnouncement: Announcement = {
  id: "torneo-reyes-2026",
  type: "announcement",
  season: "2025-26",
  date: "2026-01-01T09:00:00Z",
  title: "Torneo de Reyes",
  announcementType: "tournament",
  category: "U14M",
  description: [
    "Gran torneo durante las fiestas de Reyes.",
  ],
  references: [],
};

function renderWithRouter(ui: React.ReactElement) {
  return render(<MemoryRouter>{ui}</MemoryRouter>);
}

describe("AnnouncementCard", () => {

  it("renders title and category", () => {
    renderWithRouter(<AnnouncementCard announcement={fakeAnnouncement} />);

    expect(screen.getByText("Torneo de Reyes")).toBeInTheDocument();
    expect(screen.getByText("U14M")).toBeInTheDocument();
  });

  it("renders the tournament emoji", () => {
    renderWithRouter(<AnnouncementCard announcement={fakeAnnouncement} />);

    expect(screen.getByText("🏆")).toBeInTheDocument();
  });

  it("renders the description", () => {
    renderWithRouter(<AnnouncementCard announcement={fakeAnnouncement} />);

    expect(screen.getByText("Gran torneo durante las fiestas de Reyes.")).toBeInTheDocument();
    expect(screen.queryByText("· · ·")).not.toBeInTheDocument();
  });

  it("truncates description to 2 lines with ellipsis when more than 2", () => {
    const longAnnouncement: Announcement = {
      ...fakeAnnouncement,
      description: [
        "Primera línea visible.",
        "Segunda línea visible.",
        "Tercera línea oculta.",
      ],
    };

    renderWithRouter(<AnnouncementCard announcement={longAnnouncement} />);

    expect(screen.getByText("Primera línea visible.")).toBeInTheDocument();
    expect(screen.getByText("Segunda línea visible.")).toBeInTheDocument();
    expect(screen.getByText("· · ·")).toBeInTheDocument();
    expect(screen.queryByText("Tercera línea oculta.")).not.toBeInTheDocument();
  });

  it("renders the announcement date", () => {
    renderWithRouter(<AnnouncementCard announcement={fakeAnnouncement} />);

    expect(screen.getByText(/1.*ene.*2026/i)).toBeInTheDocument();
  });

  it("links to the announcement detail page", () => {
    renderWithRouter(<AnnouncementCard announcement={fakeAnnouncement} />);

    const link = screen.getByRole("link");
    expect(link).toHaveAttribute("href", "/announcements/torneo-reyes-2026");
  });

  it.each([
    [announcement_2026_01_01_torneo_reyes],
    [announcement_2025_12_26_torneo_cyl],
    [announcement_2025_12_19_torneo_teruel],
    [announcement_2025_12_17_convocatoria_fbm_1],
    [announcement_2025_11_18_torneo_fll],
    [announcement_2025_08_26_comienzo_temporada],
    [announcement_2025_08_15_season_end],
    [announcement_2025_07_22_fbm_final_temporada],
    [announcement_2025_06_01_cec_presentacion],
    [announcement_2025_04_17_mhl_zaragoza],
    [announcement_2024_12_23_convocatoria_fbm_final],
    [announcement_2024_12_17_convocatoria_fbm_4],
    [announcement_2024_12_10_convocatoria_fbm_3],
    [announcement_2024_12_05_copa_ahorramas],
    [announcement_2024_11_19_torneo_fll],
    [announcement_2024_11_07_convocatoria_fbm_2],
    [announcement_2024_10_09_convocatoria_fbm_1],
    [announcement_2024_10_02_convocatoria_fbclm_2],
    [announcement_2024_09_18_convocatoria_fbclm_1],
    [announcement_2024_09_06_torneig_nord],
    [announcement_2024_08_31_orbita_pro_camp_5],
    [announcement_2024_08_30_orbita_pro_camp_4],
    [announcement_2024_08_29_orbita_pro_camp_3],
    [announcement_2024_08_28_orbita_pro_camp_2],
    [announcement_2024_08_27_orbita_pro_camp_j1],
    [announcement_2024_08_26_comienzo_temporada],
  ])("renders announcement metadata and links to the detail page", (announcement) => {
    renderWithRouter(<AnnouncementCard announcement={announcement} />);

    expect(screen.getByText(announcement.title)).toBeInTheDocument();
    expect(screen.getByText(announcement.category)).toBeInTheDocument();
  });
});

