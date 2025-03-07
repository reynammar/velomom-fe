// import React from "react";
// import ReactDOM from "react-dom/client";
import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import '../index.css';
import LoginPage from "../pages/login";
import RegisterPage from "../pages/register";
import HomePage from "../pages/home";
import VeloVentPage from "../pages/velovent";
import VeloGuidePage from "../pages/artikel";
import Journaling from "../pages/journaling";
import DetailJurnal from "../pages/detailjurnal"

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
    path: "/journaling",
    element: (
      <MainLayout>
        <Journaling />
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
    path: "/veloguide-page",
    element: (
      <MainLayout>
        <VeloGuidePage />
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
]);

export default router;
