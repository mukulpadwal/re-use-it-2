import { createRoot } from "react-dom/client";
import "./index.css";
import router from "./utils/router";
import { RouterProvider } from "react-router-dom";
import { SkeletonTheme } from "react-loading-skeleton";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

const client = new QueryClient();

createRoot(document.getElementById("root")).render(
  <QueryClientProvider client={client}>
    <SkeletonTheme baseColor="#313131" highlightColor="#525252">
      <RouterProvider router={router} />
    </SkeletonTheme>
  </QueryClientProvider>
);
