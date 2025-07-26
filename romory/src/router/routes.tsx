
import MainLayout from "@/components/layout/MainLayout";
import HeroSection from "@/components/LandingPage/HeroSection";

export const routes = [
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HeroSection /> },
    ],
  },
];