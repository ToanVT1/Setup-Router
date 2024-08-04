import { createBrowserRouter, Link } from "react-router-dom";
import App from "../App";
import { lazy, Suspense } from "react";

//lazy load
const Clothes = lazy(() => import("../atomic/pages/clothes"));
const Food = lazy(() => import("../atomic/pages/food/food"));

export const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <div>
        <h1>Bai Tap Setup Router</h1>
        <Link to="clothes">Clothes</Link>
        <Link to="food">Food</Link>
      </div>
    ),
  },
  {
    path: "about",
    element: <>About</>,
  },
  {
    path: "clothes",
    element: (
      <Suspense>
        <Clothes />
      </Suspense>
    ),
  },
  {
    path: "food",
    element: (
        <Suspense>
          <Food />
        </Suspense>
      ),
    },
  {
    path: "*",
    element: <div>Not Found</div>,
  },
]);
