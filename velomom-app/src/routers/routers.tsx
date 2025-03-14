// import React from "react";
// import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import '../index.css';
import LoginPage from "../pages/login";
import RegisterPage from "../pages/register";
import HomePage from "../pages/home";
import VeloVentPage from "../pages/velovent";
import Journaling from "../pages/journaling";
import DetailJurnal from "../pages/detailjurnal"
import ArticlePage from "../pages/artikel";
import VideoPage from "../pages/video";
import DetailVideo from "../pages/detailvideo";
import DetailArtikel from "../pages/detailartikel";
import DetailEventPage from "../pages/detailevent";
import TambahJournal from "../pages/tambahjurnal";
import TambahJournal2 from "../pages/tambahjurnal2";
import TambahJournal3 from "../pages/tambahjurnal3";
import ProfilePage from "../pages/profile";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <MainLayout>
        <HomePage />
      </MainLayout>
    ),
  },
  {
    path: "/login",
    element: (
      <MainLayout>
        <LoginPage />
      </MainLayout>
    ),
  },
  {
    path: "/register",
    element: (
      <MainLayout>
        <RegisterPage />
      </MainLayout>
    ),
  },
  {
    path: "/profile",
    element: (
      <MainLayout>
        <ProfilePage />
      </MainLayout>
    ),
  },
  {
    path: "/journaling",
    element: (
      <MainLayout>
        <Journaling />
      </MainLayout>
    ),
  },
  {
    path: "/tambah-journal",
    element: (
      <MainLayout>
        <TambahJournal />
      </MainLayout>
    ),
  },
  {
    path: "/tambah-journal2",
    element: (
      <MainLayout>
        <TambahJournal2 />
      </MainLayout>
    ),
  },
  {
    path: "/tambah-journal3",
    element: (
      <MainLayout>
        <TambahJournal3 />
      </MainLayout>
    ),
  },
  {
    path: "/journaling-detail",
    element: (
      <MainLayout>
        <DetailJurnal />
      </MainLayout>
    ),
  },
  {
    path: "/article-page",
    element: (
      <MainLayout>
        <ArticlePage />
      </MainLayout>
    ),
  },
  {
    path: "/video-page",
    element: (
      <MainLayout>
        <VideoPage />
      </MainLayout>
    ),
  },
  {
    path: "/detail-artikel",
    element: (
      <MainLayout>
        <DetailArtikel />
      </MainLayout>
    ),
  },
  {
    path: "/detail-video",
    element: (
      <MainLayout>
        <DetailVideo />
      </MainLayout>
    ),
  },
  {
    path: "/velovent-page",
    element: (
      <MainLayout>
        <VeloVentPage />
      </MainLayout>
    ),
  },
  {
    path: "/velovent-detail",
    element: (
      <MainLayout>
        <DetailEventPage />
      </MainLayout>
    ),
  },
]);

export default router;
