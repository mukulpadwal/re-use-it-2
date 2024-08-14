import {
  createBrowserRouter,
  createRoutesFromElements,
  Navigate,
  Route,
} from "react-router-dom";
import { RandomUser, RandomJokes, CatsListing, ErrorPage } from "../components";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="" errorElement={<ErrorPage />}>
      <Route path="/" element={<Navigate to="/random-user" replace />} />
      <Route path="/random-user" element={<RandomUser />} />
      <Route path="/random-jokes" element={<RandomJokes />} />
      <Route path="/cats-listing" element={<CatsListing />} />
    </Route>
  )
);

export default router;
