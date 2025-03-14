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
import NotFound from "../pages/notfound"
import ScrollToTop from "../hooks/scrollToTop"

const router = createBrowserRouter([
  {
    path: "/home",
    element: (
      <MainLayout>
        <ScrollToTop/>
        <HomePage />
      </MainLayout>
    ),
  },
  {
    path: "/login",
    element: (
      <MainLayout>
        <ScrollToTop/>
        <LoginPage />
      </MainLayout>
    ),
  },
  {
    path: "/register",
    element: (
      <MainLayout>
        <ScrollToTop/>
        <RegisterPage />
      </MainLayout>
    ),
  },
  {
    path: "/profile",
    element: (
      <MainLayout>
        <ScrollToTop/>
        <ProfilePage />
      </MainLayout>
    ),
  },
  {
    path: "/journaling",
    element: (
      <MainLayout>
        <ScrollToTop/>
        <Journaling />
      </MainLayout>
    ),
  },
  {
    path: "/tambah-journal",
    element: (
      <MainLayout>
        <ScrollToTop/>
        <TambahJournal/>
      </MainLayout>
    ),
  },
  {
    path: "/tambah-journal2",
    element: (
      <MainLayout>
        <ScrollToTop/>
        <TambahJournal2/>
      </MainLayout>
    ),
  },
  {
    path: "/tambah-journal3",
    element: (
      <MainLayout>
        <ScrollToTop/>
        <TambahJournal3/>
      </MainLayout>
    ),
  },
  {
    path: "/journaling-detail",
    element: (
      <MainLayout>
        <ScrollToTop/>
        <DetailJurnal/>
      </MainLayout>
    ),
  },
  {
    path: "/article-page",
    element: (
      <MainLayout>
        <ScrollToTop/>
        <ArticlePage/>
      </MainLayout>
    ),
  },
  {
    path: "/video-page",
    element: (
      <MainLayout>
        <ScrollToTop/>
        <VideoPage/>
      </MainLayout>
    ),
  },
  {
    path: "/detail-artikel",
    element: (
      <MainLayout>
        <ScrollToTop/>
        <DetailArtikel/>
      </MainLayout>
    ),
  },
  {
    path: "/detail-video",
    element: (
      <MainLayout>
        <ScrollToTop/>
        <DetailVideo/>
      </MainLayout>
    ),
  },
  {
    path: "/velovent-page",
    element: (
      <MainLayout>
        <ScrollToTop/>
        <VeloVentPage/>
      </MainLayout>
    ),
  },
  {
    path: "/velovent-detail",
    element: (
      <MainLayout>
        <ScrollToTop/>
        <DetailEventPage/>
      </MainLayout>
    ),
  },
  {
    path: "*",
    element: (
      <MainLayout>
        <ScrollToTop/>
        <NotFound />
      </MainLayout>
    ),
  },
]);

export default router;
